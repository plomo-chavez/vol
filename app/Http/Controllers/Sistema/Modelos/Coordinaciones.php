<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coordinaciones extends Model
{
    use HasFactory;
    protected $table        = "coordinaciones";
    protected $primaryKey   = "id";

    protected $fillable = [
        'nombre',
    ];
}
