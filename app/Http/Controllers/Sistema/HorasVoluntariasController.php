<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;

use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Sistema\Modelos\HorasVoluntarias as Modelo;
use App\Http\Controllers\Sistema\Modelos\HorasVoluntariasContadores;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;
use Carbon\Carbon;

use Illuminate\Http\Request;

class HorasVoluntariasController extends BaseController
{
    public function getRegistro(Request $request){
        $payload = $request->all();
        $data  = [];
        if (isset($payload['add'])) {
            $payload['payload']['horaInicio'] = self::fechaNow();
            $registro = self::managerHoraVoluntaria($payload['payload']);
        }else if(isset($payload['close'])) {
            $registro = self::managerHoraVoluntaria(null,true,$payload['payload']['id']);
        } else {
            $voluntario = self::findByCodigo($payload['payload']['codigo'])['data'];
            $data = Modelo::where('voluntario_id',$voluntario->id)
            ->whereNull('horaFin')
            ->get()
            ->toArray();
            $data = [
                'voluntario'    => $voluntario->nombreCompleto,
                'voluntario_id' => $voluntario->id,
                'registros'     => $data
            ];
        }
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }

    public function handleAdministrar(Request $request){
        $payload = $request->all();
        return self::administrar($payload['payload'], new Modelo());
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
                    return self::cerrarHora($payload);
                    break;
                default:
                    return self::responsee('Acción no válida', false);
            }
        } else {
            return self::responsee('No existe una acción.', false);
        }
    }

    public function validarInHorarioLaboral(Request $request){
        $horaInicio = "13/10/23 21:00";
        $horaFin = "14/10/23 08:00";
    
        $tiempo = self::validarHVWithHorarioLaboral(1, $horaInicio, $horaFin);
    
        if ($tiempo !== null) {

            echo self::minutosATiempo($tiempo); 
            echo '<br>'; 
            echo $tiempo;
        }
    }
    
    public function validarHVWithHorarioLaboral($voluntarioID, $horaInicio, $horaFin) {
        Carbon::setLocale('es');
        $horaInicio = Carbon::createFromFormat('d/m/y H:i', $horaInicio);
        $horaFin    = Carbon::createFromFormat('d/m/y H:i', $horaFin);
        $voluntario = Voluntarios::find($voluntarioID);
        $horario = json_decode($voluntario->horarioLaboral);
        switch($horario->tipoHorario->value){
            case '12x12':
                $horarioInicio  = Carbon::parse($horario->horaInicio);
                $horarioFin     = Carbon::parse($horario->horaFin);
            break;
            case 'Cecom 8 Hrs':
                $horarioInicio  = Carbon::parse($horario->turno->horario->horaInicio);
                $horarioFin     = Carbon::parse($horario->turno->horario->horafin);
            break;
        }
    
        // // Establecer el mismo día en $horaInicio y $horaFin que $horaEvaluando
        $horarioInicio->setDate($horaInicio->year, $horaInicio->month, $horaInicio->day);
           $horarioFin->setDate($horaInicio->year, $horaInicio->month, $horaInicio->day);

        $responseHoraInicio = self::validarIsHorarioLaboral($horario, $horaInicio);
        $responseHoraFin    = self::validarIsHorarioLaboral($horario, $horaFin);
    
        if ($responseHoraInicio !== null && $responseHoraFin !== null) {
            if ($responseHoraInicio == true && $responseHoraFin  == false) { // La hora de inicio esta dentro del horario laboral y la de fin no.
                return self::calcularTiempoFueraHorario($horarioFin, $horaFin);
            } elseif ($responseHoraInicio == false && $responseHoraFin  == true) {// La hora de inicio esta fuera del horario laboral y la de fin no.
                return self::calcularTiempoFueraHorario($horaInicio, $horarioInicio);
            } elseif ($responseHoraInicio == false && $responseHoraFin  == false) {
                $horaInicioEsMayorHorarioInicio = $horaInicio->greaterThan($horarioInicio);
                $horaFinEsMayorHorarioFin = $horaFin->greaterThan($horarioFin);
                if ($horaInicioEsMayorHorarioInicio) {
                    echo 'horaInicio '.$horaInicio.' es mayor que horarioInicio '. $horarioInicio;
                } else {
                    echo 'horaInicio '.$horaInicio.' no es mayor que horarioInicio '. $horarioInicio;
                } 
                echo '<br>';
                if ($horaFinEsMayorHorarioFin) {
                    echo 'horaFin '.$horaFin.' es mayor que horarioFin '. $horarioFin;
                } else {
                    echo 'horaFin '.$horaFin.' no es mayor que horarioFin '. $horarioFin;
                } 
                echo '<br>';
                echo '<br>';
                echo '$horaInicioEsMayorHorarioInicio => '. ($horaInicioEsMayorHorarioInicio? 'Si' : 'No' );
                echo '<br>';
                echo '$horaFinEsMayorHorarioFin => '. ($horaFinEsMayorHorarioFin? 'Si' : 'No' );
                echo '<br>';
                echo '<br>';
                $tmp = 0;
                if ( $horaInicioEsMayorHorarioInicio && $horaFinEsMayorHorarioFin){
                    $tmp = self::calcularTiempoFueraHorario($horaInicio, $horaFin);
                } else if ( !$horaInicioEsMayorHorarioInicio && !$horaFinEsMayorHorarioFin){
                    $tmp = self::calcularTiempoFueraHorario($horaFin, $horaInicio);
                } else {
                    $tiempoInicio = self::calcularTiempoFueraHorario($horaInicio, $horarioInicio);
                    echo '<br>';
                    $tiempoFin    = self::calcularTiempoFueraHorario($horaFin, $horarioFin);
                    $tmp = $tiempoInicio + $tiempoFin;
                }
                return $tmp;
            }
        }
    
        return null;
    }
    
    public function validarIsHorarioLaboral($horario, $horaAEvaluar) {
        $horaEvaluando = $horaAEvaluar;
        // dd($horario);
        // echo '<br>';
        if ($horaEvaluando->isValid() && isset($horario->tipoHorario->value)) {
            $tipoHorario = $horario->tipoHorario->value;
            $response = null;
            switch ($tipoHorario) {
                case '12x12':
                case 'Cecom 8 Hrs':
                    $dias = $horario->dias;
                    $diaActual = $horaEvaluando->translatedFormat('l');
    
                    // Crear un nuevo array para almacenar los valores en minúsculas
                    $diasEnMinusculas = array_map('strtolower', array_column($dias, 'value'));
    
                    // Quitar acentos
                    $diaActual = self::quitarAcentos($diaActual);

                    if (in_array(strtolower($diaActual), $diasEnMinusculas)) {
                        $nombreTurno = isset($horario->turno->value) ? $horario->turno->value : '';
                        if ($tipoHorario == '12x12'){    
                            $horaInicio = Carbon::parse($horario->horaInicio);
                            $horaFin = Carbon::parse($horario->horaFin);
                        } else {
                            $horaInicio = Carbon::parse($horario->turno->horario->horaInicio);
                            $horaFin = Carbon::parse($horario->turno->horario->horafin);
                        }
                        $esNocturno = ($nombreTurno == 'Nocturno');
                        // Establecer el mismo día en $horaInicio y $horaFin que $horaEvaluando
                        $horaInicio->setDate($horaEvaluando->year, $horaEvaluando->month, $horaEvaluando->day);
                        $horaFin->setDate($horaEvaluando->year, $horaEvaluando->month, $horaEvaluando->day);

                        if ($esNocturno) {
                            $horaFin->addDay();
                            $response = ($horaEvaluando->lt($horaInicio) && $horaEvaluando->gte($horaFin));
                        } else {
                            $response = $horaEvaluando->between($horaInicio, $horaFin);
                        }
                        echo($response);
                        echo 'horaEvaluando : '. $horaEvaluando . ' <br>';
                        echo 'horaInicio : '. $horaInicio . ' <br>';
                        echo 'horaFin : '. $horaFin . ' <br>';
                        echo 'Response => '.($response ? 'Si' : 'No');
                        echo ' <br><br>';
                    }
                    return $response;
    
                default:
                    return null;
            }
        }
    
        return null;
    }
    
    public function calcularTiempoFueraHorario($horaLaboral, $horaFuera) {
        echo 'horaLaboral : '. $horaLaboral . ' <br>';
        echo 'horaFuera : '. $horaFuera . ' <br>';
        $tiempo = $horaLaboral->diffInMinutes($horaFuera);  
        return $tiempo;
    }
    
    public function quitarAcentos($cadena) {
        $acentos = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];
        $sinAcentos = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
        return str_replace($acentos, $sinAcentos, $cadena);
    }
    

    public function handleListar(Request $request){
        $data = [];
        $payload = $request->all();
        $idsDelegacion = self::idsDelegacionesXVoluntarioID($payload['voluntario_id'] ?? null);
        if($idsDelegacion != null){
            $voluntariosID = Voluntarios::whereIn('delegacion_id',$idsDelegacion)->pluck('id')->toArray();
            $data = HorasVoluntariasContadores::whereIn('voluntario_id',$voluntariosID)->with('voluntario:id,nombre,primerApellido,segundoApellido,urlImagen')->get();
            $data = $data->toArray();
            foreach ($data as $index => $item) {
                $data[$index]['urlImagen'] = $data[$index]['voluntario']['urlImagen'];
                $data[$index]['voluntario'] = $data[$index]['voluntario']['nombreCompleto'];
            }
        }
        return self::responsee(
            'Consulta realizada con exito.',
            true,
            $data,
        );
    }
    public static function getDataTimes($fechaInicio = null,$fechaFin = null){
        $tiempoLabel = null;
        $minutosDiferencia = null;
        if($fechaInicio != null && $fechaFin != null){
            $timestamp1 = Carbon::parse($fechaInicio);
            $timestamp2 = Carbon::parse($fechaFin);
            $diferencia = $timestamp1->diff($timestamp2);
            $minutosDiferencia = ($diferencia->days * 24 * 60) + ($diferencia->h * 60) + $diferencia->i;
            $tiempoLabel = "{$diferencia->days} dias,{$diferencia->h} horas y {$diferencia->i} minutos";
        }
        return [
            'tiempoLabel' => $tiempoLabel, 
            'minutosDiferencia' => $minutosDiferencia, 
        ];
    }
    public static function managerHoraVoluntaria(
        $registro = [
            'area_id' => null,
            'area' => null,
            'voluntario_id' => null,
            'actividad' => null,
            'actividad_id' => null,
            'subactividad' => null,
            'subactividad_id' => null,
            'fecha' => null,
            'horaInicio' => null,
            'horaFin' => null,
            'guardia_id' => null,
        ],
        $cerrarRegistro = false,
        $hora_id = null,
        $fechaFin = null
    ) {
        if($hora_id == null) {
            $fechaFin = ($registro['horaFin'] ?? null) == null ? ($cerrarRegistro ? self::fechaNow() : null) : $registro['horaFin'];
            $tiempoLabel = null;
            $minutosDiferencia = null;
            if($fechaFin != null){
                $dataTime = self::getDataTimes($registro['horaInicio'],$fechaFin);
                $tiempoLabel = $dataTime['tiempoLabel'];
                $minutosDiferencia = $dataTime['minutosDiferencia'];
            }
            // Crear la matriz con los datos
            $tmp = array_merge($registro, [
                'tiempoLabel' => $tiempoLabel,
                'tiempoMinutos' => $minutosDiferencia,
            ]);
            // Crea un nuevo registro de HorasVoluntarias
            $registroBD = Modelo::create($tmp);
            self::aumentarContadoresHV($registroBD);
            return $registroBD;
        } else {
            $registro = Modelo::find($hora_id);
            if($registro != null){

                $registro->horaFin = $fechaFin == null ? self::fechaNow() : $fechaFin;
                $dataTime = self::getDataTimes($registro->horaInicio,$registro->horaFin);
                $registro->tiempoLabel   = $dataTime['tiempoLabel'];
                $registro->tiempoMinutos = $dataTime['minutosDiferencia'];
                $registro->save();
                self::aumentarContadoresHV($registro);
                return $registro;
            }
            return null;
        }
        return null;
    }
    public static function aumentarContadoresHV($registro = null){
        if ($registro != null) {
            if (isset($registro['voluntario_id'])) {
                $voluntario_id = $registro['voluntario_id'];
                $minutosDiferencia = $registro['tiempoMinutos'];
                $contador = HorasVoluntariasContadores::where('voluntario_id', $voluntario_id)->first();
                if ($contador) {
                    // Actualiza el contador existente
                    $now = Carbon::now();
                    if ($now->month != intval($contador->mes_actual, 10)) {
                        setlocale(LC_TIME, 'es_ES'); // Establecer el locale en español
                        $historico = json_decode($contador->historico);
                        
                        $mesNombre = ucfirst(Carbon::create()->month($contador->mes_actual)->locale('es_ES')->isoFormat('MMMM'));
                        $nuevoRegistro = [
                            'mes'       => $mesNombre,
                            'mesNumero' => str_pad($contador->mes_actual, 2, '0', STR_PAD_LEFT),
                            'anio'      => $contador->anio,
                            'minutos'   => $contador->minutos_total,
                            'horas'     => $contador->horas_total,
                            'tiempo'    => self::minutosATiempo($contador->minutos_mes),
                        ];
                
                        $fechaActual = Carbon::now();
                        $historico[]                = $nuevoRegistro;
                        $contador->historico        = json_encode($historico);
                        $contador->mes_actual       = str_pad($fechaActual->month, 2, '0', STR_PAD_LEFT);
                        $contador->anio             = $fechaActual->year;
                        $contador->minutos_mes      += $minutosDiferencia;
                        $contador->horas_mes        = floor($contador->minutos_mes / 60);
                        $contador->minutos_total    += $minutosDiferencia;
                        $contador->horas_total      = floor($contador->minutos_total / 60);
                        $contador->tiempo_mes       = self::minutosATiempo($contador->minutos_mes);
                        $contador->tiempo_total     = self::minutosATiempo($contador->minutos_total);
                        $contador->save();
                    } else {
                        // Actualiza el contador existente sin cambiar de mes
                        $contador->minutos_mes += $minutosDiferencia;
                        $contador->horas_mes = floor($contador->minutos_mes / 60);
                        $contador->minutos_total += $minutosDiferencia;
                        $contador->horas_total = floor($contador->minutos_total / 60);
                        $contador->tiempo_mes = self::minutosATiempo($contador->minutos_mes);
                        $contador->tiempo_total = self::minutosATiempo($contador->minutos_total);
                        $contador->save();
                    }
                } else {

                    $now = Carbon::now();
                    // Crea un nuevo registro de HorasVoluntarias
                    $nuevoRegistro = [
                        'voluntario_id' => $voluntario_id,
                        'mes_actual'    => str_pad($now->month, 2, '0', STR_PAD_LEFT),
                        'anio'          => $now->year,
                        'minutos_mes'   => $minutosDiferencia,
                        'minutos_total' => $minutosDiferencia,
                        'horas_mes'     => floor($minutosDiferencia / 60),
                        'horas_total'   => floor($minutosDiferencia / 60),
                        'tiempo_mes'    => self::minutosATiempo($minutosDiferencia),
                        'tiempo_total'  => self::minutosATiempo($minutosDiferencia),
                    ];
                    $mesNombre = ucfirst(Carbon::create()->month($now->month)->locale('es_ES')->isoFormat('MMMM'));
                    $item = [
                        'mes'       => $mesNombre,
                        'mesNumero' => str_pad($now->month, 2, '0', STR_PAD_LEFT),
                        'anio'      => $now->year,
                        'minutos'   => $nuevoRegistro['minutos_total'],
                        'horas'     => $nuevoRegistro['horas_total'],
                        'tiempo'    => self::minutosATiempo($nuevoRegistro['minutos_mes']),
                    ];
            
                    $historico[]                = $item;
                    $nuevoRegistro['historico'] = json_encode($historico);
                    // Crea un nuevo registro de HorasVoluntarias
                    HorasVoluntariasContadores::create($nuevoRegistro);
                }                
            }
        }
    }
}
