<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;

use App\Http\Controllers\Sistema\Modelos\Voluntarios as Modelo;

use Illuminate\Http\Request;

class VoluntariosController extends BaseController
{
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }

    public function handleListar(Request $request){
        $payload = $request->all();
        $filtros = array_key_exists('payload', $payload) ? $payload['payload'] : [];
        $query = Modelo::query()->orderBy('nombre', 'asc');
        foreach ($filtros as $column => $value) {
            if (is_array($value)) {
                $query->whereBetween($column, $value);
            } else {
                $query->where($column, $value);
            }
        }
        $data = $query->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
}
