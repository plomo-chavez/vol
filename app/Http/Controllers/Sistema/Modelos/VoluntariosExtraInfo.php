<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VoluntariosExtraInfo extends Model
{
    use HasFactory;
    protected $table        = "voluntariosExtraInfo";
    protected $primaryKey   = "id";
    protected $appends = [
        // 'nombreCompleto',
        // 'label',
    ];
    protected $fillable = [
        'capacidadesDiferentes',
        'enfermedades',
        'alergias',
        'direccion',
        'noExt',
        'noInt',
        'cp',
        'medios',
        'estado_id',
        'ciudad',
        'colonia',
        'telTrab',
        'telPart',
        'cel',
        'gradoEstudios',
        'profesion',
        'ocupacionActual',
        'empresaInstitucion',
        'idioma1',
        'nivelIdioma1',
        'idioma2',
        'nivelIdioma2',
        'pasaporte',
        'pasaporteVence',
        'visa',
        'visaVence',
        'interesVoluntario',
        'recibirCR',
        'aportarCR',
        'miembroInstitucion',
        'cualInstitucion',
        'contactoNombre',
        'contactoParentesco',
        'contactoTelefono',
        'contactoCelular',
        'disponibilidadHorarioInicio',
        'disponibilidadHorarioFin',
        'disponibilidadTurnos',
        'disponibilidadDias',
    ];
    public function estado() {
        return $this->hasOne(Estado::class,'id','estado_id')->select('id','nombre');
    }
    // public function contactoParentesco() {
    //     return $this->hasOne(Parentesco::class,'id','contactoParentesco_id')->select('id','nombre');
    // }
}
