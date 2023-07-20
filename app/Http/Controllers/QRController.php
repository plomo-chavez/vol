<?php
namespace App\Http\Controllers;
use App\Http\Controllers\BaseController;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\Storage;

class QRController extends BaseController {
    public static function generateAndSaveQR($data,$ubicacion,$name = null)
    {
        switch ($ubicacion) {
            case 'fichasRegistro':
                $name = ($name == null) ? time() : $name;
                $output_file = 'qrcode/fichasRegistro/qr-' . $name . '.png';
                break;
        }
        
        $image = \QrCode::format('png')
            ->size(200)->errorCorrection('H')
            ->margin(3) // Establece el tamaño del margen en píxeles
            ->generate($data);
        Storage::disk('local')->put($output_file, $image);
        $url = self::getMainURL().'/storage'.'/'.$output_file;
        $url = './storage'.'/'.$output_file;
        return $url; 
    }
}
 