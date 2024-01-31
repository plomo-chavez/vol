<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cargos extends Model {
    use HasFactory;
    protected $table        = "cargos";
    protected $primaryKey   = "id";

    protected $fillable = [
        'nombre',
    ];
}
