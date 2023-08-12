<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;

use App\Http\Controllers\Sistema\Modelos\Areas as Modelo;

use Illuminate\Http\Request;

class AreasController extends BaseController
{
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }

    public function handleListar(Request $request){
        $data = Modelo::orderBy('id',"asc")
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
}
