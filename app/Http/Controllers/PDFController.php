<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Sistema\Modelos\HorasVoluntariasContadores;
use App\Http\Controllers\Sistema\GuardiasHorasController;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\QRController;
use Illuminate\Support\Facades\View;
use Illuminate\Http\Request;
use Dompdf\Dompdf;
use PDF;

class PDFController extends BaseController {
    public static function generatePDF($data,$viewTemplate,$fileName) {
        try {
            $dompdf = new Dompdf();
            if (strpos($viewTemplate,'credencialTemporal') !== false) {
                $data['imgCR'] = self::getMainURL().'/images/elementos/crHorizontal.jpeg';
                $data['imgVoluntariado'] = self::getMainURL().'/images/elementos/voluntariado.png';
                $data['imgVoluntario'] = self::getMainURL().'/images/elementos/perfilDefault.jpg';
            }
            // Renderizar la vista a HTML
            $data['fechaImpresa'] = self::fechaWithHora();
            $html = View::make($viewTemplate, $data)->render();
            // Cargar el archivo CSS externo
            $cssPathDefault = resource_path('views/pdf/styles/styleDefault.css');
            $cssDefault = file_get_contents($cssPathDefault);
            $html = $html . '<style>' . $cssDefault . '</style>';
            if (strpos($viewTemplate,'credencialTemporal') !== false) {
                $cssPath = resource_path('views/pdf/styles/styleCredencialTemporal.css');
                $css = file_get_contents($cssPath);
                $html = $html . '<style>' . $css . '</style>';
            } else {
                // Cargar el archivo CSS externo
                $cssPathDefault = resource_path('views/pdf/styles/styleCR.css');
                $cssDefault = file_get_contents($cssPathDefault);
                $html = $html . '<style>' . $cssDefault . '</style>';
            }
            $dompdf->loadHtml($html);
            // Habilitar el procesamiento de CSS
            $options = $dompdf->getOptions();
            $options->set('isRemoteEnabled', true);
            $options->set('isPhpEnabled', true);
            $dompdf->setOptions($options);
            // Renderizar el PDF
            $dompdf->render();
            // Devolver el PDF
            return $dompdf->stream($fileName);
        } catch (\Exception $e) {
            // Manejo de excepciones
            return array(
                'result'    => false,
                'message'   => "Error al generar el PDF: " . $e->getMessage(),
                'data'      => [],
            );
        }        
    }

    public function generatePDFVoluntarios(Request $request){
        $payload = $request->all();
        $pdfContent = null;
        switch ($payload['documento']) {
            case 'fichaRegistro':
                $pdfContent = self::generateFichaRegistro($payload);
            break;
            case 'reporteHoras':
                $pdfContent = self::generateReporteHoras($payload);
            break;
            case 'credencialTemporal':
                $pdfContent = self::generateCredencialTemporal($payload);
            break;
        }
        if (isset($pdfContent['status']) && !$pdfContent['status']) {
            return self::responsee(
                $pdfContent['message'],
                $pdfContent['status'],
               [] ,
            );
        } else {
            $response = response($pdfContent, 200, [ 'Content-Type' => 'application/pdf', ]);
            return $response;
        }
    }
    
    public static function generateFichaRegistro($payload) {
        try {
            if (!($payload['voluntario_id'] ?? false)) {
                return self::response($message = 'Falta voluntario_id');
            } else {
                $data = Voluntarios::find($payload['voluntario_id'])->toArray();
                if ($data != null) {
                    $path = 'voluntarios'.'/'.$data['numeroInterno'];
                    $urlCodigoInterno = self::getURLCodeInterno($data['numeroInterno']);
                    $data['qrCode'] = QRController::generateAndSaveQR($urlCodigoInterno,$path,'qrScanVoluntario');
                    return array(
                        'result'    => true,
                        'message'   => 'PDF generado con exito',
                        'data'      => self::generatePDF($data,'pdf.voluntario-fichaRegistro','voluntario-fichaRegistro.pdf'),
                    );
                } else {
                    return self::response($message = 'Problemas con la resevación');
                }
            }
        } catch (Exception $e) {
            // Manejar la excepción aquí
            return self::response($message = 'Ha ocurrido una excepción: ' . $e->getMessage());
        }
    }
    public static function generateReporteHoras($payload) {
        try {
            if (!($payload['voluntario_id'] ?? false)) {
                return self::response($message = 'Falta voluntario_id');
            } else {
                $response = GuardiasHorasController::getDetallesMes($payload);// Suponiendo que $response es tu objeto JsonResponse

                $contador = HorasVoluntariasContadores::where('voluntario_id',$payload['voluntario_id'])->get()[0] ?? null;
                $voluntario = Voluntarios::find($payload['voluntario_id']);
                $responseContent = $response->content(); // Obtiene el contenido JSON del objeto
                $tmp = json_decode($responseContent, true); // Decodifica el contenido JSON en un arreglo asociativo
                $registros = $tmp['data'];
                $tmp = [];
                $index = 1;
                foreach ($registros as $item) {
                    $t = array(
                        'index'         => $index,
                        'area'          => $item['area']['nombre'] ?? '',
                        'actividad'     => $item['actividad'] ?? '',
                        'tiempo'        => $item['tiempoLabel'] ?? '',
                        'horaInicio'    => self::formatTime($item['horaInicio']) ?? '',
                        'horaFin'       => self::formatTime($item['horaFin']) ?? '',
                        'fechaRegistro' => self::formatTime($item['created_at']) ?? '',
                    );
                    $tmp[] = $t;
                }
                $data = [];
                $data['numeroInterno']  = $voluntario['numeroInterno'] ?? '';
                $data['numeroAsociado']  = $voluntario['numeroAsociado'] ?? '';
                $data['voluntario']  = $voluntario['nombreCompleto'] ?? '';
                $data['anio']        = $payload['anio'];
                $data['mesLabel']    = self::getNameMes($payload['mes']);
                $data['tiempoLabel'] = $contador['tiempo_mes'];
                $data['fechaImpresa']= self::formatTime('now');
                $data['horasVoluntarias'] = $tmp;
                if ($data != null) {
                    return array(
                        'result'    => true,
                        'message'   => 'PDF generado con exito',
                        'data'      => self::generatePDF($data,'pdf.voluntario-reporteHoras','voluntario-reporteHoras.pdf'),
                    );
                } else {
                    return self::response($message = 'Problemas con la resevación');
                }
            }
        } catch (Exception $e) {
            // Manejar la excepción aquí
            return self::response($message = 'Ha ocurrido una excepción: ' . $e->getMessage());
        }
    }
    public static function generateCredencialTemporal($payload) {
        try {
            if (!($payload['voluntario_id'] ?? false)) {
                return self::response($message = 'Falta voluntario_id');
            } else {
                $data = Voluntarios::find($payload['voluntario_id'])->toArray();
                $delegacion_id = $data['delegacion_id']; 
                if ($data != null) {
                    if (($delegacion_id == 0 || $delegacion_id == null)) {
                        return self::response($message = 'Este voluntario no pertenece a una delegación');
                    }
                    if (($data['numeroInterno'] == null)) {
                        return self::response($message = 'Este voluntario no tiene un numero interno');
                    }
                    $coordinador = self::coordinadorParaFirmas($delegacion_id);                 
                    if ($coordinador == null) {
                        return self::response($message = 'Error con el coordinador, checar datos de la delegación.');
                    }
                    if ($coordinador['uriFirma'] == null || $coordinador['uriSello'] == null ) {
                        return self::response($message = 'Faltan archivos del coordinador.');
                    }
                    $duracion = $payload['duracion'] ?? 60;
                    $data['coordinador']    = strtoupper($coordinador['nombre']);
                    $data['uriFirma']       = $coordinador['uriFirma'];
                    $data['uriSello']       = $coordinador['uriSello'];
                    $data['urlVoluntario']  = $data['urlImagen'];
                    $data['dias']           = $duracion;
                    $data['fechaInicio']    = self::fechaNow($payload['duracion'] ?? null,'d/m/Y');
                    $data['fechaFin']       = self::fechaNow($payload['duracion'] ?? null,'d/m/Y',$duracion);
                    $data['nombre']         = strtoupper($data['nombre']);
                    $data['primerApellido'] = strtoupper($data['primerApellido']);
                    $data['segundoApellido']= strtoupper($data['segundoApellido']);
                    $urlCodigoInterno = self::getURLCodeInterno($data['numeroInterno']);
                    $path = 'voluntarios'.'/'.$data['numeroInterno'];
                    $data['qrCode'] = QRController::generateAndSaveQR($data['numeroInterno'],$path,'qrCredencialTemporal');
                    return array(
                        'result'    => true,
                        'message'   => 'PDF generado con exito',
                        'data'      => self::generatePDF($data,'pdf.voluntario-credencialTemporal','voluntario-credencialTemporal.pdf'),
                    );
                } else {
                    return self::response($message = 'Problemas con la resevación');
                }
            }
        } catch (Exception $e) {
            // Manejar la excepción aquí
            return self::response($message = 'Ha ocurrido una excepción: ' . $e->getMessage());
        }

    }
}
 