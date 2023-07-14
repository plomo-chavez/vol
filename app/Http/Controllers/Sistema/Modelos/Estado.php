<?php
namespace App\Http\Controllers\Sistema\Modelos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model {
    use HasFactory;
    protected $table        = "estados";
    protected $primaryKey   = "id";
}
