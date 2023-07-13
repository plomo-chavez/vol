<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GuardiasHoras extends Model {
    use HasFactory;
    protected $table        = "guardiasHoras";
    protected $primaryKey   = "id";
    protected $fillable = [
        'verificador_id',
        'delegacion_id',
        'inicio',
        'fin',
    ];
    public function delegacion() {
        return $this->hasOne(Delegaciones::class,'id','delegacion_id');
    }
    public function verificador() {
        return $this->hasOne(Voluntarios::class,'id','verificador_id');
    }
    public function voluntarios() {
            return $this->hasMany(GuardiasHorasVoluntarios::class, 'guardia_id', 'id')
                ->select('id','guardia_id','voluntario_id','fechaInicio','fechaFin')
                ->with('voluntario:id,nombre,numeroAsociado');
            // return $this->hasManyThrough(Voluntarios::class, GuardiasHorasVoluntarios::class, 'guardia_id', 'id', 'id', 'voluntario_id');
    }
}
