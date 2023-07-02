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
        $response['message'] = 'Sin autorizaci贸n';
        $headers = getallheaders();  
        $tk = isset($headers['Tk']) ? $headers['Tk'] : (isset($headers['tk']) ? $headers['tk'] :  null);
        if($tk != null  && AuthResources::validateSession($tk)){
            return $next($request);
        }
        return response()->json($response);
    }
}
