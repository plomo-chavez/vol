<?php
namespace App\Http\Controllers\Configuracion\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    use HasFactory;

    protected $table        = "personas";
    protected $primaryKey   = "id";

    protected $fillable = [
        'nombre',
        'segundoApellido',
        'primerApellido',
        'nacionalidad',
        'telefono',
        'correo',
    ];
}
