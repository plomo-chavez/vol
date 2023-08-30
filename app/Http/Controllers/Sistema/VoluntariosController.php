<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\QRController;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\Email\MailController;
use App\Http\Controllers\Sistema\Modelos\DelegacionAreasCoordinadores;
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
                    return self::actualizar($payload, $modelo);
                    break;
                case 3:
                    return self::eliminar($payload, $modelo);
                    break;
                case 4:
                    return self::insertMulti($payload, $modelo);
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
        $tmp = Modelo::where('codeEmail',$payload['code'])->get();
        return self::responsee(
            sizeof($tmp) == 1 ? 'Codigo valido':'Ocurrio un error, codigo invalido',
            true,
            sizeof($tmp) == 1 ? $tmp[0]->id:null,
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


    public function generatePDFVoluntarios(Request $request){
        $payload = $request->all();
        $pdfContent = self::generateFichaRegistro($payload);
        if (isset($pdfContent['status']) && !$pdfContent['status']) {
            return self::responsee(
                $pdfContent['message'],
                $pdfContent['status'],
               [] ,
            );
        } else {
            $response = response($pdfContent, 200, [ 'Content-Type' => 'application/pdf', ]);
            return $response;
        }
    }
    
    public static function generateFichaRegistro($payload) {
        try {
            if (!($payload['voluntario_id'] ?? false)) {
                return self::response($message = 'Falta voluntario_id');
            } else {
                $data = Modelo::find($payload['voluntario_id'])->toArray();
                if ($data != null) {
                    $path = 'voluntarios'.'/'.$data['numeroInterno'];
                    $urlCodigoInterno = self::getURLCodeInterno($data['numeroInterno']);
                    $data['qrCode'] = QRController::generateAndSaveQR($urlCodigoInterno,$path,'qrScanVoluntario');
                    return array(
                        'result'    => true,
                        'message'   => 'PDF generado con exito',
                        'data'      => PDFController::generatePDF($data,'pdf.voluntario-fichaRegistro','voluntario-fichaRegistro.pdf'),
                    );
                } else {
                    return self::response($message = 'Problemas con la resevación');
                }
            }
        } catch (Exception $e) {
            // Manejar la excepción aquí
            return self::response($message = 'Ha ocurrido una excepción: ' . $e->getMessage());
        }

    }
    public function generatePDFCRedencialTemporal(Request $request){
        $payload = $request->all();
        $pdfContent = self::generateCredencialTemporal($payload);
        if (isset($pdfContent['result']) && !$pdfContent['result']) {
            return self::response($message = $pdfContent['message']);
        } else {
            return response($pdfContent['data'], 200, [ 'Content-Type' => 'application/pdf', ]);
        }
    }
    public static function generateCredencialTemporal($payload) {
        try {
            if (!($payload['voluntario_id'] ?? false)) {
                return self::response($message = 'Falta voluntario_id');
            } else {
                $data = Modelo::find($payload['voluntario_id'])->toArray();
                $delegacion_id = $data['delegacion_id']; 
                if ($data != null) {
                    if (($delegacion_id == 0 || $delegacion_id == null)) {
                        return self::response($message = 'Este voluntario no pertenece a una delegación');
                    }
                    if (($data['numeroInterno'] == null)) {
                        return self::response($message = 'Este voluntario no tiene un numero interno');
                    }
                    $coordinador = self::coordinadorParaFirmas($delegacion_id);                 
                    if ($coordinador == null) {
                        return self::response($message = 'Error con el coordinador, checar datos de la delegación.');
                    }
                    if ($coordinador['uriFirma'] == null || $coordinador['uriSello'] == null ) {
                        return self::response($message = 'Faltan archivos del coordinador.');
                    }
                    $duracion = $payload['duracion'] ?? 60;
                    $data['coordinador']    = strtoupper($coordinador['nombre']);
                    $data['uriFirma']       = $coordinador['uriFirma'];
                    $data['uriSello']       = $coordinador['uriSello'];
                    $data['urlVoluntario']  = $data['urlImagen'];
                    $data['dias']           = $duracion;
                    $data['fechaInicio']    = self::fechaNow($payload['duracion'] ?? null,'d/m/Y');
                    $data['fechaFin']       = self::fechaNow($payload['duracion'] ?? null,'d/m/Y',$duracion);
                    $data['nombre']         = strtoupper($data['nombre']);
                    $data['primerApellido'] = strtoupper($data['primerApellido']);
                    $data['segundoApellido']= strtoupper($data['segundoApellido']);
                    $urlCodigoInterno = self::getURLCodeInterno($data['numeroInterno']);
                    $path = 'voluntarios'.'/'.$data['numeroInterno'];
                    $data['qrCode'] = QRController::generateAndSaveQR($data['numeroInterno'],$path,'qrCredencialTemporal');
                    return array(
                        'result'    => true,
                        'message'   => 'PDF generado con exito',
                        'data'      => PDFController::generatePDF($data,'pdf.voluntario-credencialTemporal','voluntario-credencialTemporal.pdf'),
                    );
                } else {
                    return self::response($message = 'Problemas con la resevación');
                }
            }
        } catch (Exception $e) {
            // Manejar la excepción aquí
            return self::response($message = 'Ha ocurrido una excepción: ' . $e->getMessage());
        }

    }

    public function insertVoluntarioWithCorreo($data){
        // dd('insertVoluntarioWithCorreo');
        $data['codeEmail'] = self::generateCode();
        $delegacionIDXUsuario = self::getDelegacionIDXUsuario($data['userID'] ?? null);
        // $data['delegacion_id'] = $delegacionIDXUsuario == null ? (isset($data['delegacion_id']) ? $data['delegacion_id'] : null) : $delegacionIDXUsuario;
        $data['numeroInterno'] = self::getNumeroInerno($data['delegacion_id']);
        Modelo::create($data);
        $isSecure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        $protocol = $isSecure ? 'https://' : 'http://';
        $data['link'] = $protocol . $_SERVER['HTTP_HOST'] . '/registro?code=' . $data['codeEmail'];
        $data['correoEnvio'] = $data['correo'];
        // MailController::sendMailWithTemplate($data,'new-voluntario-out');
        return self::responsee(
            'Voluntario registrado correctamente.',
            true,
            [],
        );
    }

    public function ifExisteVoluntario($data){
        if (($data['numeroAsociado'] ?? false ) && strlen($data['numeroAsociado']) === 5) {
            $query = Modelo::where('numeroAsociado', [$data['numeroAsociado']]);
            $query = $query->get();
            if (sizeof($query) == 0) {
                // dd('ifExisteVoluntario -> if');
                return self::insertVoluntarioWithCorreo($data);
            } else {
                return self::responsee(
                    'El numero de asociado ya esta registrado',
                    false,
                    [],
                );
            }
        }else {
            $query = Modelo::where('curp', [$data['curp']]);
            $query = $query->get();
            if (sizeof($query) == 0) {
                $query = Modelo::where('correo', [$data['correo']]);
                $query = $query->get();
                if (sizeof($query) == 0) {
                    // dd('ifExisteVoluntario -> else');
                    return self::insertVoluntarioWithCorreo($data);
                } else {
                    return self::responsee(
                        'El correo electronico ya esta registrado',
                        false,
                        [],
                    );
                }
            } else {
                return self::responsee(
                    'La curp ya esta registrada',
                    false,
                    [],
                );
            }
        }
    }
}
