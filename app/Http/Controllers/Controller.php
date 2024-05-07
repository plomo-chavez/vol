<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Database\Eloquent\Model; // Importa la clase Model

class Controller extends BaseController {
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public static function listarWithFiltros(Model $model, array $filters) {
        $query = $model->query(); // Accede a la instancia del modelo, no a la clase

        // Aplica cada filtro pasado al método
        foreach ($filters as $field => $value) {
            // Añade condiciones de filtro a la consulta
            $query->where($field, $value);
        }

        return $query->get();
    }
}