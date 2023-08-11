<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;

use App\Http\Controllers\Sistema\Modelos\Delegaciones as Modelo;

use Illuminate\Http\Request;

class DelegacionesController extends BaseController
{
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }

    public function handleListar(Request $request){
        $data = Modelo::orderBy('id', "asc")
            ->with('estado')
            ->get();
        $resp = [];
        foreach ($data as $elemento) {
            $tmp = $elemento->toArray(); // Convertir el objeto $elemento en un array
            $tmp['estado_id']   = $tmp['estado']['id'];
            $tmp['estado']      = $tmp['estado']['nombre'];
            $tmp['tipo']        = $tmp['isLocal'] ? 'Coordinación local' : 'Coordinación estatal';
            $tmp['label']       = $tmp['isLocal'] ? 'Coordinación local de ' . ($tmp['ciudad']) . ' en ' . ($tmp['estado']) : 'Coordinación estatal de ' . ($tmp['estado']);
            array_push($resp, $tmp);
        }
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $resp,
        );    
    }
}
