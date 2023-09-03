<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Sistema\Modelos\Delegaciones;
use App\Http\Controllers\Sistema\Modelos\DelegacionAreasCoordinadores;
use App\Http\Controllers\Sistema\Modelos\Coordinadores;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;
use App\Http\Controllers\Sistema\Modelos\CredencialTemporal;
use App\Http\Controllers\Sistema\Modelos\ContadorNumeroInterno;
use App\Http\Controllers\Auth\Models\User;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;
use Dompdf\Dompdf;
use Carbon\Carbon;
use PDF;

class BaseController extends Controller{
    public static function generateCodigoUUID() {
        // Generar un nuevo UUID v4
        $uuid = Uuid::uuid4();

        // Convertir el UUID a Base64
        return strtoupper(str_replace('-', '', $uuid->getHex()));
        // return base64_encode($uuid->getBytes());
    }
    public static function formatTime ($fecha) {
        if ($fecha === null) {
            return '';
        } else {
            $fecha = $fecha == 'now' ? null : $fecha;
            $carbon = Carbon::parse($fecha);
            $carbon->setTimezone('America/Mexico_City');
            return $carbon->format("Y/m/d g:i A");
        }
    }
    public static function getNameMes($numero){
        $meses = array(
            1 => 'Enero',
            2 => 'Febrero',
            3 => 'Marzo',
            4 => 'Abril',
            5 => 'Mayo',
            6 => 'Junio',
            7 => 'Julio',
            8 => 'Agosto',
            9 => 'Septiembre',
            10 => 'Octubre',
            11 => 'Noviembre',
            12 => 'Diciembre'
        );
        return $meses[$numero] ?? '';
    }
    public static function response($message = 'Tenemos un error'){
        return array(
            'result'    => false,
            'message'   => $message,
            'data'      => null,
        );
    }
    public static function fechaWithHora($AM = true){
        // Obtener la fecha actual utilizando Carbon
        $fechaActual = Carbon::now('America/Mexico_City');
        // Formatear la fecha como cadena (opcional)
        $formtato = 'Y-m-d h:i:s';
        $formtato = $formtato . ($AM ? 'A' : '');
        return $fechaActual->format($formtato);
    }
    public static function fechaYMD(){
        // Obtener la fecha actual utilizando Carbon
        $fechaActual = Carbon::now('America/Mexico_City');
        // Formatear la fecha como cadena (opcional)
        return $fechaActual->format('Y-m-d');
    }

    public function minutosATiempo($totalMinutos) {
        // Calcula los días, horas y minutos totales
        $totalDias = floor($totalMinutos / (24 * 60));
        $totalHoras = floor(($totalMinutos % (24 * 60)) / 60);
        $totalMinutosRestantes = $totalMinutos % 60;
        return "Dias: $totalDias, Horas: $totalHoras, Minutos: $totalMinutosRestantes";
    }
    public static function fechaNow($fecha = null, $formato = '',$aumentoDias = null){
        // Obtener la fecha actual utilizando Carbon
        if ($fecha == null){
            $response = Carbon::now('America/Mexico_City');
        } else {
            $response = Carbon::createFromFormat('d-m-Y', $fecha);
        }
        if($aumentoDias != null){
            $response = $response->addDays($aumentoDias);
        }
        if($formato != null){
            if($formato == 'timestamp'){
                $response = $response;
            }else {
                $response = $response->format($formato);
            }
        }
        return $response;
    }
    public static function extraerCodigoCredencialNacional($codigo){
        if($codigo == null ){
            return null;
        }
        $ultimoIgual = strrpos($codigo, "=");
        // Extrae el texto después del último signo igual (=)
        if ($ultimoIgual !== false) {
            $textoExtraido = substr($codigo, $ultimoIgual + 1);
            return $textoExtraido;
        } else {
            return null;
        }
    }

    /**
     * Encuentra el ID de un voluntario basado en un código escaneado.
     *
     * @param string|null $codigo El código escaneado.
     * @return int|null El ID del voluntario si se encuentra, o null si no se encuentra.
     */
    public static function findByCodigo($codigo = null, $getVolunter = true) {
        $tmp = null;
        $tipo = null;
        $registro= null;
        if ($codigo != null) {
            if ($registro == null) {
                $busqueda = "http://sccrm.mx";
                // Verifica si el código contiene la URL de búsqueda
                if (strpos($codigo, $busqueda) !== false) {
                    $codigoTmp = self::extraerCodigoCredencialNacional($codigo);
                    $tmp = Voluntarios::where('codigoCredencial', $codigoTmp)
                    ->with('area:id,nombre')
                    ->with('delegacion:id,nombre.estado_id')
                    ->with('delegacion.estado:id,nombre')
                    ->get();
                    // Asigna el ID del voluntario si se encuentra un resultado único
                    $registro = $tmp->count() == 1 ? $tmp [0] : null;
                    $tipo = 'voluntario';
                }
            } 
            if ($registro == null) {
                $busqueda = "VOL";
                // Verifica si el código contiene la cadena "VOL"
                if (strpos($codigo, $busqueda) !== false) {
                    // Busca en la base de datos por el número de asociado
                    $tmp = Voluntarios::where('numeroInterno', $codigo)->get();
                    $registro = $tmp->count() == 1 ? $tmp [0] : null;
                    $tipo = 'voluntario';
                }
            }  
            if ($registro == null) {
                $tmp = CredencialTemporal::where('codigo',$codigo)
                ->with('voluntario:id,delegacion_id,nombre,primerApellido,segundoApellido,urlImagen')
                ->with('voluntario.delegacion:id,nombre.estado_id')
                ->with('voluntario.delegacion.estado:id,nombre')
                ->get();
                if($tmp->count() == 1){
                    if($getVolunter){
                        // dd($tmp[0]['voluntario_id']);
                        $tmp = Voluntarios::where('id', $tmp[0]['voluntario_id'])->get();
                        // Asigna el ID del voluntario si se encuentra un resultado único
                        $registro = $tmp->count() == 1 ? $tmp [0] : null;
                        $tipo = 'voluntario';
                    } else {
                        $registro = $tmp->count() == 1 ? $tmp [0] : null;
                        $tipo = 'credencialTemporal';
                    }
                }
            } 
            if ($registro == null) {
                // Busca en la base de datos por el número interno
                $tmp = Voluntarios::where('numeroAsociado', $codigo)->get();
                $registro = $tmp->count() == 1 ? $tmp [0] : null;
                $tipo = 'voluntario';
            }
        }
        // Devuelve el ID del voluntario o null si no se encuentra
        return array(
            'tipo' => $tipo,
            'data' => $registro,
        );
    }

    public static function getNombreDelegacion($delegacion = null){
        if ($delegacion != null) {
            $delegacion['nombre'] = 
                $delegacion['isLocal'] ? 
                    ('Local de ' . $delegacion['ciudad']) : 
                    ('Estatal de ' . ($delegacion['estado']['nombre'] ?? ''));
        }
        return $delegacion;
    }
    public static function getNumeroInerno($delegacionID = null){
        // VOL-Año-Estado-XXXX
        // VOL23120001
        $numeroInterno = null;
        if ($delegacionID != null) {
            $delegacion = Delegaciones::find($delegacionID);
            if ($delegacion != null) {
                $registro = ContadorNumeroInterno::where('estado_id',$delegacion->estado_id)->get();
                $isNuevo = sizeof($registro) == 0;
                $contador = $isNuevo ? 0 : $registro[0]->numero;
                $contador = $contador + 1;
                if ($isNuevo) {
                    ContadorNumeroInterno::create([
                        'estado_id' => $delegacion->estado_id,
                        'numero' => $contador,
                    ]);
                } else {
                    $registro[0]->numero = $contador;
                    $registro[0]->save();
                }
                $numeroInterno = 'VOL'.date('y').str_pad($delegacion->estado_id, 2, '0', STR_PAD_LEFT).str_pad($contador, 4, '0', STR_PAD_LEFT);
            }
        }
        return $numeroInterno;
    }
    public static function responsee(
        $message = 'Tenemos un error',
        $result = true,
        $data = null
    ) {
        return response()->json(array(
            'result'    => $result,
            'message'   => $message,
            'data'      => $data,
        ), 200);
    }
    public function insertar($payload, $modelo) {
        $modelo::create($payload);
        return self::responsee('Registro guardado corrrectamente.');
    }
    public function insertMulti($payload, $modelo) {
        foreach ($payload['data'] as $key => $value) {
            $modelo::create($value);
        }
        return self::responsee('Registro guardado corrrectamente.');
    }
    public function actualizar($payload, $modelo) {
       if(isset($payload['id'])){
           $modelo::updateOrCreate(['id' => $payload['id']],$payload);
           return self::responsee('Registro actualizado corrrectamente.');
       } else {
           return self::responsee('Actualizar no tiene id.', false);
       }
    }
    public function generateCode($num = 12) {
        $date = date('YmdHis');
        $code = uniqid($date);
        $generatedCode = substr($code, -$num); // Extraer los últimos "num" caracteres del código generado
        // $generatedCode = substr($code, 0, $num); // Extraer los primeros "desiredLength" caracteres del código generado
        return $generatedCode;
    }
    public function eliminar($payload, $modelo) {
        if($payload['id']){
            $modelo::whereIn('id', [$payload['id']])->delete();
            return self::responsee('Registro eliminado corrrectamente.');
        } else {
            return self::responsee('Para poder eliminar se requiere el id.', false);
        }
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
                default:
                    return self::responsee('Acción no válida', false);
            }
        } else {
            return self::responsee('No existe una acción.', false);
        }
    }
    public function filtrar(array $payload = [], Model $modelo = null,$columnOrder = 'nombre') {
        $filtros = array_key_exists('payload', $payload) ? $payload['payload'] : [];
        $query = $modelo::query()->orderBy($columnOrder, 'asc');
        foreach ($filtros as $column => $value) {
            if (is_array($value)) {
                $query->whereBetween($column, $value);
            } else {
                $query->where($column, $value);
            }
        }
        $data = $query->get();
        return $data;
    }
    public static function getMainURL() {
        $isSecure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        $protocol = $isSecure ? 'https://' : 'http://';
        return $protocol . $_SERVER['HTTP_HOST'];
        
    }
    public static function getURLCodeInterno($code) {
        return self::getMainURL().'/scan?code='.$code;

    }
    public function getDelegacionIDXUsuario($userID) {
        $userID = 17;
        $response = null;
        if (isset($userID)) {
            $user = User::find($userID);
            if($user != null){
                switch($user->tipoUsuario_id){
                    case 1:
                        $response =  null;
                        break;
                    case 2:
                        $response =  null;
                        break;
                    case 3:
                        $coordinador =  Coordinadores::where('usuario_id',$userID)->get();
                        $response = $coordinador == null ? null : (sizeof($coordinador) == 1 ? $coordinador[0]->delegacion_id : null);
                        break;
                    case 4:
                        $coordinador =  Coordinadores::where('usuario_id',$userID)->get();
                        $response = $coordinador == null ? null : (sizeof($coordinador) == 1 ? $coordinador[0]->delegacion_id : null);
                        break;
                    case 5:
                        $user = User::find($userID);
                        if ($user != null){
                            $voluntario = Voluntarios::find($user->voluntario_id);
                            if ($voluntario != null) {
                                $response = $voluntario->delegacion_id;
                            }
                        } 
                        break;
                }
            }
        }
        return 1;
        // return $response;
        
    }
    public function getVoluntariosXDelegacion($delegacionID = null) {
        $data = [];
        if ($delegacionID != null) {
            $data = Voluntarios::where('delegacion_id', $delegacionID)
            ->select('id','delegacion_id','nombre','primerApellido','segundoApellido','numeroAsociado','numeroInterno')
            ->get();
        }
        return $data;
    }

    public function idsDelegacionXEstado($estado_id) {
       return Delegaciones::where('estado_id',$estado_id)->pluck('id')->toArray();
    }
    public function idsDelegacionesXTipoUsuario($tipoUsuarioID, $delegacionID = null) {
        switch($tipoUsuarioID){
            case 1:     // '1', 'Administrador'
                return Delegaciones::pluck('id')->toArray();
                break;
            case 2:     // '2', 'CN -  Coordinador Nacional' 
                return Delegaciones::pluck('id')->toArray();
                break;
            case 3:     // '3', 'CE -  Coordinador Estatal'
                $delegacion = Delegaciones::find($delegacionID);
                return $delegacion == null ? null : Delegaciones::where('estado_id',$delegacion->estado_id)->pluck('id')->toArray();
                break;
            case 4:     // '4', 'CL -  Coordinador Local'
                return $delegacionID;
                break;
            case 5:     // '5', 'Verificador Horas Voluntarias'
                return null;
                break;
        }
    }
    public function idsDelegacionesXVoluntarioID($voluntario_id) {
        $response = null;
        $voluntario = Voluntarios::where('id',$voluntario_id)
            ->with('usuario:voluntario_id,tipoUsuario_id')
            ->get();
        if ($voluntario->count() == 1) {
            $voluntario = $voluntario[0];
            $tipoUsuario_id = $voluntario->usuario->tipoUsuario_id;
            $response = self::idsDelegacionesXTipoUsuario($voluntario->usuario->tipoUsuario_id,$voluntario->delegacion_id);
        }
        return $response;
    }

    public static function sendStorage($file,$folder,$filename) {
        if($filename == null){
            $filename = $file->getClientOriginalName();
        } else{
            $extension = $file->getClientOriginalExtension();
            $filename = $filename.'.'.$extension;
        }
        // Almacenar el archivo en el almacenamiento
        $path = Storage::disk('public')->putFileAs($folder, $file, $filename);
        // Obtener la URL interna del archivo
        $url = Storage::disk('public')->url($path);
        $url = self::getMainURL().(str_replace('http://localhost', '', $url));
        return  $url;
        
    }

    public static function coordinadorParaFirmas($delegacionID,$areaID = 2){
        // $delegacion = Delegaciones::find($delegacionID);
        $response = null;
        $coordinador = DelegacionAreasCoordinadores::where('delegacion_id', $delegacionID)
        ->where('area_id',$areaID)
        ->with(['voluntario' => function ($query) {
            $query->select('id', 'nombre', 'primerApellido', 'segundoApellido');
        }])
        ->get();
        if ($coordinador->count() == 1){
            $coordinador =$coordinador->toArray()[0];
            $response = [
                'nombre'   => $coordinador['voluntario']['nombreCompleto'],
                'uriFirma' => $coordinador['uriFirma'],
                'uriSello' => $coordinador['uriSello'],
            ];
        }
        // dd($registros);
        return $response;
    }
}
