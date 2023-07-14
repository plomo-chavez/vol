<?php
namespace App\Http\Controllers\Configuracion\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservacionAcompañantes extends Model
{
    use HasFactory;
    protected $table        = "reservacion_acompaniantes";
    protected $primaryKey   = "id";

    protected $fillable = [
        'persona_id',
        'reservacion_id',
    ];
}
