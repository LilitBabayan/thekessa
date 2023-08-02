<?php

use App\Http\Controllers\PaymentController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/email/verify/{id}/{hash}', function (Illuminate\Foundation\Auth\EmailVerificationRequest $request) {

    $request->fulfill();
    return redirect('/');
})->middleware(['auth', 'signed'])->name('verification.verify');


Route::get('/payment/success', [PaymentController::class, 'success']);
Route::get('/payment/failure', [PaymentController::class, 'fail']);
Route::post('/payment/result', [PaymentController::class, 'getResult']);

Route::view('/{path?}', 'index')->where('path', '^((?!api).)*');


Auth::routes();

