<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class HorasVoluntariasContadores extends Model {
    use HasFactory;
    protected $table        = "horasVoluntariasContadores";
    protected $primaryKey   = "id";

    protected $fillable = [
        'voluntario_id',
        'mes_actual',
        'minutos_mes',
        'minutos_total',
        'horas_mes',
        'horas_total',
        'tiempo_mes',
        'tiempo_total',
        'historico',
        'anio',
    ];
    public function voluntario() {
        return $this->belongsTo(Voluntarios::class, 'voluntario_id','id');
    }
}
