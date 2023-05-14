<?php

namespace App\Http\Controllers\Configuracion;

use App\Http\Controllers\Auth\Models\User;
use App\Http\Controllers\BaseController;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;


class UsuariosController extends BaseController
{
    public function getUsuarios(Request $request){
        $response = BaseController::response();
        $payload = $request->all();
        // var_dump($payload);
        // $users = User::where('age', '>', 18)
        //      ->orderBy('name', 'asc')
        //      ->get();
        $users = User::all();
        $response['result']    = true;
        $response['data']      = $users;
        $response['message']      =  'User Logged In Successfully';
        return response()->json($response, 200);
    }

    public function listarUsuarios(Request $request){
        $response = BaseController::response();
        $payload = $request->all();
        // var_dump($payload);
        // $users = User::where('age', '>', 18)
        //      ->orderBy('name', 'asc')
        //      ->get();
        $users = User::with('tipoUsuario')->get();
        $response['result']    = true;
        $response['data']      = $users;
        $response['message']      =  'User Logged In Successfully';
        return response()->json($response, 200);
    }

    public function administrarUsuarios(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new User());
    }

    public function administrar(array $payload = [], Model $modelo = null) {
        if (isset($payload['accion'])) {
            switch($payload['accion']){
                case 1:
                    return self::insertar($payload, $modelo);
                    break;
                case 2:
                    if (array_key_exists('subaccion', $payload)) {
                        return self::actualizar($payload, $modelo);
                    } else {
                        return self::actualizar($payload, $modelo);
                    }
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

    public function insertar($payload, $modelo) {
        $count = DB::table('usuarios')->where('email', '=', $payload['email'])->count();
        if($count == 0){
            $count = DB::table('usuarios')->where('telefono', '=', $payload['telefono'])->count();
            if($count == 0){
                if (gettype($payload['tipoUsuario']) == 'array') { $payload['tipoUsuario'] = $payload['tipoUsuario']['value']; }
                $registro = $modelo::create($payload);
                $registro->password = Hash::make($payload['contraseña']);
                $registro->save();
                return self::responsee('Registro guardado corrrectamente.');
            } else {
                return self::responsee('El telefono ya esta registrado.', false);
            }
        } else {
            return self::responsee('El correo ya esta registrado.', false);

        }
    }
}
