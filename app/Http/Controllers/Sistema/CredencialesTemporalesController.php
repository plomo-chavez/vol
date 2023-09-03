<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Sistema\Modelos\CredencialTemporal as Modelo;

use Illuminate\Http\Request;

class CredencialesTemporalesController extends BaseController
{
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }
    public function handleListar(Request $request){
        $tmp = Modelo::orderBy('id', "asc")
        ->with('emitio')
        ->with('voluntario')
        ->get()
        ->toArray();
        $data = array();

        foreach ($tmp as $item) {
            $data[] = array(
                'id'               => $item['id'],
                'fechaEmision'     => $item['fechaEmision'],
                'fechaVencimiento' => $item['fechaVencimiento'],
                'isActual'         => $item['isActual'],
                'numeroInterno'    => $item['voluntario']['numeroInterno'] ?? '',
                'voluntario_id'    => $item['voluntario']['id'] ?? '',
                'voluntario'       => $item['voluntario']['nombreCompleto'] ?? '',
                'emitio_id'        => $item['emitio']['id'] ?? '',
                'emitio'           => $item['emitio']['nombreCompleto'] ?? '',
            );
        }
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );    
    }
}
