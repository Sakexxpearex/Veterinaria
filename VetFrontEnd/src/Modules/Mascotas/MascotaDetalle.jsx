import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMascotaById } from "../../Api/mascotas";

export default function MascotaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mascota, setMascota] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarMascota();
  }, []);

  async function cargarMascota() {
    try {
      const data = await getMascotaById(id);
      setMascota(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p className="text-gray-500">Cargando ficha...</p>;
  }

  if (!mascota) {
    return <p className="text-red-500">Mascota no encontrada</p>;
  }

  return (

    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Ficha de {mascota.nombre}
        </h1>
      {console.log(mascota)}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-blue-600 hover:underline"
        >
          Volver
        </button>
      </div>

      {/* Datos básicos */}
      <div className="bg-white border rounded-lg p-4 grid grid-cols-2 gap-4">
        <p><span className="font-medium">Especie:</span> {mascota.especie}</p>
        <p><span className="font-medium">Raza:</span> {mascota.raza || "-"}</p>
        <p><span className="font-medium">Edad:</span> {mascota.edad} años</p>
        <p>
          <span className="font-medium">Propietario:</span>{" "}
          {mascota.propietario?.nombre}
        </p>
      </div>

      {/* Historial de reservaciones */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Historial de reservaciones
        </h2>

        {mascota.reservaciones?.length === 0 ? (
          <p className="text-gray-500">
            Esta mascota no tiene reservaciones registradas.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm">Fecha</th>
                  <th className="px-4 py-2 text-left text-sm">Motivo</th>
                  <th className="px-4 py-2 text-left text-sm">Estado</th>
                </tr>
              </thead>

              <tbody>
                {mascota.reservaciones?.map((r) => (
                  <tr key={r.id} className="border-t">
                    <td className="px-4 py-2">{r.fecha}</td>
                    <td className="px-4 py-2">{r.motivo}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 text-xs rounded-full
                          ${
                            r.estado === "confirmada"
                              ? "bg-green-100 text-green-700"
                              : r.estado === "cancelada"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {r.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
