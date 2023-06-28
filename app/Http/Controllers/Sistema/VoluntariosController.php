<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Email\MailController;

use App\Http\Controllers\Sistema\Modelos\Voluntarios as Modelo;

use Illuminate\Http\Request;

class VoluntariosController extends BaseController
{
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }
    public function validCode(Request $request){
        $payload = $request->all();
        $tmp = Modelo::where('codeEmail',$payload['code'])->get();
        return self::responsee(
            sizeof($tmp) == 1 ? 'Codigo valido':'Ocurrio un error, codigo invalido',
            true,
            sizeof($tmp) == 1 ? $tmp[0]:[],
        );
    }
    
    public function insertVoluntarioWithCorreo($data){
        // dd('insertVoluntarioWithCorreo');
        $data['codeEmail'] = self::generateCode();
        Modelo::create($data);
        $data['link'] = $_SERVER['HTTP_HOST'].'/registro'.'/'.$data['codeEmail'];
        MailController::sendMailWithTemplate($data,'new-voluntario-out');
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

    public function handleListar(Request $request){
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            self::filtrar($request->all(), new Modelo()),
        );
    }
}
