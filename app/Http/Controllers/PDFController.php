<?php
namespace App\Http\Controllers;
use App\Http\Controllers\BaseController;
use Illuminate\Support\Facades\View;
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
}
 