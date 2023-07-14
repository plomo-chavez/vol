<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoAsociado extends Model
{
    use HasFactory;
    protected $table        = "tiposAsociado";
    protected $primaryKey   = "id";
}
