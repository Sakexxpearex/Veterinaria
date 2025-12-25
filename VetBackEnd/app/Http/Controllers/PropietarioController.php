<?php

namespace App\Http\Controllers;

use App\Models\Propietario;
use Illuminate\Http\Request;

class PropietarioController extends Controller
{
    // Listar todos los propietarios
    public function index()
    {
        return response()->json(Propietario::with('mascota')->paginate(20));

    }

    // Crear un nuevo propietario
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'nullable|email',
            'telefono' => 'nullable|string|max:20',
        ]);

        $propietario = Propietario::create($request->all());

        return response()->json($propietario, 201);
    }

    // Mostrar un propietario específico
    public function show($id)
    {
        $propietario = Propietario::findOrFail($id);
        return response()->json($propietario);
    }

    // Actualizar un propietario
    public function update(Request $request, $id)
    {
        $propietario = Propietario::findOrFail($id);
        $propietario->update($request->all());

        return response()->json($propietario);
    }

    // Eliminar un propietario
    public function destroy($id)
    {
        $propietario = Propietario::findOrFail($id);
        $propietario->delete();

        return response()->json(['message' => 'Propietario eliminado']);
    }

    public function mascotas($id)
    {
        $propietario = Propietario::findOrFail($id);
        return response()->json(
            $propietario->mascotas()->orderBy('id','desc')->get()
        );
    }
}
