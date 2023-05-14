<?php
namespace App\Http\Controllers\Configuracion\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habitacion extends Model
{
    use HasFactory;

    protected $table        = "habitaciones";
    protected $primaryKey   = "id";

    protected $fillable = [
        'nombre',
        'descripcion',
        'tarifa',
        'estatus_id',
        'amenidades',
        'camas',
        'capacidad',
        'puedeFumar',
    ];

    public function estatus() {
        return $this->hasOne(HabitacionEstatus::class,'id','estatus_id');
    }


}
