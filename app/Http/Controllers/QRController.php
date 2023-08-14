<?php
namespace App\Http\Controllers;
use App\Http\Controllers\BaseController;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\Storage;

class QRController extends BaseController {
    public static function generateAndSaveQR($data,$ubicacion,$name = null) {
        $name = ($name == null) ? time() : $name;
        $name = $name . '.png';
    
        $qrCodeContent = \QrCode::format('png')
            ->size(200)->errorCorrection('H')
            ->margin(3)
            ->generate($data);
    
        // Almacenar el archivo en el almacenamiento
        $path = Storage::disk('public')->put($ubicacion . '/' . $name, $qrCodeContent);
    
        // Obtener la URL interna del archivo
        $url = Storage::disk('public')->url($ubicacion . '/' . $name);
        // Verificar si estás en entorno local
        if (strstr($url, 'localhost')) {
            $url = self::getMainURL().(str_replace('http://localhost', '', $url));
        }
        return $url; 
    }
}
 