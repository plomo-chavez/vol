<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Sistema\HorasVoluntariasController;
use Carbon\Carbon;

use App\Http\Controllers\Sistema\Modelos\GuardiasHoras as Modelo;
use App\Http\Controllers\Sistema\Modelos\GuardiasHorasVoluntarios;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;
use App\Http\Controllers\Sistema\Modelos\Areas;
use App\Http\Controllers\Sistema\Modelos\tipoActividadesHV;
use App\Http\Controllers\Sistema\Modelos\subTipoActividadesHV;
use App\Http\Controllers\Sistema\Modelos\HorasVoluntarias;
use App\Http\Controllers\Sistema\Modelos\HorasVoluntariasContadores;
use App\Http\Controllers\Auth\Models\User;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class GuardiasHorasController extends BaseController {
    /**
     * Maneja las solicitudes de administración para una entidad.
     *
     * @param Request $request La solicitud HTTP que contiene los datos de administración.
     * @return array Un arreglo con información sobre el resultado de la operación de administración.
     */
    public function handleAdministrar(Request $request) {
        $payload = $request->all(); // Obtiene todos los datos de la solicitud
        return self::administrar($payload['payload'], new Modelo());
    }
    /**
     * Maneja las solicitudes para listar entidades.
     *
     * @param Request $request La solicitud HTTP.
     * @return array Un arreglo con información sobre el resultado de la consulta y los datos obtenidos.
     */
    public function handleListar(Request $request) {
        // Obtiene todos los registros de la entidad y los ordena por ID de manera ascendente
        $data = Modelo::orderBy('id', "asc")
        ->with('delegacion')
        ->with('verificador')
        ->with('voluntarios')
        ->get();
        return self::responsee(
            'Consulta realizada con éxito.',
            true,
            $data,
        );
    }
    /**
     * Administra una entidad según la acción proporcionada en el payload.
     *
     * @param array $payload Datos que contienen la acción y otros detalles.
     * @param Model|null $modelo Una instancia del modelo relacionado con la entidad.
     * @return array Un arreglo que indica el resultado de la acción de administración.
     */
    public function administrar(array $payload = [], Model $modelo = null) {
        if (isset($payload['accion'])) {
            switch ($payload['accion']) {
                case 1:
                    return self::insertar($payload, $modelo);
                    break;
                case 2:
                    return self::actualizar($payload, $modelo);
                    break;
                case 3:
                    return self::eliminar($payload, $modelo);
                    break;
                case 4:
                    return self::insertMulti($payload, $modelo);
                    break;
                case 5:
                    return self::addPersonal($payload, $modelo);
                    break;
                case 6:
                    return self::deletePersonal($payload, $modelo);
                    break;
                case 7:
                    return self::cerrarGuardia($payload, $modelo);
                    break;
                case 8:
                    return self::getDetallesMes($payload, $modelo);
                    break;
                case 9:
                    return self::registarHoraVoluntaria($payload, $modelo);
                    break;
                default:
                    return self::responsee('Acción no válida', false);
            }
        } else {
            return self::responsee('No se proporcionó una acción.', false);
        }
    }
    /**
     * Cierra una guardia y registra las horas voluntarias correspondientes.
     *
     * @param array $payload Datos relacionados con la guardia a cerrar.
     * @param Model $modelo Una instancia del modelo relacionado con la guardia.
     * @return array Un arreglo con información sobre el resultado del cierre de la guardia.
     */
    public function registarHoraVoluntaria($payload, $modelo) {
        $msg = 'Se registro hora voluntaria con éxito.'; // Mensaje predeterminado de éxito
        $data = []; // Inicializa el arreglo de datos vacío
        // Busca el ID del voluntario basado en el código escaneado
        $tmp = self::findByCodigo($payload['codigo']);
        $voluntarioID = $tmp['data']->id;
        if(isset($payload['cerrar'])){

        } else {
            $data = HorasVoluntarias::where('voluntario_id', $voluntarioID)->where('horaFin',null)->get()->toArray();
        }
        // Retorna una respuesta con el mensaje y datos
        return self::responsee(
            $msg,
            true,
            $data
        );
    }
    public function cerrarGuardia($payload, $modelo) {
        $msg = 'Guardia cerrada con éxito.'; // Mensaje predeterminado de éxito
        $data = []; // Inicializa el arreglo de datos vacío
        $guardia = $modelo::find($payload['guardia_id']);
        if ($guardia) {
            $horaCierre =( $payload['fin'] ?? null) == null ? self::fechaNow() : $payload['fin'];
            // Obtiene todos los registros de guardia y voluntarios asociados a la guardia
            $registros = GuardiasHorasVoluntarios::where('guardia_id', $payload['guardia_id'])->with('voluntario')->get();  
            $area = Areas::find(1); // Obtiene el área "Socorros"
            $act = tipoActividadesHV::find(1); // Obtiene el área "Socorros"
            $subAct = subTipoActividadesHV::find(1); // Obtiene el área "Socorros"
            // Itera a través de los registros para procesar cada uno
            foreach ($registros as $index => $item) {
                if ($item->isRegistrada == 0 && $item->fechaFin == null) { // Verifica si la guardia ya ha sido registrada
                    $voluntario = Voluntarios::find($item->voluntario_id);
                    $registroHora = HorasVoluntariasController::managerHoraVoluntaria([
                        'voluntario_id'  => $voluntario->id ?? null,
                        'area_id'        => $area->id ?? null,
                        'area'           => $area->nombre ?? '',
                        'actividad'      => $act->nombre ?? '',
                        'actividad_id'   => $act->id ?? null,
                        'subactividad'   => $subAct->nombre ?? '',
                        'subactividad_id'=> $subAct->id ?? null,
                        'fecha'          => self::fechaNow(),
                        'horaInicio'     => $item->fechaInicio,
                        'horaFin'        => $horaCierre,
                        'guardia_id'     => $payload['guardia_id'],
                    ]);
                    $item->fechaFin = $horaCierre;
                    $item->isRegistrada = 1;
                    $item->save();
                }
            }
        // Encuentra y cierra la guardia actualizando su campo "fin"
            $guardia->fin = $horaCierre;
            $guardia->save();
        } else {
            $msg = 'No se encontró la guardia con el ID proporcionado.';
        }
        
        // Retorna una respuesta con el mensaje y datos
        return self::responsee(
            $msg,
            true,
            $data
        );
    }
    public function registrarHorasDeGuardia(
        $voluntario_id,
        $guardia_id,
        $registroHora_id = null,
        $fechaFin = null
    ) {
        $registro = null;
        if($registroHora_id != null){
            $registro = GuardiasHorasVoluntarios::find($registroHora_id);
            $voluntario_id  = $registro->voluntario_id;
            $guardia_id     = $registro->guardia_id;
        } else {
            $registros = GuardiasHorasVoluntarios::where('guardia_id', $guardia_id)
            ->with('voluntario')
            ->get();  
            $registro = $registros->count() == 1 ? $registros[0] : null;
        }
        if($registro != null){
            if ($registro->fechaFin == null) {
                $registro->isRegistrada = 1;
                $registro->fechaFin = $fechaFin == null ? self::fechaNow() : $fechaFin;
                $registro->save();
                $area = Areas::find(1); // Obtiene el área "Socorros"
                $act = tipoActividadesHV::find(1); // Obtiene el área "Socorros"
                $subAct = subTipoActividadesHV::find(1); // Obtiene el área "Socorros"
                $registroHora = HorasVoluntariasController::managerHoraVoluntaria([
                    'voluntario_id'  => $voluntario_id ?? null,
                    'area_id'        => $area->id ?? null,
                    'area'           => $area->nombre ?? '',
                    'actividad'      => $act->nombre ?? '',
                    'actividad_id'   => $act->id ?? null,
                    'subactividad'   => $subAct->nombre ?? '',
                    'subactividad_id'=> $subAct->id ?? null,
                    'fecha'          => self::fechaNow(),
                    'horaInicio'     => $registro->fechaInicio,
                    'horaFin'        => $registro->fechaFin,
                    'guardia_id'     => $registro->guardia_id,
                ]);
            }
        } else{
            return false;
        }

    }
    public static function getDetallesMes($payload) {
        $data = HorasVoluntarias::whereYear('created_at', $payload['anio'])
            ->whereMonth('created_at', $payload['mes'])
            ->where('voluntario_id', $payload['voluntario_id'])
            ->with('area')
            ->with('guardia')
            ->with('guardia.verificador')
            ->with('guardia.delegacion')
            ->with('guardia.delegacion.estado')
            ->get()->toArray();
            $index = 0;
            foreach ($data as $item) {
                $data[$index]['area'] = $data[$index]['area'] == null ? '' : $data[$index]['area']['nombre'] ;
                $index++;
            }
        // Retorna una respuesta con el mensaje y datos
        return self::responsee(
            'Consulta realizada con éxito.',
            true,
            $data
        );
    }
    /**
     * Elimina un registro de personal de guardia y actualiza la fecha de finalización si es necesario.
     *
     * @param array $payload Datos del registro de personal.
     * @param string $modelo El modelo relacionado.
     * @return array Respuesta que indica el resultado de la operación.
     */
    public function deletePersonal($payload, $modelo) {
        $msg = 'Registro guardado correctamente.';
        $data = [];

        $responseREgistro = self::registrarHorasDeGuardia(null,null,$payload['registroGuardiaVoluntario'],$payload['fechaFin']);

        $msg = $responseREgistro ? 'Registro de salida exitoso.' : 'No se encontró el registro de la guardia.';

        return self::responsee(
            $msg,
            true,
            $data
        );
    }
    /**
         * Agrega un registro de personal a una guardia y realiza verificaciones de existencia.
         *
         * @param array $payload Datos del registro de personal.
         * @param string $modelo El modelo relacionado.
         * @return array Respuesta que indica el resultado de la operación.
     */
    public function addPersonal($payload, $modelo) {
        $msg = 'Registro guardado correctamente.';
        $data = [];
        
        // Encuentra la guardia usando el ID proporcionado
        $guardia = $modelo::find($payload['guardia_id']);
        
        if ($guardia != null) {
            // Busca el ID del voluntario basado en el código escaneado
            $tmp = self::findByCodigo($payload['codigo']);
            $voluntarioID = $tmp['tipo'] == 'voluntario' ? ($tmp['data'] == null ?  null : $tmp['data']['id']) : null ;
            if ($voluntarioID != null) {
                // Verifica si el voluntario ya está registrado en la misma guardia sin haber salido
                $existe = GuardiasHorasVoluntarios::where('guardia_id', $payload['guardia_id'])
                    ->where('voluntario_id', $voluntarioID)
                    ->where('fechaFin', null)
                    ->get();
                
                if (sizeof($existe) == 0) {
                    // Encuentra el objeto del voluntario
                    $voluntario = Voluntarios::find($voluntarioID);
                    
                    // Crea un nuevo registro de GuardiasHorasVoluntarios
                    $data = GuardiasHorasVoluntarios::create([
                        'guardia_id' => $payload['guardia_id'],
                        'voluntario_id' => $voluntarioID,
                        'fechaInicio' => self::fechaNow(),
                    ]);
                    $msg = 'Se registró con éxito el voluntario '.$voluntario->nombre;
                } else {
                    $msg = 'El usuario ya está registrado en la guardia.';
                }
            } else {
                $msg = 'No se encontró el voluntario.';
            }
        } else {
            $msg = 'No existe la guardia.';
        }
        
        // Retorna una respuesta con el mensaje y datos
        return self::responsee(
            $msg,
            true,
            $data
        );
    }
    /**
     * Inserta una nueva guardia en la base de datos y devuelve información adicional.
     *
     * @param array $payload Los datos necesarios para crear la guardia.
     * @param string $modelo El nombre del modelo relacionado con la guardia.
     * @return array Un arreglo que contiene información sobre el resultado de la operación y datos adicionales.
     */
    public function insertar($payload, $modelo) {
        $msg = 'Hubo un error al intentar crear la guardia.';
        $data = [];
        // Obtiene el ID del voluntario y el ID de la delegación desde el payload
        $voluntario_id = $payload['voluntario_id'] ?? null;
        $delegacion_id = $payload['delegacion_id'] ?? null;        
        if ($voluntario_id != null) {
            if ($delegacion_id != null) {
                // Agrega el ID del voluntario como verificador y el ID de la delegación
                $payload['verificador_id'] = $voluntario_id;
                $payload['delegacion_id']  = $delegacion_id;
                // Crea una nueva instancia del modelo y guarda los datos
                $data = $modelo::create($payload);
                // Arma un arreglo con información adicional
                $data = array(
                    'guardia' => $data,
                    'voluntarios' => self::getVoluntariosXDelegacion($delegacion_id),
                );
                $msg = 'Se registró con éxito la guardia.';
            } else {
                $msg = 'Falta el ID de la delegación.';
            }
        }
        // Retorna una respuesta con el mensaje y datos
        return self::responsee(
            $msg,
            true,
            $data
        );
    }
    /**
     * Obtiene información sobre la última guardia activa en una delegación específica.
     *
     * @param Request $request La solicitud HTTP que contiene los parámetros de búsqueda.
     * @return array Un arreglo que contiene información sobre el resultado de la consulta y datos obtenidos.
     */
    public function getUltimaGuardia(Request $request) {
        $data = null;        
        // Obtiene el ID del voluntario y el ID de la delegación desde la solicitud
        $voluntario_id = $request->all()['voluntario_id'] ?? null;
        $delegacion_id = $request->all()['delegacion_id'] ?? null;
        if ($delegacion_id != null) {
            // Realiza una consulta para obtener la última guardia activa en la delegación
            $data = Modelo::where('delegacion_id',  $delegacion_id)
                // ->whereDate('inicio', self::fechaYMD())
                ->where('verificador_id',  $voluntario_id)
                ->where('fin', null)
                ->with('delegacion')
                ->with('voluntarios')
                ->with('verificador:id,nombre,numeroAsociado,segundoApellido,primerApellido')
                ->orderBy('id', 'asc')
                ->get();
            // Actualiza el nombre de la delegación dentro del resultado
            foreach ($data as $index => $turno) {
                if (isset($turno['delegacion'])) {
                    $data[$index]['delegacion'] = self::getNombreDelegacion($turno['delegacion']);
                }
            }
        }
        // Retorna una respuesta con el mensaje y datos
        return self::responsee(
            'Consulta realizada con éxito.',
            true,
            $data
        );
    }
}
