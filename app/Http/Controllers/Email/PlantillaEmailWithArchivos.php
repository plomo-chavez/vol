<?php
namespace App\Http\Controllers\Email;
use Illuminate\Support\Facades\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class PlantillaEmailWithArchivos extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        // Configurar el correo
        $mail = $this->subject('Archivos')
                     ->view('emails.conArchivos')
                     ->attachFromStorage('/app/public/archivo.pdf', 'nombre_archivo.pdf');
        Mail::send($email);

        // Verificar si el envío fue exitoso
        if (count(Mail::failures()) > 0) {
            // El correo se envió exitosamente
            dd('El correo se envió correctamente');
        } else {
            // Ocurrió un error al enviar el correo
            dd('Se produjo un error al enviar el correo');
        }
        return '';
    }
}
