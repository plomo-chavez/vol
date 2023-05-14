<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class BaseController extends Controller
{
    public static function response($message = 'Tenemos un error'){
        return array(
            'result'    => false,
            'message'   => $message,
            'data'      => null,
        );
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

    public function actualizar($payload, $modelo) {
       if($payload['id']){
           $modelo::updateOrCreate(['id' => $payload['id']],$payload);
           return self::responsee('Registro actualizado corrrectamente.');
       } else {
           return self::responsee('Actualizar no tiene id.', false);
       }
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
                default:
                    return self::responsee('Acción no válida', false);
            }
        } else {
            return self::responsee('No existe una acción.', false);
        }
    }
}
