<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delegaciones extends Model
{
    use HasFactory;
    protected $table        = "delegaciones";
    protected $primaryKey   = "id";

    protected $fillable = [
        'direccion',
        'ciudad',
        'estado_id',
    ];

    public function areas() {
        return $this->hasMany(DelegacionAreas::class, 'delegacion_id', 'id')->select('id', 'delegacion_id', 'area_id')
            ->with('area:id,nombre');
    }

    public function estado() {
        return $this->belongsTo(Estado::class, 'estado_id', 'id')->select('id', 'nombre');
    }
}
