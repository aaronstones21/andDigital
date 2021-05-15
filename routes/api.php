<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrdersController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/athenticated', function () {
    return true;
});

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LoginController::class, 'logout']);
Route::post('products/add/{product}', [ProductController::class, 'store']);
Route::delete('products/empty', [ProductController::class, 'destroy']);


Route::post('orders/create/{price}', [OrdersController::class, 'store']);

Route::get('orders/get', [OrdersController::class, 'show']);

Route::get('products/get', [ProductController::class, 'show']);

Route::patch('products/update', [ProductController::class, 'update']);

Route::delete('products/delete/{product}', [ProductController::class, 'delete']);

Route::patch('products/create', [ProductController::class, 'create']);
