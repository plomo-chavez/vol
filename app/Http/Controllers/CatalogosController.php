<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Sistema\Modelos\Delegaciones;
use App\Http\Controllers\Sistema\Modelos\subTipoActividadesHV;
use App\Http\Controllers\Sistema\Modelos\tipoActividadesHV;
use App\Http\Controllers\Sistema\Modelos\TipoAsociado;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;
use App\Http\Controllers\Auth\Models\TipoUsuario;
use App\Http\Controllers\Sistema\Modelos\Estado;
use App\Http\Controllers\Sistema\Modelos\Areas;
use App\Http\Controllers\BaseController;
use Illuminate\Database\Eloquent\Model;

class CatalogosController extends BaseController {
    public function addFiltros($filtros = [],$query){
        foreach ($filtros as $key => $value) {
            $query = $query->where($key,$value);
        }
        return $query;
    }
    public function getQuery($payload,$query = true) {
        switch ($payload['catalogo']) {
            case 'sexo': 
                return [
                    ['id' => 'Masculino', 'nombre' => 'Masculino'],
                    ['id' => 'Femenino', 'nombre' => 'Femenino'],
                ];
            break;
            case 'nacionalidad': 
                return [
                    ['id' => 'Mexicana', 'nombre' => 'Mexicana'],
                ];
            break;
            case 'estadoCivil': 
                return [
                    ['id' => 'Soltero', 'nombre' => 'Soltero'],
                    ['id' => 'Casado', 'nombre' => 'Casado'],
                ];
            break;
            case 'tiposSangre': 
                return [
                    ['id' => 'AB +', 'nombre' => 'AB +'],
                    ['id' => 'AB -', 'nombre' => 'AB -'],
                    ['id' => 'A +', 'nombre' => 'A +'],
                    ['id' => 'A -', 'nombre' => 'A -'],
                    ['id' => 'B +', 'nombre' => 'B +'],
                    ['id' => 'B -', 'nombre' => 'B -'],
                    ['id' => 'O +', 'nombre' => 'O +'],
                    ['id' => 'O -', 'nombre' => 'O -'],
                ];
            break;
            case 'estados': 
                if($query) {
                    $tmp = Estado::orderBy('id', 'asc');
                    return self::addFiltros($payload['filtro'],$tmp)->get()->toArray();
                } else {
                    return new Estado();
                }
            break;
            case 'voluntariosXDelegacion': 
                $data = [];
                $filtros = $payload['filtro'];
                if ($filtros['isLocal']) {
                    $data = Voluntarios::where('delegacion_id', $filtros['delegacion_id']);
                } else {
                    $ids = self::idsDelegacionXEstado($filtros['estado_id']);
                    $data = Voluntarios::whereIn('delegacion_id',$ids);
                }
                $data = $data->select('id','nombre','primerApellido','segundoApellido','numeroInterno','numeroAsociado')->get()->toArray();
                foreach ($data as $index => $item) {
                    $data[$index]['label'] = ($item['numeroInterno'] ?? '').' - '.($item['numeroAsociado'] ?? '').' - '.($item['nombreCompleto'] ?? '');
                }
                return $data;
            break;
            case 'tipo-actividades-horas-voluntarias': 
                if($query) {
                    $tmp = tipoActividadesHV::orderBy('id', 'asc')->select('id','nombre');
                    return self::addFiltros($payload['filtro'],$tmp)->get()->toArray();
                } else {
                    return new tipoActividadesHV();
                }
            break;
            case 'tipo-subactividades-horas-voluntarias': 
                if($query) {
                    $tmp = subTipoActividadesHV::orderBy('id', 'asc')->select('id','actividad_id','nombre')->with('actividad');
                    return self::addFiltros($payload['filtro'],$tmp)->get()->toArray();
                } else {
                    return new subTipoActividadesHV();
                }
            break;
            case 'areas': 
                if($query) {
                    $tmp = Areas::orderBy('id', 'asc')->select('id','nombre');
                    return self::addFiltros($payload['filtro'],$tmp)->get()->toArray();
                } else {
                    return new Areas();
                }
            break;
            case 'tipo-autoridades': 
                if($query) {
                    $tmp = Areas::orderBy('id', 'asc')->select('id','nombre');
                    return self::addFiltros($payload['filtro'],$tmp)->get()->toArray();
                } else {
                    return new Areas();
                }
            break;
            case 'tipo-usuarios': 
                if($query) {
                    $tmp = TipoUsuario::orderBy('id', 'asc')->select('id','nombre');
                    return self::addFiltros($payload['filtro'],$tmp)->get()->toArray();
                } else {
                    return new TipoUsuario();
                }
            break;
        }
    }

    public function getCatalogo(Request $request) {
        $payload = $request->all();
        $data = [];
        if ($payload['catalogo'] != 'DelegacionesXTipoCoordinador' ){
            $data = self::getQuery($payload);
        } else {
            $tipoUsuarioID = null;
            if (isset($payload['filtro']['tipoUsuario_id'])) {
                $tipoUsuarioID = $payload['filtro']['tipoUsuario_id'];
            }
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
        }
        // dd($data);
        return self::responsee(
            'Consulta realizada con éxito.',
            true,
            $data
        );
    }
    
    
    public function handleAdministrar(Request $request){
        $payload = $request->all();

        $modelo = self::getQuery($payload, false);
        return self::administrar($payload, $modelo);
    }

    public function handleListar(Request $request){
        $payload = $request->all();
        $modelo = self::getQuery($payload, false);
        $data = $modelo::orderBy('id',"asc")
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }

    public function validarExistente($payload,$modelo, $isNew) {
        $query = $modelo::where('nombre',$payload['nombre']);
        if(!$isNew){
            $query = $query->whereNot('id',$payload['id']);
        }
        if($query->get()->count() == 0){
            return $isNew ? self::insertar($payload, $modelo) : self::actualizar($payload, $modelo);
        }
        return self::response(
            'Ya existe este registro.',
            false,
            []
        );        
    }

    public function administrar(array $payload = [], Model $modelo = null) {
        if (isset($payload['accion'])) {
            switch($payload['accion']){
                case 1:
                    return self::validarExistente($payload,$modelo,true);
                    break;
                case 2:
                    return self::validarExistente($payload,$modelo,false);
                    break;
                case 3:
                    return self::eliminar($payload, $modelo);
                    break;
                case 4:
                    return self::changePassword($payload, $modelo);
                    break;
                default:
                    return self::responsee('Acción no válida', false);
            }
        } else {
            return self::responsee('No existe una acción.', false);
        }
    }









    public function getVoluntarios(Request $request){
        $payload = $request->all();
        $data = Voluntarios::orderBy('nombre',"asc")->select('id','nombre','primerApellido','segundoApellido','numeroInterno','numeroAsociado','correo');
        if(isset($payload['tipoUsuario_id']) && isset($payload['delegacion_id']) ){
            $ids = self::idsDelegacionesXTipoUsuario($payload['tipoUsuario_id'],$payload['delegacion_id']);
            $data = $data->whereIn('delegacion_id',$ids);
        }
        $data = $data->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    
    public function getTiposUsuarios(Request $request){
        $data = TipoUsuario::orderBy('nombre',"asc")
                ->get();
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
