<?php
namespace App\Http\Controllers\Sistema\Modelos;
use App\Http\Controllers\Auth\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voluntarios extends Model
{
    use HasFactory;
    protected $table        = "voluntarios";
    protected $primaryKey   = "id";
    protected $appends = [
        'nombreCompleto',
        'label',
    ];

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
        'urlImagen',
        'codigoCredencial',
    ];

    // public function delegacion() {
    //     return $this->belongsTo(Delegaciones::class, 'delegacion_id');
    // }
    public function delegacion() {
        return $this->hasOne(Delegaciones::class,'id','delegacion_id');
    }
    public function usuario() {
        return $this->hasOne(User::class,'voluntario_id','id');
    }
    public function extraInfo() {
        return $this->hasOne(VoluntariosExtraInfo::class,'voluntario_id','id');
    }
    public function area() {
        return $this->hasOne(Areas::class,'id','area_id')->select('id','nombre');
    }
    // Define el atributo accesor para concatenar nombre y primerApellido
    public function getNombreCompletoAttribute() {
        return ($this->attributes['nombre'] ?? '' ) . ' ' .($this->attributes['primerApellido'] ?? '' ) . ' ' .($this->attributes['segundoApellido'] ?? '' );
    }
    // Define el atributo accesor para concatenar nombre y primerApellido
    public function getLabelAttribute() {
        return ($this->attributes['numeroInterno'] ?? '' ).' - '.($this->attributes['numeroAsociado'] ?? 'N/A' ).' - '.($this->attributes['nombre'] ?? '' ) . ' ' .($this->attributes['primerApellido'] ?? '' ) . ' ' .($this->attributes['segundoApellido'] ?? '' );
    }

}
