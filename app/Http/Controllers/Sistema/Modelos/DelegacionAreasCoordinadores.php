<?php

namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DelegacionAreasCoordinadores extends Model {
    use HasFactory;
    protected $table        = "delegacion_areas_coordinadores";
    protected $primaryKey   = "id";

    protected $fillable = [
        'area_id',
        'delegacion_id',
        'voluntario_id',
        'pedirArchivos',
        'uriFirma',
        'uriSello',
        'isLocal',
    ];
    public function area() {
        return $this->hasOne(Areas::class,'id','area_id');
    }
    public function voluntario(){
        return $this->hasOne(Voluntarios::class,'id','voluntario_id');
    }
}

