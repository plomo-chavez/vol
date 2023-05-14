<?php
namespace App\Http\Controllers\Auth\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalAccessToken extends Model
{
    use HasFactory;

    protected $table        = "personal_access_tokens";
    protected $primaryKey   = "id";
}
