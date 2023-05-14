<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Auth\Models\PersonalAccessToken;
use App\Http\Controllers\Auth\Resources\AuthResources;
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
        $response = BaseController::response();
        try {
            $validateUser = Validator::make($request->all(),
            [
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                $response['message'] = 'validation error';
                $response['data']    = $validateUser->errors();
                return response()->json($response, 200);
            }

            if(!Auth::attempt($request->only(['email', 'password']))){
                $response['message'] = 'Email & Password does not match with our record.';
                return response()->json($response, 200);
            }

            $user = User::where('email', $request->email)->first();
            $tokenCreated  = $user->createToken("API TOKEN")->plainTextToken;
            [$id, $token] = explode('|', $tokenCreated, 2);
            $user->token = $token;
            $user->save();
            $tokenBD = PersonalAccessToken::find($id);
            $tokenBD->expires_at =  now()->addMinute(180);
            // $tokenBD->expires_at =  now()->addMinute(2);  // Se agregan 3 horas en minutos.
            // $tokenBD->expires_at =  now()->addSecond(5);  // Se agregan 3 horas en minutos.☻
            $tokenBD->tokenFront =  $tokenCreated;
            $tokenBD->save();
            $data = array(
                'user'  => $user,
                'token' =>  $token
            );
            $user->role = 'admin';
            $user->ability = [
                array(
                  "action"  => "manage",
                  "subject" => "all"
                )
            ];
            $response['result']    = true;
            $response['data']      = $data;
            $response['message']      =  'User Logged In Successfully';
            return response()->json($response, 200);
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
        // if (strpos($token, '|') === false) {
        //     return $user->tokens()-where('token', hash('sha256', $token))->first();
        // }

        [$id, $token] = explode('|', $token, 2);

        // // $tmp =
        // $tmp = $user->currentAccessToken()->plainTextToken;
        // dd($tmp);
    }
    public function verificar(Request $request){
        $response = BaseController::response();
        $payload = $request->all();
        $token = $payload['tk'] ?? null;
        $response['data'] = AuthResources::validateSession($token);
        return response()->json($response, 200);
    }
}
