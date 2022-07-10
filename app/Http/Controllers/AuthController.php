<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResources;
use App\Models\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Validator as ValidationValidator;

class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {
        $validated = $request->all();
        if (!Auth::attempt($validated)) {
            throw ValidationException::withMessages([
                'message_noterror' => ['The provided credentials are incorrect. '],
            ]);
        }
        $user = $request->user();

        $token = $user->createToken('access-token')->plainTextToken;

        return response()->json([
            'user' => new UserResources(Auth::user()),
            'access_token' => $token,
            'message' => 'Login Success!'


        ], 200);
    }
    public function logout()
    {
        return Auth::logout();
    }
    public function user(Request $request)
    {

        return response()->json([
            'user' => new UserResources($request->user())
        ]);
    }
}