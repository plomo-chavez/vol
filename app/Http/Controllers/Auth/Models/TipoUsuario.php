<?php
namespace App\Http\Controllers\Auth\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoUsuario extends Model
{
    use HasFactory;

    protected $table        = "tipousuarios";
    protected $primaryKey   = "id";
}
