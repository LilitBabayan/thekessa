<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/products', [ProductController::class, 'index']);
Route::get('/product/{id}', [ProductController::class, 'getProduct']);


Route::post('/auth/register', [\App\Http\Controllers\Api\AuthController::class, 'createUser']);
Route::post('/auth/login', [\App\Http\Controllers\Api\AuthController::class, 'loginUser']);


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/user', function (Request $request) {
        return $request->user();
    });
});

