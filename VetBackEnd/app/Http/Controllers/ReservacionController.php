<?php

namespace App\Http\Controllers;

use App\Models\Reservacion;
use Illuminate\Http\Request;
use Carbon\Carbon;
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
            'propietario_id' => 'required|exists:propietarios,id',
            'mascota_id' => 'required|exists:mascotas,id',
            'fecha' => 'required|date',
            'motivo' => 'required|string|max:255',
            'estado' => 'nullable|string|in:pendiente,completado,cancelado',
        ]);

        $reservacion = Reservacion::create($request->all());
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
}
