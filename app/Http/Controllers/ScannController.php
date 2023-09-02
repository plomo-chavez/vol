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
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $registro,
        );
    }
}
