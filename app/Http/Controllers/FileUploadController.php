<?php
namespace App\Http\Controllers;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;

use Illuminate\Http\Request;

class FileUploadController extends BaseController
{    
    public function uploadFilesDelegacionesCoordinadores(Request $request){
        $msg = 'No se ha proporcionado ningún archivo';
        $boolResp = false;
        // Obtener el archivo del formulario
        $uploadedFile   = $request->file('file');
        $coordi_id      = $request->input('registro_id');
        $filename       = $request->input('newName') ?? null;
        // Validar que se haya enviado un archivo
        if ($uploadedFile) {
            $folder = 'delegaciones/coordinadores/'.$coordi_id;
            $url = self::sendStorage($uploadedFile,$folder,$filename);
            $isFirma = strtolower($filename) == 'firma';
            DelegacionAreasCoordinadores::where('id', $coordi_id)->update([($isFirma ? 'uriFirma':'uriSello') => $url]);
            return self::responsee(
                'Archivo subido correctamente',
                true,
                []
                // ['url' => $url]
            );
        } else{
            return self::responsee(
                'Problemas al subir el archivo',
                false,
            );
        }        
    }    
    public function uploadFilesVoluntarios(Request $request){
        $msg = 'No se ha proporcionado ningún archivo';
        // Obtener el archivo del formulario
        $uploadedFile   = $request->file('file');
        $voluntario_id  = $request->input('voluntario_id');
        $filename       = $request->input('fileName') ?? 'archivo';
        // Validar que se haya enviado un archivo
        if ($uploadedFile) {
            $voluntario = Voluntarios::find($voluntario_id);
            if ($voluntario == null ){
                return self::responsee('No se encontro al voluntario', false, );
            }
            $folder = 'voluntarios/'.$voluntario->numeroInterno;
            $url = self::sendStorage($uploadedFile,$folder,$filename);
            $voluntario->urlImagen = $url;
            $voluntario->save();
            return self::responsee('Archivo subido correctamente',true,['url' => $url]);
        } else{
            return self::responsee('Problemas al subir el archivo',false,);
        }        
    }
}
