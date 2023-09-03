<?php
namespace App\Http\Controllers;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Sistema\Modelos\CredencialTemporal;

use Illuminate\Http\Request;

class ScannController extends BaseController {
    public function getInfoScannOut(Request $request){
        $payload = $request->all();
        $registro['tipo'] = 'scann';
        $registro['data'] = null;
        $registro = self::findByCodigo($payload['codigo'],false);
        if($registro['tipo'] == 'voluntario'){
            $registro['data'] = array(
                'nombre' => $registro['data']['nombreCompleto'],
                'alergias' => $registro['data']['alergias'],
                'numeroAsociado' => $registro['data']['numeroAsociado'],
                'urlImagen' => $registro['data']['urlImagen'],
                'delegacion' => $registro['data']['delegacion']['nombreLabel'],
                'estado' => $registro['data']['delegacion']['estado']['nombre'],
            );
        }
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $registro,
        );
    }
}
