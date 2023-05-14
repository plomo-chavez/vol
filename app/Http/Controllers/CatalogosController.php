<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Configuracion\Modelos\Habitacion ;
use App\Http\Controllers\Configuracion\Modelos\HabitacionEstatus;
use App\Http\Controllers\Configuracion\Modelos\Persona;
use App\Http\Controllers\BaseController;

class CatalogosController extends BaseController
{
    public function getTiposUsuarios(Request $request){
        $data = [
            [ 'nombre' => 'Administrador','id' => 1],
            [ 'nombre' => 'Recepcionista','id' => 2],
        ];
        $response = [
            'status' => false,
            'data' => $data,
            'message' => null
        ];
        return response()->json($response, 200);
    }
    public function getEstatusHabitaciones(Request $request){
        $data = HabitacionEstatus::orderBy('nombre',"asc")
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getHabitaciones(Request $request){
        $data = Habitacion::orderBy('nombre',"asc")
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function customPersons(Request $request){
        $data = Persona::orderBy('nombre',"asc")
            ->get()
            ->map(function ($persona) {
                $persona['nombre'] = $persona['nombre'] . ' ' . $persona['primerApellido'] . ' ' . $persona['segundoApellido'];
                return $persona;
            });
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function roomsAvailable(Request $request){
        $excludedIds = [];
        $data = Habitacion::whereNotIn('id', $excludedIds)
                ->orderBy('nombre',"asc")
                ->with('estatus')
                ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
}
