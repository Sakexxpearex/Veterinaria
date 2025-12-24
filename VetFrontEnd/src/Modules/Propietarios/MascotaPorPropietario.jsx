import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMascotasByPropietario, createMascota } from "../../Api/mascotas";
import FormMascota from "../Mascotas/FormMascota";

export default function MascotasPorPropietario() {
  const { id } = useParams(); // id del propietario
  const navigate = useNavigate();

  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mostrarForm, setMostrarForm] = useState(false);

  useEffect(() => {
    cargarMascotas();
  }, [id]);

  async function cargarMascotas() {
    setLoading(true);
    const data = await getMascotasByPropietario(id);
    setMascotas(data);
    setLoading(false);
  }

  async function agregarMascota(data) {
    await createMascota({
      ...data,
      propietario_id: id,
    });

    setMostrarForm(false);
    cargarMascotas(); // refresca la lista
  }

  if (loading) {
    return <p>Cargando mascotas...</p>;
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          Mascotas del propietario
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="text-sm text-blue-600 hover:underline"
        >
          ← Volver
        </button>
      </div>

      {/* Botón agregar */}
      <button
        onClick={() => setMostrarForm(!mostrarForm)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Agregar Mascota
      </button>

      {/* Formulario */}
      {mostrarForm && (
        <FormMascota onSubmit={agregarMascota} />
      )}

      {/* Tabla */}
      <div className="bg-white border border-gray-200 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Especie</th>
              <th className="px-4 py-2 text-left">Raza</th>
              <th className="px-4 py-2 text-left">Edad</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {mascotas.map((m) => (
              <tr key={m.id}>
                <td className="px-4 py-2">{m.nombre}</td>
                <td className="px-4 py-2">{m.especie}</td>
                <td className="px-4 py-2">{m.raza || "-"}</td>
                <td className="px-4 py-2">{m.edad ?? "-"}</td>
              </tr>
            ))}

            {mascotas.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="px-4 py-6 text-center text-gray-500"
                >
                  Este propietario no tiene mascotas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
