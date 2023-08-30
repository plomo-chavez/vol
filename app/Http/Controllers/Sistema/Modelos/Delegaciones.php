<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delegaciones extends Model
{
    use HasFactory;
    protected $table        = "delegaciones";
    protected $primaryKey   = "id";
    protected $appends = [
        'nombreLabel'];

    protected $fillable = [
        'direccion',
        'ciudad',
        'estado_id',
        'isLocal',
    ];

    public function areas() {
        return $this->hasMany(DelegacionAreas::class, 'delegacion_id', 'id')->select('id', 'delegacion_id', 'area_id')
            ->with('area:id,nombre');
    }

    public function estado() {
        return $this->belongsTo(Estado::class, 'estado_id', 'id')->select('id', 'nombre');
    }
    // public function getNombreLabelAttribute(){
    //     $estado = Estado::find($this->attributes['estado_id']);
    //     return $this->attributes['isLocal'] ? 'Coordinación local de ' . ($this->attributes['ciudad']) . ' en ' . ($estado->nombre) : 'Coordinación estatal de ' . ($estado->nombre) ;
    // }
    public function getNombreLabelAttribute() {
        $estadoNombre = $this->estado->nombre; // Usar la relación estado para obtener el nombre

        $labelPrefix = $this->attributes['isLocal'] ? 'Coordinación local de ' : 'Coordinación estatal de ';

        return $labelPrefix . ($this->attributes['isLocal'] ? $this->attributes['ciudad'] . ' en ' . $estadoNombre : $estadoNombre);
    }

}
