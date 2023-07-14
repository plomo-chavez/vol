<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GuardiasHorasVoluntarios extends Model {
    use HasFactory;
    protected $table        = "guardiasHorasVoluntarios";
    protected $primaryKey   = "id";
    protected $fillable = [
        'guardia_id',
        'voluntario_id',
        'fechaInicio',
    ];
    // public function delegacion() {
    //     return $this->hasOne(Delegaciones::class,'id','delegacion_id');
    // }
    public function voluntario() {
        return $this->hasOne(Voluntarios::class,'id','voluntario_id');
    }
}
