<?php
namespace App\Http\Controllers\Auth\Models;
use App\Http\Controllers\Sistema\Modelos\Voluntarios;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table        = "usuarios";
    protected $primaryKey   = "id";
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'persona_id',
        'voluntario_id',
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
        return $this->belongsTo(TipoUsuario::class, 'tipoUsuario_id');
    }
    public function voluntario() {
        return $this->belongsTo(Voluntarios::class, 'persona_id','id');
    }

    public function getTipoUsuarioAttribute(){
        return optional($this->tipo_usuario)['nombre'] ?? '';
    }

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
