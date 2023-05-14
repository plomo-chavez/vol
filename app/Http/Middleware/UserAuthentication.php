<?php

namespace App\Http\Middleware;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Auth\Resources\AuthResources;
use Closure;
use Illuminate\Http\Request;

class UserAuthentication{
    public function handle(Request $request, Closure $next)
    {
        $response = BaseController::response();
        $response['result']  = 'SinAutorizacion';
        $response['message'] = 'Sin autorización';
        $headers = getallheaders();  
        if(isset($headers['tk'])){
            $token = $headers['tk'];
            // if(false){
            if(AuthResources::validateSession($token)){
                return $next($request);
            }
        }
        return response()->json($response);
    }
}
