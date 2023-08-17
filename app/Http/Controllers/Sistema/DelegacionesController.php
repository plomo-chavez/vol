<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Sistema\Modelos\DelegacionAreasCoordinadores;
use App\Http\Controllers\Sistema\Modelos\Delegaciones as Modelo;
use App\Http\Controllers\Sistema\Modelos\Areas;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class DelegacionesController extends BaseController {
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }
    public function administrar(array $payload = [], Model $modelo = null) {
        if (isset($payload['accion'])) {
            switch($payload['accion']){
                case 1:
                    return self::ifExiste($payload);
                    break;
                case 2:
                    return self::ifExiste($payload,true);
                    // return self::actualizar($payload, $modelo);
                    break;
                case 3:
                    return self::eliminar($payload, $modelo);
                    break;
                case 4:
                    return self::insertMulti($payload, $modelo);
                    break;
                case 5:
                    // Solicita la informacion para la tab autoridades de detalles de delegacion
                    return self::getDelegacionCoordinadores($payload);
                case 6:
                    // Solicita la informacion para la tab autoridades de detalles de delegacion
                    return self::addCoordinador($payload);
                break;
                default:
                    return self::responsee('Acción no válida', false);
            }
        } else {
            return self::responsee('No existe una acción.', false);
        }
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

    public function getDelegacionCoordinadores($payload)
    {
        $areas = Areas::orderBy('id', 'asc')->select('id','nombre')->get();
        
        $registros = DelegacionAreasCoordinadores::orderBy('id', 'asc')
            ->with(['voluntario' => function ($query) {
                $query->select('id', 'nombre', 'primerApellido', 'segundoApellido', 'numeroInterno', 'numeroAsociado');
            }])
            ->get();
        
        $data = [];
        
        foreach ($areas as $area) {
            $id = $area->id;
            $encontrados = $registros->where('area_id', $id);
            
            if ($encontrados->isEmpty()) {
                $tmp = ['area' => $area];
            } else {
                $tmp = array_merge($encontrados->first()->toArray(), ['area' => $area]);
            }
            
            $data[] = $tmp;
        }
        
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data
        );    
    }
    public function addCoordinador($payload) {
        if ($payload['subAccion'] == 1) {
            return self::insertar($payload, new DelegacionAreasCoordinadores());
        } else {
            return self::actualizar($payload, new DelegacionAreasCoordinadores());
        }
    }
    public function ifExiste($payload, $incluyeActual = false) {
        $existe = Modelo::where('estado_id', $payload['estado_id'])
            ->where('ciudad', $payload['ciudad'])
            ->where('isLocal', $payload['isLocal']);
    
        if ($incluyeActual) {
            $existe->where('id', '<>', $payload['id']);
        }
    
        $existe = $existe->get(); // Asignar el resultado de la consulta a $existe
    
        if ($existe->isEmpty()) {
            return $incluyeActual ? self::actualizar($payload, new Modelo()) : self::insertar($payload, new Modelo());
        } else {
            return self::responsee(
                'Ya existe esta delegación',
                false
            );
        }
    }
    
    public function uploadFilesDelegacionesCoordinadores(Request $request){
        $msg = 'No se ha proporcionado ningún archivo';
        $boolResp = false;
        // Obtener el archivo del formulario
        $uploadedFile   = $request->file('file');
        $coordi_id      = $request->input('registro_id');
        $filename       = $request->input('newName') ?? null;
        // Validar que se haya enviado un archivo
        if ($uploadedFile) {
            $folder = 'delegaciones/coordinadores/'.$coordi_id;
            $url = self::sendStorage($uploadedFile,$folder,$filename);
            $isFirma = strtolower($filename) == 'firma';
            DelegacionAreasCoordinadores::where('id', $coordi_id)->update([($isFirma ? 'uriFirma':'uriSello') => $url]);
            return self::responsee(
                'Archivo subido correctamente',
                true,
                []
                // ['url' => $url]
            );
        } else{
            return self::responsee(
                'Problemas al subir el archivo',
                false,
            );
        }

        
    }
    
    
    
}
