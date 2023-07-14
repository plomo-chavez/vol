<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DelegacionAreas extends Model
{
    use HasFactory;
    protected $table        = "delegaciones_Areas";
    protected $primaryKey   = "id";

    protected $fillable = [
        'delegacion_id',
        'coordinacion_id',
    ];
    public function area() {
        return $this->hasOne(Coordinaciones::class,'id','coordinacion_id');
    }

}
