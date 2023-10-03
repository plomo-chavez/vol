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
    protected $appends = [
        'delegacion',
        'verificador',
    ];
    public function delegacion() {
        return $this->hasOne(Delegaciones::class,'id','delegacion_id');
    }
    public function verificador() {
        return $this->hasOne(Voluntarios::class,'id','verificador_id');
    }
    // Define el atributo accesor para concatenar nombre y primerApellido
    public function getDelegacionAttribute() {
        return ($this->attributes['delegacion']['nombre'] ?? '' );
    }
    // Define el atributo accesor para concatenar nombre y primerApellido
    public function getVerificadorAttribute() {
        return ($this->attributes['verificador']['nombre'] ?? '' );
    }
    public function voluntarios() {
            return $this->hasMany(GuardiasHorasVoluntarios::class, 'guardia_id', 'id')
                ->select('id','guardia_id','voluntario_id','fechaInicio','fechaFin')
                ->with('voluntario:id,nombre,numeroAsociado,segundoApellido,primerApellido');
            // return $this->hasManyThrough(Voluntarios::class, GuardiasHorasVoluntarios::class, 'guardia_id', 'id', 'id', 'voluntario_id');
    }
}
