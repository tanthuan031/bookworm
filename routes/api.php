<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\Category;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReviewController;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


// Route::get('/user', function (Request $request) {
//     return $request;
// });
//Limit visible element:-> only index and show
//Route::resource('/books', BookController::class)->only('index','show');

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'user'])->middleware('auth:sanctum');
    // Route::post('order',[OrderController::class, 'order'])->middleware(('auth:sanctum'));

});
Route::post('order', [OrderController::class, 'store'])->middleware('auth:sanctum');
Route::resource('/books', BookController::class);
Route::resource('/categories', CategoryController::class);
Route::resource('/author', AuthorController::class);
Route::resource('/review', ReviewController::class);