<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Auth\Models\PersonalAccessToken;
use App\Http\Controllers\Auth\Resources\AuthResources;
use App\Http\Controllers\Auth\Resources\UserResource;
use App\Http\Controllers\Auth\Models\User;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Carbon\Carbon;
use DateTime;

class AuthController extends Controller{
    /**
     * Create User
     * @param Request $request
     * @return User
     */
    public function newPass(){


        return response()->json([
            'status' => true,
            'message' => Hash::make('demo123'),
        ], 200);
    }
    public function createUser(Request $request){
        try {
            //Validated
            $validateUser = Validator::make($request->all(),
            [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Login The User
     * @param Request $request
     * @return User
     */
    public function loginUser(Request $request){
        $parametros = $request->all();
        $response = BaseController::response();
        try {
            $filtros = [
                'email' => $parametros['email']
            ];
            $users = $this->listarWithFiltros(new User,$filtros);
            
            if ($users->count() == 1) { // Verifica si hay exactamente un usuario
                $userInDB = $users->first(); // Obtén el primer usuario de la colección
                $user = new UserResource($userInDB); // Crea una instancia de UserResource con el usuario

                $tokenCreated = $userInDB->createToken("API TOKEN")->plainTextToken;
                [$id, $token] = explode('|', $tokenCreated, 2);

                // Modifica los valores del modelo User original
                $userInDB->token = $token;
                $userInDB->save();

                $tokenBD = PersonalAccessToken::find($id);
                $tokenBD->expires_at = now()->addMinutes(180);
                $tokenBD->tokenFront = $tokenCreated;
                $tokenBD->save();


                $data = [
                    'user' => $user,
                    'token' => $token
                ];

                $response['result'] = true;
                $response['data'] = $data;
                $response['message'] = 'User Logged In Successfully';
            } else {
                return response()->json([
                    'status'  => false,
                    'message' => 'No existe el usuario'
                ], 500);
            }
            return response()->json($response, 200);
        } catch (\PDOException $exception) {
            return response()->json([
                'status'  => false,
                'message' => 'Error de base de datos: ' . $exception->getMessage()
            ], 500);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function detailsUser(Request $request){
        $payload = $request->all();
        $token = $payload['token'];
        [$id, $token] = explode('|', $token, 2);
    }
    
    public function verificar(Request $request){
        $response = BaseController::response();
        try {
            $payload = $request->all();
            $token = $payload['tk'] ?? null;
            $response['data'] = AuthResources::validateSession($token);
            return response()->json($response, 200);
        } catch (\PDOException $exception) {
            return response()->json([
                'status'  => false,
                'message' => 'Error de base de datos: ' . $exception->getMessage()
            ], 500);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
