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
use App\Http\Controllers\Sistema\GuardiasHorasController;
use App\Http\Controllers\Sistema\CoordinacionesController;
use App\Http\Controllers\Configuracion\TemplateEmailController;
use App\Http\Controllers\Email\MailController;
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
Route::post('/out/registro',    [VoluntariosController::class, 'registroOut']);
Route::post('/out/valid/code',  [VoluntariosController::class, 'validCode']);
Route::post('/out/get/voluntario',  [VoluntariosController::class, 'getVoluntario']);
Route::post('/out/admin/voluntario',  [VoluntariosController::class, 'handleAdministrar']);
Route::post('/horasVoluntarias/guardias/getUltimo',  [GuardiasHorasController::class, 'getUltimaGuardia']);
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
Route::middleware([UserAuthentication::class])->post('/templates-email/administrar',[TemplateEmailController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/templates-email/listar',     [TemplateEmailController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/horas/administrar',          [HorasVoluntariasController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/delegaciones/listar',        [DelegacionesController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/delegaciones/administrar',   [DelegacionesController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/coordinaciones/listar',      [CoordinacionesController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/coordinaciones/administrar', [CoordinacionesController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/horasVoluntarias/guardias/listar',      [GuardiasHorasController::class, 'handleListar']);
Route::middleware([UserAuthentication::class])->post('/horasVoluntarias/guardias/administrar', [GuardiasHorasController::class, 'handleAdministrar']);
Route::middleware([UserAuthentication::class])->post('/get/voluntario', [VoluntariosController::class, 'getVoluntario']);
// Route::middleware([UserAuthentication::class])->post('/auth/verificar',    [AuthController::class, 'verificar']);
Route::post('/catalogo/coordinaciones',     [CatalogosController::class, 'getCoordinaciones']);
Route::post('/catalogo/tiposUsuarios',      [CatalogosController::class, 'getTiposUsuarios']);
Route::post('/catalogo/estados',            [CatalogosController::class, 'getEstados']);
Route::post('/catalogo/tipoAsociado',       [CatalogosController::class, 'getTiposAsociado']);
Route::post('/catalogo/delegaciones',       [CatalogosController::class, 'getDelegacionesWithAreas']);
Route::post('/catalogo/nacionalidad',       [CatalogosController::class, 'getNacionalidad']);
Route::post('/catalogo/sexo',               [CatalogosController::class, 'getSexo']);
Route::post('/catalogo/tipoSangre',         [CatalogosController::class, 'getTipoSangre']);
Route::post('/catalogo/estadoCivil',         [CatalogosController::class, 'getEstadoCivil']);
Route::post('/valid/curp',                  [VoluntariosController::class, 'validCurp']);
Route::post('/catalogo/especial/delegaciones', [CatalogosController::class, 'delegacionesXTipoCoordinador']);

Route::middleware([UserAuthentication::class])->post('/generate/voluntarios', [VoluntariosController::class, 'generatePDFVoluntarios']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
