<?php
namespace App\Http\Controllers\Auth\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table        = "usuarios";
    protected $primaryKey   = "id";
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'poersona_id',
        'tipoUsuario_id',
        'usuario',
        'email',
        'avatar_id',
        'telefono',
        'intentos',
        'accesoMovil',
        'accesoWeb',
        'activo',
        'estatus',
        'bloqueado',
        'validado',
        'token',
    ];

    public function tipoUsuario() {
        return $this->hasOne(TipoUsuario::class,'id','tipoUsuario_id');
    }

    public function getTipoUsuarioAttribute(){
        return optional($this->tipo_usuario)['nombre'] ?? '';
    }

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
