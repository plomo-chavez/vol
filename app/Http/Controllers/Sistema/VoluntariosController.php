<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\QRController;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\Email\MailController;
use App\Http\Controllers\Sistema\Modelos\DelegacionAreasCoordinadores;
use App\Http\Controllers\Sistema\Modelos\HorasVoluntarias;
use App\Http\Controllers\Sistema\Modelos\HorasVoluntariasContadores;
use App\Http\Controllers\Sistema\Modelos\Voluntarios as Modelo;


use Illuminate\Database\Eloquent\Model;
// use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\View;
// use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Dompdf\Dompdf;
use Carbon\Carbon;
use PDF;

class VoluntariosController extends BaseController {
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }

    public function handleListar(Request $request){
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            self::filtrar($request->all(), new Modelo()),
        );
    }

    public function administrar(array $payload = [], Model $modelo = null) {
        if (isset($payload['accion'])) {
            switch($payload['accion']){
                case 1:
                    return self::ifExisteVoluntario($payload);
                    break;
                case 2:
                    return self::ifExisteVoluntario($payload, $payload['id'] ?? null);
                    break;
                case 3:
                    return self::eliminar($payload, $modelo);
                    break;
                case 4:
                    return self::insertMulti($payload, $modelo);
                break;
                case 5:
                    return self::actualizarOut($payload, $modelo);
                break;            
                case 6:
                    return self::actualizarCodigo($payload, $modelo);
                break;
                default:
                    return self::responsee('Acción no válida', false);
            }
        } else {
            return self::responsee('No existe una acción.', false);
        }
    }
    
    public function getVoluntario(Request $request){
        $payload = $request->all();
        $payload = $payload['payload'];
        $tmp = Modelo::where('id',$payload['id'])
        ->with('area')
        ->with('delegacion')
        ->with('delegacion.estado')
        ->with('delegacion.areas')
        ->get();
        $tmp = sizeof($tmp) == 1 ? $tmp[0]->toArray() : null;
        if ($tmp != null) {
            if($tmp['delegacion_id'] != 0){
                $name = self::getNombreDelegacion($tmp['delegacion']);
                if ($name != null) {
                    $tmp['delegacion'] = $name;
                }
            }
        }
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $tmp,
        );
    }

    public function validCode(Request $request){
        $payload = $request->all();
        $tmp = Modelo::where('codeEmail',$payload['code'])
        ->with('area')
        ->with('delegacion')
        ->with('delegacion.estado')
        ->with('delegacion.areas')
        ->get();
        return self::responsee(
            sizeof($tmp) == 1 ? 'Codigo valido':'Ocurrio un error, codigo invalido',
            true,
            sizeof($tmp) == 1 ? $tmp[0]:null,
        );
    }
    public function registroOut(Request $request){
        $payload = $request->all();
        $payload = $payload['data'];
        return self::ifExisteVoluntario($payload);
    }

    public function validCurp(Request $request){
        $data = false;
        if(array_key_exists('curp',$request->all()['payload']) ){
            $data = self::filtrar($request->all(), new Modelo());
            $data = sizeof($data) == 0;
        }
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getHome(Request $request){
        $data = [];
        $payload = $request->all();
        $ids = self::idsDelegacionesXTipoUsuario($payload['tipousuario_id'],$payload['delegacion_id']);
        $voluntarios = Modelo::whereIn('delegacion_id',$ids)->pluck('id')->toArray();
        $data['numeroVoluntarios'] = count($voluntarios);
        $HVMes = HorasVoluntarias::whereIn('voluntario_id',$voluntarios)->pluck('tiempoMinutos')->toArray();
        $totalMes = array_sum($HVMes);
        // Obtiene el primer y último día del mes actual
        $mesActual = self::fechaNow()->startOfMonth();
        $ultimoDiaMes = self::fechaNow()->endOfMonth();

        // Obtiene las horas voluntarias para los voluntarios seleccionados y el mes actual
        $HVTotal = HorasVoluntarias::whereIn('voluntario_id', $voluntarios)
            ->whereBetween('created_at', [$mesActual, $ultimoDiaMes])
            ->pluck('tiempoMinutos')
            ->toArray();
        $totalTotal = array_sum($HVTotal);
        $contador = HorasVoluntariasContadores::where('voluntario_id',$payload['voluntario_id'])->get()[0] ?? null;
        $data['tiempoMes']              = self::minutosATiempo($totalMes);
        $data['tiempoTotal']            = self::minutosATiempo($totalTotal);
        $data['voluntarioTiempoMes']    = $contador->tiempoMes   ?? 'No hay registros.';
        $data['voluntarioTiempoTotal']  = $contador->tiempoTotal ?? 'No hay registros.';
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    
    public function actualizarOut($payload, $modelo){
        $payload['codeEmail'] = null;
        return  self::actualizar($payload, $modelo);
    }
    public function actualizarCodigo($payload, $modelo){
        $codigo = self::extraerCodigoCredencialNacional($payload['codigo'] ?? null);
        $payload['codigoCredencial'] = $codigo;
        return  self::actualizar($payload, $modelo);
    }

    public function insertVoluntarioWithCorreo($data){
        $data['codeEmail'] = self::generateCode();
        $delegacionIDXUsuario = self::getDelegacionIDXUsuario($data['userID'] ?? null);
        if (isset($data['delegacion_id'])) {
            $data['numeroInterno'] = self::getNumeroInerno($data['delegacion_id']);
        }
        Modelo::create($data);
        $isSecure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        $protocol = $isSecure ? 'https://' : 'http://';
        $data['link'] = $protocol . $_SERVER['HTTP_HOST'] . '/registro?code=' . $data['codeEmail'];
        $data['correoEnvio'] = $data['correo'];
        unset($data['delegacion']);
        MailController::sendMailWithTemplate($data,'new-voluntario-out');
        return self::responsee(
            'Voluntario registrado correctamente.',
            true,
            [],
        );
    }

    public function ifExisteVoluntario($data,$voluntarioId = null){
        if (($data['numeroAsociado'] ?? false ) && strlen($data['numeroAsociado']) === 5) {
            $query = Modelo::where('numeroAsociado', [$data['numeroAsociado']]);
            if($voluntarioId != null ){ $query = $query->whereNot('id',$voluntarioId); }
            $query = $query->get();
            if ($query->count() != 0) {
                return self::responsee(
                    'El numero de asociado ya esta registrado',
                    false,
                    [],
                );
            }
        }
        if (isset($data['curp']))  {
            $query = Modelo::where('curp', [$data['curp']]);
            if($voluntarioId != null ){ $query = $query->whereNot('id',$voluntarioId); }
            $query = $query->get();
            if ($query->count() != 0) {
                return self::responsee(
                    'La curp ya esta registrada',
                    false,
                    [],
                );
            }
        }
        if (isset($data['correo']))  {
            $query = Modelo::where('correo', [$data['correo']]);
            if($voluntarioId != null ){ $query = $query->whereNot('id',$voluntarioId); }
            $query = $query->get();
            if ($query->count() != 0) {
                return self::responsee(
                    'El correo ya esta registrado',
                    false,
                    [],
                );
            }
        }
        return $voluntarioId != null ? self::actualizarNow($data, new Modelo()) : self::insertVoluntarioWithCorreo($data, new Modelo());
    }
    public function actualizarNow($payload, $modelo) {
        if(isset($payload['id'])){
            $registro = $modelo::find($payload['id']);
            if (($registro->numeroInterno == NULL )) {
                if (isset($payload['delegacion_id'])) {
                    $payload['numeroInterno'] = self::getNumeroInerno($payload['delegacion_id']);
                }
            }
            // dd($registro,$registro->numeroInterno == NULL,isset($payload['delegacion_id']),$payload);
            $modelo::updateOrCreate(['id' => $payload['id']],$payload);
            return self::responsee('Registro actualizado corrrectamente.');
        } else {
            return self::responsee('Actualizar no tiene id.', false);
        }
     }
}
