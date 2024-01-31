<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AreaCargos extends Model
{
    use HasFactory;
    protected $table        = "area_cargos";
    protected $primaryKey   = "id";

    protected $fillable = [
        'area_id',
        'cargo_id',
        'status',
    ];

    // public function cargo() {
    //     return $this->hasOne(Cargos::class,'id', 'cargo_id');
    // }
}
