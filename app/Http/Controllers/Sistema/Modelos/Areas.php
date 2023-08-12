<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Areas extends Model
{
    use HasFactory;
    protected $table        = "areas";
    protected $primaryKey   = "id";

    protected $fillable = [
        'nombre',
    ];
}
