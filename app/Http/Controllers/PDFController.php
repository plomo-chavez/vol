<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\View;
use Dompdf\Dompdf;
use PDF;

class PDFController extends Controller
{
    public static function generatePDF($data,$viewTemplate,$fileName) {
        $dompdf = new Dompdf();
        // Renderizar la vista a HTML
        $html = View::make('pdf.voluntario-credencialTemporal', $data)->render();
        // Cargar el archivo CSS externo
        $cssPathDefault = resource_path('views/pdf/styles/styleDefault.css');
        $cssDefault = file_get_contents($cssPathDefault);
        $html = $html . '<style>' . $cssDefault . '</style>';
        $cssPath = resource_path('views/pdf/styles/styleCredencialTemporal.css');
        $css = file_get_contents($cssPath);
        $html = $html . '<style>' . $css . '</style>';
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
    }
    // public static function generatePDF($data,$viewTemplate,$fileName) {
    //     $dompdf = new Dompdf();
    //     // Cargar el archivo CSS externo
    //     $cssPath = resource_path('views/pdf/styleCR.css');
    //     $css = file_get_contents($cssPath);
    //     // Renderizar la vista a HTML
    //     $html = View::make($viewTemplate, $data)->render();
    //     $html = $html . '<style>' . $css . '</style>';
    //     $dompdf->loadHtml($html);
    //     // Habilitar el procesamiento de CSS
    //     $options = $dompdf->getOptions();
    //     $options->set('isRemoteEnabled', true);
    //     $options->set('isPhpEnabled', true);
    //     $dompdf->setOptions($options);
    //     // Renderizar el PDF
    //     $dompdf->render();
    //     // Devolver el PDF
    //     return $dompdf->stream($fileName);
    // }
}
 