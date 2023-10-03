<?php
namespace App\Http\Controllers\Sistema;
use App\Http\Controllers\BaseController;

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
                
                        $historico[]                = $nuevoRegistro;
                        $contador->historico        = json_encode($historico);
                        $contador->mes_actual       = str_pad($timestamp2->month, 2, '0', STR_PAD_LEFT);
                        $contador->anio             = $timestamp2->year;
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
