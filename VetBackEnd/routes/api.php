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
Route::apiResource('consultas', ConsultaController::class);
Route::apiResource('cirugias', CirugiaController::class);
Route::apiResource('tratamientos', TratamientoController::class);
Route::get('propietarios/{id}/mascotas', [PropietarioController::class, 'mascotas']);
Route::get('mascotas/{id}/Tratamiento',[TratamientoController::class, ]);
Route::get('/mascotas/{mascota}/reservaciones', [ReservacionController::class, 'porMascota']);
Route::get('/mascotas-count', [MascotaController::class, 'count']);
Route::get('/reservaciones-hoy-count', [ReservacionController::class, 'countHoy']);
Route::get('/reservaciones-pendientes-count', [ReservacionController::class, 'countPendientes']);
Route::get('/reservacionesTodas', [ReservacionController::class, 'todas']);
Route::post('/reservaciones', [ReservacionController::class, 'store']);
Route::patch('/reservaciones/{id}/confirmar', [ReservacionController::class, 'confirmar']);
Route::patch('/reservaciones/{id}/cancelar', [ReservacionController::class, 'cancelar']);

