<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voluntarios extends Model
{
    use HasFactory;
    protected $table        = "voluntarios";
    protected $primaryKey   = "id";

    protected $fillable = [
        'nombre',
        'segundoApellido',
        'primerApellido',
        'numeroAsociado',
        'numeroInterno',
        'curp',
        'nacionalidad',
        'sexo',
        'estadoCivil',
        'tipoSangre',
        'telefono',
        'correo',
        'codeEmail',
        'fechaNacimiento',
        'edad',
        'lugarNacimiento',
        'enfermedades',
        'alergias',
        'fechaIngresoCR',
        'fechaIngresoArea',
        'capacidadesDiferentes',
        'delegacion_id',
        'area_id',
        'comentarios',
    ];

    // public function delegacion() {
    //     return $this->belongsTo(Delegaciones::class, 'delegacion_id');
    // }
    public function delegacion() {
        return $this->hasOne(Delegaciones::class,'id','delegacion_id');
    }
    public function area() {
        return $this->hasOne(Coordinaciones::class,'id','area_id')->select('id','nombre');
    }
}
