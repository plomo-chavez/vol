<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;

use App\Http\Controllers\Sistema\Modelos\HorasVoluntarias as Modelo;
use App\Http\Controllers\Sistema\Modelos\HorasVoluntariasContadores;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;

use Illuminate\Http\Request;

class HorasVoluntariasController extends BaseController
{
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }

    public function handleListar(Request $request){
        $data = [];
        $payload = $request->all();
        $idsDelegacion = self::idsDelegacionesXVoluntarioID($payload['voluntario_id'] ?? null);
        if($idsDelegacion != null){
            $voluntariosID = Voluntarios::whereIn('delegacion_id',$idsDelegacion)->pluck('id')->toArray();
            $data = HorasVoluntariasContadores::whereIn('voluntario_id',$voluntariosID)->with('voluntario:id,nombre,primerApellido,segundoApellido')->get();
            $data = $data->toArray();
            foreach ($data as $index => $item) {
                $data[$index]['voluntario'] = $data[$index]['voluntario']['nombreCompleto'];
            }
        }
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
}
