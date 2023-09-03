<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CredencialTemporal extends Model {

    use HasFactory;
    protected $table        = "credencialesTemporales";
    protected $primaryKey   = "id";

    protected $fillable = [
        'voluntario_id',
        'codigo',
        'fechaEmision',
        'fechaVencimiento',
        'emitio_id',
        'isActual',
    ];
    
    public function voluntario() {
        return $this->belongsTo(Voluntarios::class, 'voluntario_id','id');
    }
    
    public function emitio() {
        return $this->belongsTo(Voluntarios::class, 'emitio_id','id');
    }
}
