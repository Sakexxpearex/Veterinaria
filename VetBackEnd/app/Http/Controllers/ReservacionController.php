<?php

namespace App\Http\Controllers;

use App\Models\Reservacion;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Mascota;
class ReservacionController extends Controller
{
    public function index()
    {
        return response()->json(
            Reservacion::with(['mascota', 'propietario'])->get()
        );
    }

public function store(Request $request)
{
    $request->validate([
        'mascota_id' => 'required|exists:mascotas,id',
        'fecha' => 'required|date',
        'motivo' => 'required|string|max:255',
    ]);

    $mascota = Mascota::findOrFail($request->mascota_id);

    $reservacion = Reservacion::create([
        'mascota_id' => $mascota->id,
        'propietario_id' => $mascota->propietario_id,
        'fecha' => $request->fecha,
        'motivo' => $request->motivo,
        'estado' => 'pendiente',
    ]);

    return response()->json($reservacion, 201);
}

    public function show($id)
    {
        $reservacion = Reservacion::findOrFail($id);
        return response()->json($reservacion);
    }

    public function update(Request $request, $id)
    {
        $reservacion = Reservacion::findOrFail($id);
        $reservacion->update($request->all());
        return response()->json($reservacion);
    }

    public function destroy($id)
    {
        $reservacion = Reservacion::findOrFail($id);
        $reservacion->delete();
        return response()->json(['message' => 'Reservación eliminada']);
    }
        public function countHoy()
    {
        $hoy = Carbon::today()->toDateString();

        $total = Reservacion::whereDate('fecha', $hoy)->count();

        return response()->json($total);
    }

    public function countPendientes()
    {
        $total = Reservacion::where('estado', 'pendiente')->count();

        return response()->json($total);
    }

    public function confirmar($id)
    {
        $reservacion = Reservacion::findOrFail($id);
        $reservacion->estado = 'confirmada';
        $reservacion->save();

        return response()->json(
            $reservacion->load(['mascota', 'propietario'])
        );
    }

    public function cancelar($id)
    {
        $reservacion = Reservacion::findOrFail($id);
        $reservacion->estado = 'cancelada';
        $reservacion->save();

        return response()->json(
            $reservacion->load(['mascota', 'propietario'])
        );
    }

}
