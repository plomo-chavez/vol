<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Sistema\Modelos\Delegaciones;
use App\Http\Controllers\Sistema\Modelos\Coordinadores;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;
use App\Http\Controllers\Sistema\Modelos\ContadorNumeroInterno;
use App\Http\Controllers\Auth\Models\User;
use Illuminate\Support\Facades\Storage;
use Dompdf\Dompdf;
use Carbon\Carbon;
use PDF;

class BaseController extends Controller{
    public static function response($message = 'Tenemos un error'){
        return array(
            'result'    => false,
            'message'   => $message,
            'data'      => null,
        );
    }
    public static function fechaWithHora($AM = true){
        // Obtener la fecha actual utilizando Carbon
        $fechaActual = Carbon::now('America/Mexico_City');
        // Formatear la fecha como cadena (opcional)
        $formtato = 'Y-m-d h:i:s';
        $formtato = $formtato . ($AM ? 'A' : '');
        return $fechaActual->format($formtato);
    }
    public static function fechaYMD(){
        // Obtener la fecha actual utilizando Carbon
        $fechaActual = Carbon::now('America/Mexico_City');
        // Formatear la fecha como cadena (opcional)
        return $fechaActual->format('Y-m-d');
    }
    public static function fechaNow(){
        // Obtener la fecha actual utilizando Carbon
        $fechaActual = Carbon::now('America/Mexico_City');
        // Formatear la fecha como cadena (opcional)
        return $fechaActual;
    }
    public static function findVoluntarioIDPorCodigoEscaneado($codigo = null){
        $tmp = null;
        if ($codigo != null) {
            $busqueda = "http://sccrm.mx";
            if (strpos($codigo, $busqueda) !== false) {
                $ultimoIgual = strrpos($codigo, "=");
                if ($ultimoIgual !== false) {
                    $textoExtraido = substr($codigo, $ultimoIgual + 1);
                    $data = Voluntarios::where('codigoCredencial', $textoExtraido)
                    ->select('id')
                    ->get();
                    $tmp = sizeof($data) == 1 ? $data[0]->id : null;
                }
            } else {
                $data = Voluntarios::where('numeroAsociado', $codigo)
                ->select('id')
                ->get();
                $tmp = sizeof($data) == 1 ? $data[0]->id : null;
            }
        }
        return $tmp;
    }
    public static function getNombreDelegacion($delegacion = null){
        if ($delegacion != null) {
            $delegacion['nombre'] = 
                $delegacion['isLocal'] ? 
                    ('Local de ' . $delegacion['ciudad']) : 
                    ('Estatal de ' . ($delegacion['estado']['nombre'] ?? ''));
        }
        return $delegacion;
    }
    public static function getNumeroInerno($delegacionID = null){
        // VOL-Año-Estado-XXXX
        // VOL23120001
        $numeroInterno = null;
        if ($delegacionID != null) {
            $delegacion = Delegaciones::find($delegacionID);
            if ($delegacion != null) {
                $registro = ContadorNumeroInterno::where('estado_id',$delegacion->estado_id)->get();
                $isNuevo = sizeof($registro) == 0;
                $contador = $isNuevo ? 0 : $registro[0]->numero;
                $contador = $contador + 1;
                if ($isNuevo) {
                    ContadorNumeroInterno::create([
                        'estado_id' => $delegacion->estado_id,
                        'numero' => $contador,
                    ]);
                } else {
                    $registro[0]->numero = $contador;
                    $registro[0]->save();
                }
                $numeroInterno = 'VOL'.date('y').str_pad($delegacion->estado_id, 2, '0', STR_PAD_LEFT).str_pad($contador, 4, '0', STR_PAD_LEFT);
            }
        }
        return $numeroInterno;
    }
    public static function responsee(
        $message = 'Tenemos un error',
        $result = true,
        $data = null
    ) {
        return response()->json(array(
            'result'    => $result,
            'message'   => $message,
            'data'      => $data,
        ), 200);
    }
    public function insertar($payload, $modelo) {
        $modelo::create($payload);
        return self::responsee('Registro guardado corrrectamente.');
    }
    public function getVoluntariosXDelegacion($delegacionID = null) {
        $data = [];
        if ($delegacionID != null) {
            $data = Voluntarios::where('delegacion_id', $delegacionID)
            ->select('id','delegacion_id','nombre','primerApellido','segundoApellido','numeroAsociado','numeroInterno')
            ->get();
        }
        return $data;
    }
    public function insertMulti($payload, $modelo) {
        foreach ($payload['data'] as $key => $value) {
            $modelo::create($value);
        }
        return self::responsee('Registro guardado corrrectamente.');
    }
    public function actualizar($payload, $modelo) {
       if($payload['id']){
           $modelo::updateOrCreate(['id' => $payload['id']],$payload);
           return self::responsee('Registro actualizado corrrectamente.');
       } else {
           return self::responsee('Actualizar no tiene id.', false);
       }
    }
    public function generateCode($num = 12) {
        $date = date('YmdHis');
        $code = uniqid($date);
        $generatedCode = substr($code, -$num); // Extraer los últimos "num" caracteres del código generado
        // $generatedCode = substr($code, 0, $num); // Extraer los primeros "desiredLength" caracteres del código generado
        return $generatedCode;
    }
    public function eliminar($payload, $modelo) {
        if($payload['id']){
            $modelo::whereIn('id', [$payload['id']])->delete();
            return self::responsee('Registro eliminado corrrectamente.');
        } else {
            return self::responsee('Para poder eliminar se requiere el id.', false);
        }
    }
    public function administrar(array $payload = [], Model $modelo = null) {
        if (isset($payload['accion'])) {
            switch($payload['accion']){
                case 1:
                    return self::insertar($payload, $modelo);
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
    public function filtrar(array $payload = [], Model $modelo = null,$columnOrder = 'nombre') {
        $filtros = array_key_exists('payload', $payload) ? $payload['payload'] : [];
        $query = $modelo::query()->orderBy($columnOrder, 'asc');
        foreach ($filtros as $column => $value) {
            if (is_array($value)) {
                $query->whereBetween($column, $value);
            } else {
                $query->where($column, $value);
            }
        }
        $data = $query->get();
        return $data;
    }
    public static function getMainURL() {
        $isSecure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        $protocol = $isSecure ? 'https://' : 'http://';
        return $protocol . $_SERVER['HTTP_HOST'];
        
    }
    public static function getURLCodeInterno($code) {
        return self::getMainURL().'/scan?code='.$code;

    }
    public function getDelegacionIDXUsuario($userID) {
        $userID = 17;
        $response = null;
        if (isset($userID)) {
            $user = User::find($userID);
            if($user != null){
                switch($user->tipoUsuario_id){
                    case 1:
                        $response =  null;
                        break;
                    case 2:
                        $response =  null;
                        break;
                    case 3:
                        $coordinador =  Coordinadores::where('usuario_id',$userID)->get();
                        $response = $coordinador == null ? null : (sizeof($coordinador) == 1 ? $coordinador[0]->delegacion_id : null);
                        break;
                    case 4:
                        $coordinador =  Coordinadores::where('usuario_id',$userID)->get();
                        $response = $coordinador == null ? null : (sizeof($coordinador) == 1 ? $coordinador[0]->delegacion_id : null);
                        break;
                    case 5:
                        $user = User::find($userID);
                        if ($user != null){
                            $voluntario = Voluntarios::find($user->voluntario_id);
                            if ($voluntario != null) {
                                $response = $voluntario->delegacion_id;
                            }
                        } 
                        break;
                }
            }
        }
        return $response;
        
    }
    public function idsDelegacionesXTipoUsuario($tipoUsuarioID) {
        // '1', 'Administrador'
        // '2', 'CN -  Coordinador Nacional' 
        // '3', 'CE -  Coordinador Estatal'
        // '4', 'CL -  Coordinador Local'
        // '5', 'Verificador Horas Voluntarias'
        switch($tipoUsuarioID){
            case 1:
                return Delegaciones::pluck('id')->toArray();
                break;
            case 2:
                return Delegaciones::pluck('id')->toArray();
                break;
            case 3:
                return Delegaciones::pluck('id')->toArray();
                break;
            case 4:
                return Delegaciones::pluck('id')->toArray();
                break;
            case 5:
                return Delegaciones::pluck('id')->toArray();
                break;
        }
    }

    public static function sendStorage($file,$folder,$filename) {
        if($filename == null){
            $filename = $file->getClientOriginalName();
        } else{
            $extension = $file->getClientOriginalExtension();
            $filename = $filename.'.'.$extension;
        }
        // Almacenar el archivo en el almacenamiento
        $path = Storage::disk('public')->putFileAs($folder, $file, $filename);
        // Obtener la URL interna del archivo
        $url = Storage::disk('public')->url($path);

        $currentHost = request()->getHost();

        if (request()->getHost() === 'localhost') {
            // Estás en localhost
            $url = self::getMainURL().(str_replace('http://localhost', '', $url));
        }
        return  $url;
        
    }
}
