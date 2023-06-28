<?php
namespace App\Http\Controllers\Email;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Configuracion\Modelos\TemplateEmail;
use App\Http\Controllers\Auth\Models\User;
use App\Http\Controllers\BaseController;

class MailController extends BaseController
{
    public function enviar(){
        $template = TemplateEmail::where('slug', 'tmp')->get()[0] ?? null;
        $user = User::find(1)->toArray();
        if($template != null) {
            $plantilla = self::prepararHTML($template->html,$user);
            $data = array(
                'template' => array(
                    'title' => $template->title ?? 'Titulo del correo',
                    'html' => $plantfilla,
                ),
                "correos"   => ['jesus.r.chavez.q.94@gmail.com',]
            );
            self::sendEmail($data);
        } else {
            return self::responsee( 'No se encontro la plantilla',false);
        }
    }
    public static function sendMailWithTemplate($payload,$template){
        if ($template != null) {
            $plantilla = TemplateEmail::where('slug', $template)->get()[0] ?? null;
            if($plantilla != null) {
                $plantillaHTML = self::prepararHTML($plantilla->html,$payload);
                $data = array(
                    'template' => array(
                        'title' => $plantilla->title ?? 'Titulo del correo',
                        'html' => $plantillaHTML,
                    ),
                    "correos"   => ['jesus.r.chavez.q.94@gmail.com']
                );
                return self::sendEmail($data);
            } else {
                return self::responsee( 'No se encontro la plantilla',false);
            }
        } else {
            return self::responsee( 'Falta slug de plantilla.',false);
        }
    }
    
    public static  function prepararHTML($plantilla,$registro){
        foreach ($registro as $propiedad => $valor)
            {$plantilla = str_replace('@{'.$propiedad.'}', $valor, $plantilla);
        }
        return json_decode($plantilla);
    }
    
    public static   function sendEmail($payload){
        try {
            $tmp = Mail::to($payload['correos'])->send(new PlantillaEmail($payload['template']));
            return self::responsee('Correo enviado correctamente.',true);
        } catch (\Exception $e) {
            // var_dump($e->getMessage());
            return self::responsee( $e->getMessage(),false);
        }
    }
}

