<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Configuracion\Modelos\Habitacion ;
use App\Http\Controllers\Configuracion\Modelos\HabitacionEstatus;
use App\Http\Controllers\Sistema\Modelos\Delegaciones;
use App\Http\Controllers\Sistema\Modelos\Areas;
use App\Http\Controllers\Sistema\Modelos\TipoAsociado;
use App\Http\Controllers\Sistema\Modelos\Estado;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;
use App\Http\Controllers\Auth\Models\TipoUsuario;
use App\Http\Controllers\BaseController;

class CatalogosController extends BaseController
{
    public function getTiposUsuarios(Request $request){
        $data = TipoUsuario::orderBy('nombre',"asc")
                ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getNacionalidad(Request $request){
        $data = [
            ['id' => 'Mexicana', 'nombre' => 'Mexicana'],
        ];
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getSexo(Request $request){
        $data = [
            ['id' => 'Masculino', 'nombre' => 'Masculino'],
            ['id' => 'Femenino', 'nombre' => 'Femenino'],
        ];
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getEstadoCivil(Request $request){
        $data = [
            ['id' => 'Soltero', 'nombre' => 'Soltero'],
            ['id' => 'Casado', 'nombre' => 'Casado'],
        ];
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getTipoSangre(Request $request){
        $data = [
            ['id' => 'AB+', 'nombre' => 'AB+'],
            ['id' => 'AB-', 'nombre' => 'AB-'],
            ['id' => 'A*', 'nombre' => 'A*'],
            ['id' => 'A-', 'nombre' => 'A-'],
            ['id' => 'B+', 'nombre' => 'B+'],
            ['id' => 'B-', 'nombre' => 'B-'],
            ['id' => 'O+', 'nombre' => 'O+'],
            ['id' => 'O-', 'nombre' => 'O-'],
        ];
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getDelegaciones(Request $request){
        $data = Delegaciones::orderBy('nombre',"asc")
                ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getAreas(Request $request){
        $data = Areas::orderBy('nombre',"asc")
                ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getEstados(Request $request){
        $data = Estado::orderBy('nombre',"asc")
                ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function getTiposAsociado(Request $request){
        $data = TipoAsociado::orderBy('nombre',"asc")
                ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function voluntariosXDelegacion(Request $request) {
        $payload = $request->all();
        $data = null; // Inicializamos $data fuera de las condiciones
    
        if ($payload['isLocal']) {
            $data = Voluntarios::where('delegacion_id', $payload['delegacion_id']);
        } else {
            $ids = self::idsDelegacionXEstado($payload['estado_id']);
            $data = Voluntarios::whereIn('delegacion_id',$ids);
        }
        $data = $data->select('id','nombre','primerApellido','segundoApellido','numeroInterno','numeroAsociado')->get()->toArray();
        foreach ($data as $index => $item) {
            $data[$index]['label'] = ($item['numeroInterno'] ?? '').' - '.($item['numeroAsociado'] ?? '').' - '.($item['nombreCompleto'] ?? '');
        }
        if ($data !== null) { // Verificamos si se asignó un valor a $data
            return self::responsee(
                'Consulta realizada con éxito.',
                true,
                $data
            );
        } else {
            return self::responsee(
                'No se encontraron datos.',
                false
            );
        }
    }
    
    public function getDelegacionesWithAreas(Request $request){
        $data = Delegaciones::orderBy('ciudad',"asc")
        ->select('id','ciudad',)
                ->with('areas:delegacion_id,coordinacion_id')
                ->with('areas.area:id,nombre')
                ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public function delegacionesXTipoCoordinador(Request $request){
        $tipoUsuarioID = null;
        $payload = $request->all();
        if (isset($payload['tipoUsuario_id'])) {
            $tipoUsuarioID = $payload['tipoUsuario_id'];
        }
        $data = [];
        if ($tipoUsuarioID != null) {
            $idsDelegaciones = self::idsDelegacionesXTipoUsuario($tipoUsuarioID);
            $data = Delegaciones::whereIn('id',$idsDelegaciones)
            ->orderBy('ciudad',"asc")
            ->select('id','ciudad','estado_id','isLocal')
                ->with('areas:delegacion_id,coordinacion_id')
                ->with('areas.area:id,nombre')
                ->with('estado')
                ->get()
                ->toArray();
                foreach ($data as $index => $item) {
                    $data[$index] = self::getNombreDelegacion($item);
                    $areas = [];
                    foreach ($item['areas'] as $area) { array_push($areas, $area['area']); }
                    $data[$index]['areas'] = $areas;
                }
        }
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
}
