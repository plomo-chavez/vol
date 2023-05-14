<?php
namespace App\Http\Controllers\Configuracion\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HabitacionEstatus extends Model
{
    use HasFactory;

    protected $table        = "habitaciones_estatus";
    protected $primaryKey   = "id";
}
