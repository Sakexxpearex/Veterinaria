<?php

namespace App\Http\Controllers;

use App\Models\Mascota;
use Illuminate\Http\Request;

class MascotaController extends Controller
{
    public function index()
    {
        return response()->json(
            Mascota::with('propietario')->get()
        );
    }


    public function store(Request $request)
    {
        $request->validate([
            'propietario_id' => 'required|exists:propietarios,id',
            'nombre' => 'required|string|max:255',
            'especie' => 'required|string|max:50',
            'raza' => 'nullable|string|max:50',
            'edad' => 'nullable|integer',
        ]);

        $mascota = Mascota::create($request->all());
        return response()->json($mascota, 201);
    }

    public function show($id)
    {
        $mascota = Mascota::findOrFail($id);
        return response()->json($mascota);
    }

    public function update(Request $request, $id)
    {
        $mascota = Mascota::findOrFail($id);
        $mascota->update($request->all());
        return response()->json($mascota);
    }

    public function destroy($id)
    {
        $mascota = Mascota::findOrFail($id);
        $mascota->delete();
        return response()->json(['message' => 'Mascota eliminada']);
    }

    public function count()
    {
    return response()->json(
        Mascota::count()
    );
    }
}
