<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Areas extends Model {
    use HasFactory;
    protected $table        = "areas";
    protected $primaryKey   = "id";

    protected $fillable = [
        'nombre',
    ];

    public function cargos() {
        return $this->belongsToMany(Cargos::class, 'area_cargos', 'area_id', 'cargo_id')
        ->select('cargos.id', 'cargos.nombre')
        ->where('status',1);
    }
}
