<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\UserAuthentication;

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CatalogosController;
use App\Http\Controllers\Configuracion\UsuariosController;
use App\Http\Controllers\Configuracion\HabitacionesController;
use App\Http\Controllers\Configuracion\PersonasController;
use App\Http\Controllers\Configuracion\ReservacionesController;
use App\Http\Controllers\Sistema\VoluntariosController;
use App\Http\Controllers\Sistema\DelegacionesController;
use App\Http\Controllers\Sistema\HorasVoluntariasController;
use App\Http\Controllers\Sistema\CoordinacionesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/newPass',   [AuthController::class, 'newPass']);
Route::post('/auth/register',   [AuthController::class, 'createUser']);
Route::post('/auth/login',      [AuthController::class, 'loginUser']);
Route::post('/auth/details',    [AuthController::class, 'detailsUser']);
Route::post('/auth/pruebas',    [AuthController::class, 'verificar']);
Route::post('/auth/verificar',  [AuthController::class, 'verificar']);
Route::middleware([UserAuthentication::class])->post('/auth/pruebas2',              [AuthController::class, 'verificar']);
Route::middleware([UserAuthentication::class])->post('/get/usuarios',               [UsuariosController::class, 'getUsuarios']);
Route::middleware([UserAuthentication::class])->post('/usuarios/listar',            [UsuariosController::class, 'listarUsuarios']);
Route::middleware([UserAuthentication::class])->post('/usuarios/administrar',       [UsuariosController::class, 'administrarUsuarios']);
Route::middleware([UserAuthentication::class])->post('/habitaciones/administrar',   [HabitacionesController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/habitaciones/listar',        [HabitacionesController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/personas/administrar',       [PersonasController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/personas/listar',            [PersonasController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/reservaciones/administrar',  [ReservacionesController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/reservaciones/listar',       [ReservacionesController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/voluntarios/listar',         [VoluntariosController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/voluntarios/administrar',    [VoluntariosController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/horas/listar',               [HorasVoluntariasController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/horas/administrar',          [HorasVoluntariasController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/delegaciones/listar',        [DelegacionesController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/delegaciones/administrar',   [DelegacionesController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/coordinaciones/listar',      [CoordinacionesController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/coordinaciones/administrar', [CoordinacionesController::class, 'handleAdministrar']);
// Route::middleware([UserAuthentication::class])->post('/auth/verificar',    [AuthController::class, 'verificar']);
Route::post('/catalogo/coordinaciones',          [CatalogosController::class, 'getCoordinaciones']);
Route::post('/catalogo/tiposUsuarios',          [CatalogosController::class, 'getTiposUsuarios']);
Route::post('/catalogo/estados',          [CatalogosController::class, 'getEstados']);
Route::post('/catalogo/tipoAsociado',          [CatalogosController::class, 'getTiposAsociado']);
Route::post('/catalogo/delegaciones',          [CatalogosController::class, 'getDelegacionesWithAreas']);
Route::post('/valid/curp',          [VoluntariosController::class, 'validCurp']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
