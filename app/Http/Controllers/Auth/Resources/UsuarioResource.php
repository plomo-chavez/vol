<?php

namespace App\Http\Controllers\Auth\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
class UsuarioResource extends JsonResource {
    public function toArray($request) {
        return [
            'id' => $this->id,
            'usuario' => $this->usuario,
            'tipoUsuario_id' => $this->tipoUsuario_id,
            'tipoUsuario' => $this->tipoUsuario->nombre ?? 'Sin tipo de usuario',
            'password' => $this->password,
            'email' => $this->email,
            'telefono' => $this->telefono,
            'intentos' => $this->intentos,
            'accesoMovil' => $this->accesoMovil,
            'accesoWeb' => $this->accesoWeb,
            'estatus' => $this->estatus,
            'bloqueado' => $this->bloqueado,
            'validado' => $this->validado,
            'token' => $this->token,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
        ];
    }
}