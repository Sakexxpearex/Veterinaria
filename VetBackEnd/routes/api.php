<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropietarioController;
use App\Http\Controllers\MascotaController;
use App\Http\Controllers\ReservacionController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('propietarios', PropietarioController::class);
Route::apiResource('mascotas', MascotaController::class);
Route::apiResource('reservaciones', ReservacionController::class);
Route::get('propietarios/{id}/mascotas', [PropietarioController::class, 'mascotas']);