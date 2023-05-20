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
        'nombre',
    ];
}
