<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tipoActividadesHV extends Model {
    use HasFactory;
    protected $table        = "tipoActividadesHV";
    protected $primaryKey   = "id";

    protected $fillable = [
        'nombre',
    ];
    // public function voluntario() {
    //     return $this->belongsTo(Voluntarios::class, 'voluntario_id','id');
    // }
}
