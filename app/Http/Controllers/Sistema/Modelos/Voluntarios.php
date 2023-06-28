<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voluntarios extends Model
{
    use HasFactory;
    protected $table        = "voluntarios";
    protected $primaryKey   = "id";

    protected $fillable = [
        'nombre',
        'segundoApellido',
        'primerApellido',
        'numeroAsociado',
        'telefono',
        'correo',
        'codeEmail',
    ];
}
