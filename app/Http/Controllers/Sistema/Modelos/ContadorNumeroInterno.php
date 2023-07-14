<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContadorNumeroInterno extends Model
{
    use HasFactory;
    protected $table        = "contadorNumeroInterno";
    protected $primaryKey   = "id";

    protected $fillable = [
        'estado_id',
        'numero',
    ];
} 
