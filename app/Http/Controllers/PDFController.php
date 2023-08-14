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
            // Renderizar la vista a HTML
            $data['fechaImpresa'] = self::fechaWithHora();
            $html = View::make($viewTemplate, $data)->render();
            // Cargar el archivo CSS externo
            $cssPathDefault = resource_path('views/pdf/styles/styleDefault.css');
            $cssDefault = file_get_contents($cssPathDefault);
            $html = $html . '<style>' . $cssDefault . '</style>';
            // Cargar el archivo CSS externo
            $cssPathDefault = resource_path('views/pdf/styles/styleCR.css');
            $cssDefault = file_get_contents($cssPathDefault);
            $html = $html . '<style>' . $cssDefault . '</style>';
            if (strpos($viewTemplate,'credencialTemporal') !== false) {
                $cssPath = resource_path('views/pdf/styles/styleCredencialTemporal.css');
                $css = file_get_contents($cssPath);
                $html = $html . '<style>' . $css . '</style>';
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
            return "Error al generar el PDF: " . $e->getMessage();
        }        
    }
}
 