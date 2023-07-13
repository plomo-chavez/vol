<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;
use Carbon\Carbon;

use App\Http\Controllers\Sistema\Modelos\GuardiasHoras as Modelo;
use App\Http\Controllers\Sistema\Modelos\GuardiasHorasVoluntarios;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;
use App\Http\Controllers\Sistema\Modelos\Coordinaciones;
use App\Http\Controllers\Sistema\Modelos\HorasVoluntarias;
use App\Http\Controllers\Auth\Models\User;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class GuardiasHorasController extends BaseController {
    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
    }

    public function handleListar(Request $request){
        $data = Modelo::orderBy('id',"asc")
            ->get();
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }

    public function administrar(array $payload = [], Model $modelo = null) {
        if (isset($payload['accion'])) {
            switch($payload['accion']){
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
                default:
                    return self::responsee('Acción no válida', false);
            }
        } else {
            return self::responsee('No existe una acción.', false);
        }
    }

    public function cerrarGuardia($payload, $modelo) {
        $msg = 'Guardia cerrada con exito';
        $data = [];
        $registros = GuardiasHorasVoluntarios::where('guardia_id',$payload['guardia_id'])->with('voluntario')->get();
        foreach ($registros as $index => $item) {
            if($item->isRegistrada == 0){
                $voluntario = Voluntarios::find($item->voluntario_id);
                if ($voluntario != null) {
                    $area = Coordinaciones::where('nombre','Socorros')->get();
                    if(sizeof($area) == 1){
                        $fechaFin = $item->fechaFin == null ? Carbon::now() : $item->fechaFin;
                        $area = $area[0];
                        $timestamp1 = Carbon::parse($item->fechaInicio);
                        $timestamp2 = Carbon::parse($item->fechaFin);
                        $diferencia = $timestamp1->diff($timestamp2);
                        HorasVoluntarias::create([
                            'coordinacion_id'   => $area->id,
                            'voluntario_id'     => $voluntario->id,
                            'actividad'         => 'Tiempo en servicio',
                            'fecha'             => Carbon::now(),
                            'horaInicio'        => $item->fechaInicio,
                            'horaFin'           => $fechaFin,
                            'numeroHoras'       => $diferencia->h,
                        ]);
                        $registros[$index]->isRegistrada = 1;
                        $registros[$index]->fechaFin = $fechaFin;
                        $registros[$index]->save();
                    }
                }
            }
        }
        $guardia = $modelo::find($payload['guardia_id']);
        $guardia->fin = Carbon::now();
        $guardia->save();

        
        return self::responsee(
            $msg,
            true,
            $data
        );
    }
    public function deletePersonal($payload, $modelo) {
        $msg = 'Registro guardado corrrectamente.';
        $data = [];
        $tmp = GuardiasHorasVoluntarios::find($payload['registroGuardiaVoluntario']);
        if ($tmp != null) {
            if ($tmp->fechaFin == null) {
                $tmp->fechaFin = Carbon::now();
                $tmp->save();
                $msg = 'Registro de salid exitoso.';
            } else { $msg = 'Este registro ya esta cerrado';}
        } else { $msg = 'No se encontro el voluntario en la guardia';}
        return self::responsee(
            $msg,
            true,
            $data
        );
    }
    public function addPersonal($payload, $modelo) {
        $msg = 'Registro guardado corrrectamente.';
        $data = [];
        $guardia = $modelo::find($payload['guardia_id']);
        if ($guardia != null) {
            $voluntarioID = self::findVoluntarioIDPorCodigoEscaneado($payload['codigo']);
            if ($voluntarioID != null) {
                $existe = GuardiasHorasVoluntarios::where('guardia_id',$payload['guardia_id'])
                ->where('voluntario_id',$voluntarioID)
                ->where('fechaFin',null)
                ->get();
                if (sizeof($existe) == 0) {
                    $voluntario = Voluntarios::find($voluntarioID);
                    $data = GuardiasHorasVoluntarios::create([
                        'guardia_id' => $payload['guardia_id'],
                        'voluntario_id' => $voluntarioID,
                        'fechaInicio' => Carbon::now(),
                    ]);
                    $msg = 'Se registro con exito el voluntario '.$voluntario->nombre;
                } else { $msg = 'El usuario ya esta registrado en la guardia';}
            } else { $msg = 'No se encontro el voluntario';}
        } else { $msg = 'No existe la guardia';}
        return self::responsee(
            $msg,
            true,
            $data
        );
    }
    public function insertar($payload, $modelo) {
        $msg = 'Registro guardado corrrectamente.';
        $data = [];
        $usuarioID = $payload['usuario_id'] ?? null;
        if($usuarioID != null){
            $delegacionID = self::getDelegacionIDXUsuario($usuarioID);
            if($delegacionID != null){
                $user = User::find($usuarioID);
                $payload['verificador_id'] = $user->voluntario_id;
                $payload['delegacion_id'] = $delegacionID;
                $data = $modelo::create($payload);
                $data = array(
                    'guardia' => $data,
                    'voluntarios' => self::getVoluntariosXDelegacion($delegacionID),
                );
            } else { $msg = 'Hace falta el id de la delegación';}
        }
        return self::responsee(
            $msg,
            true,
            $data
        );
    }

    public function getUltimaGuardia(Request $request){
        $usuarioID = $request->all()['usuario_id'];
        $delegacionID = self::getDelegacionIDXUsuario($usuarioID);
        $today = date('Y-m-d'); // Obtener la fecha de hoy en el formato 'YYYY-MM-DD'
        $data = Modelo::whereDate('inicio', $today)
            ->where('delegacion_id', $delegacionID)
            ->where('fin', null)
            ->with('delegacion')
            ->with('voluntarios')
            ->with('verificador:id,nombre,numeroAsociado,segundoApellido,primerApellido')
            ->orderBy('id', 'asc')
            ->get();
            foreach ($data as $index => $turno) {
                if (isset($turno['delegacion'])) {
                    $data[$index]['delegacion'] = self::getNombreDelegacion($turno['delegacion']);
                }
            }
        return self::responsee(
            'Consulta realizada con éxito.',
            true,
            $data
        );
    }
    
}
