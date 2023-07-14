<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coordinadores extends Model
{
    use HasFactory;
    protected $table        = "coordinadores";
    protected $primaryKey   = "id";

    protected $fillable = [
        'voluntario_id',
        'usuario_id',
        'delegacion_id',
        'tipoCoordinador',
    ];
}
