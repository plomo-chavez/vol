<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HorasVoluntarias extends Model
{
    use HasFactory;
    protected $table        = "horasVoluntarias";
    protected $primaryKey   = "id";

    protected $fillable = [
        'coordinacion_id',
        'voluntario_id',
        'actividad',
        'fecha',
        'horaInicio',
        'horaFin',
        'numeroHoras',
    ];
}
