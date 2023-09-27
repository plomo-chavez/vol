<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class subTipoActividadesHV extends Model {
    use HasFactory;
    protected $table        = "subTipoActividadesHV";
    protected $primaryKey   = "id";
    protected $fillable = [
        'actividad_id',
        'nombre',
    ];
    public function actividad() {
        return $this->belongsTo(tipoActividadesHV::class, 'actividad_id','id')->select('id','nombre');
    }

    protected $appends = [
        'actividad'
    ];

    public function getActividadAttribute() {
        return $this->attributes['actividad']['nombre'] ?? null;
    }
}
