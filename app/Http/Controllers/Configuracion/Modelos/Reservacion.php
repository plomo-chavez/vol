<?php
namespace App\Http\Controllers\Configuracion\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservacion extends Model
{
    use HasFactory;
    protected $table        = "reservaciones";
    protected $primaryKey   = "id";

    protected $fillable = [
        'persona_id',
        'fechaInicio',
        'fechaFin',
    ];
}
