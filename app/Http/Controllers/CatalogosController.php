<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Configuracion\Modelos\Habitacion ;
use App\Http\Controllers\Configuracion\Modelos\HabitacionEstatus;
use App\Http\Controllers\Sistema\Modelos\Delegaciones;
use App\Http\Controllers\Sistema\Modelos\Coordinaciones;
use App\Http\Controllers\BaseController;

class CatalogosController extends BaseController
{
    public function getDelegaciones(Request $request){
        $data = Delegaciones::orderBy('nombre',"asc")
                ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getCoordinaciones(Request $request){
        $data = Coordinaciones::orderBy('nombre',"asc")
                ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
}
