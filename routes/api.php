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
// Route::middleware([UserAuthentication::class])->post('/auth/verificar',    [AuthController::class, 'verificar']);
Route::post('/catalogo/tiposUsuarios',          [CatalogosController::class, 'getTiposUsuarios']);
Route::post('/catalogo/estatusHabitaciones',    [CatalogosController::class, 'getEstatusHabitaciones']);
Route::post('/catalogo/habitaciones',           [CatalogosController::class, 'getHabitaciones']);
Route::post('/catalogo/customPersons',          [CatalogosController::class, 'customPersons']);
Route::post('/catalogo/roomsAvailable',         [CatalogosController::class, 'roomsAvailable']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
