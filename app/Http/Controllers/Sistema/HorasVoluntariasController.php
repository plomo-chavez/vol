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
    public function getDataTimes($fechaInicio = null,$fechaFin = null){
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
    public function managerHoraVoluntaria(
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
        $hora_id = null
    ) {
        if($hora_id == null) {
            $fechaFin = $cerrarRegistro ? self::fechaNow() : null;
            $tiempoLabel = null;
            $minutosDiferencia = null;
            if($fechaFin != null){
                $dataTime = self::getDataTimes($registro['fechaFin'],$fechaFin);
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
            return $registroBD;
        } else {
            $registro = Modelo::find($hora_id);
            if($registro != null){
                $registro->horaFin = self::fechaNow();
                $dataTime = self::getDataTimes($registro->horaInicio,$registro->horaFin);
                $registro->tiempoLabel   = $dataTime['tiempoLabel'];
                $registro->tiempoMinutos = $dataTime['minutosDiferencia'];
                $registro->save();
                return $registro;
            }
            return null;
        }
        return null;
    }
}
