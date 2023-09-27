<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HorasVoluntarias extends Model {
    use HasFactory;
    protected $table        = "horasVoluntarias";
    protected $primaryKey   = "id";

    protected $fillable = [
        'voluntario_id',
        'area',
        'area_id',
        'subactividad_id',
        'subactividad',
        'actividad',
        'actividad_id',
        'fecha',
        'horaInicio',
        'horaFin',
        'tiempoLabel',
        'tiempoMinutos',
        'guardia_id',
        'minutos',
    ];
    public function area() {
        return $this->hasOne(Areas::class,'id','area_id')->select('id','nombre');
    }
    public function voluntario() {
        return $this->hasOne(Voluntarios::class,'id','voluntario_id');
    }
    public function guardia() {
        return $this->hasOne(GuardiasHoras::class,'id','guardia_id');
    }
}
