<?php
namespace App\Http\Controllers\Configuracion\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemplateEmail extends Model
{
    use HasFactory;
    protected $table        = "template_email";
    protected $primaryKey   = "id";

    protected $fillable = [
        'nombre',
        'config',
        'html',
        'slug',
        'title',
    ];
}
