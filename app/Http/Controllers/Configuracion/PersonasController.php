<?php
namespace App\Http\Controllers\Configuracion;

use App\Http\Controllers\Configuracion\Modelos\Persona as Modelo;
use App\Http\Controllers\BaseController;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class PersonasController extends BaseController
{
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }

    public function handleListar(Request $request){
        $data = Modelo::orderBy('id',"asc")
            ->with('estatus')
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
}
