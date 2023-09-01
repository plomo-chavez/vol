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
        if ($registro['data'] == null){
            $tmp = CredencialTemporal::where('codigo',$payload['codigo'])
                ->with('voluntario:id,delegacion_id,nombre,primerApellido,segundoApellido,urlImagen')
                ->with('voluntario.delegacion:id,nombre.estado_id')
                ->with('voluntario.delegacion.estado:id,nombre')
                ->get();
            if($tmp->count() == 1){
                $registro['tipo'] = 'credencial';
                $registro['data'] = $tmp[0];
            }
        }
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $registro,
        );
    }
}
