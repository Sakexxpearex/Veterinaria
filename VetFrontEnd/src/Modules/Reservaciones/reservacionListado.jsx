import { useEffect, useState } from "react";
import { getReservaciones } from "../../Api/reservaciones";
import {
  confirmarReservacion,
  cancelarReservacion,
} from "../../Api/reservaciones";

export default function ReservacionListado() {
  const [reservaciones, setReservaciones] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    cargarReservaciones();
  }, []);

  async function cargarReservaciones() {
    const data = await getReservaciones();
    setReservaciones(data);
  }
  async function confirmar(id) {
    const actualizada = await confirmarReservacion(id);

    setReservaciones((prev) =>
      prev.map((r) => (r.id === actualizada.id ? actualizada : r))
    );
  }

  async function cancelar(id) {
    const actualizada = await cancelarReservacion(id);

    setReservaciones((prev) =>
      prev.map((r) => (r.id === actualizada.id ? actualizada : r))
    );
  }

  const hoy = new Date().toISOString().slice(0, 10);

  const reservacionesFiltradas = reservaciones.filter((r) => {
    if (filtro === "pendientes") {
      return r.estado === "pendiente";
    }

    if (filtro === "hoy") {
      return r.fecha?.startsWith(hoy);
    }

    return true;
  });

  return (
    <div className="mt-6">
      {/* Filtros */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFiltro("todas")}
          className={`px-4 py-2 rounded-md text-sm font-medium border
            ${
              filtro === "todas"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }
          `}
        >
          Todas
        </button>

        <button
          onClick={() => setFiltro("hoy")}
          className={`px-4 py-2 rounded-md text-sm font-medium border
            ${
              filtro === "hoy"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }
          `}
        >
          Hoy
        </button>

        <button
          onClick={() => setFiltro("pendientes")}
          className={`px-4 py-2 rounded-md text-sm font-medium border
            ${
              filtro === "pendientes"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }
          `}
        >
          Pendientes
        </button>
      </div>

      {/* Tabla */}
      {reservacionesFiltradas.length === 0 ? (
        <p className="text-gray-500 text-center mt-6">
          No hay reservaciones para este filtro.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Fecha
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Mascota
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Propietario
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Motivo
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Estado
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {reservacionesFiltradas.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">
                    {r.fecha}
                  </td>

                  <td className="px-4 py-3 text-gray-800">
                    {r.mascota?.nombre || "-"}
                  </td>

                  <td className="px-4 py-3 text-gray-800">
                    {r.propietario?.nombre || "-"}
                  </td>

                  <td className="px-4 py-3 text-gray-700">
                    {r.motivo}
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`text-sm px-2 py-1 rounded font-medium
                        ${
                          r.estado === "pendiente"
                            ? "bg-yellow-100 text-yellow-800"
                            : r.estado === "confirmada"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }
                      `}
                    >
                      {r.estado}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      {r.estado === "pendiente" && (
                        <>
                          <button
                            onClick={() => confirmar(r.id)}
                            className="text-sm px-3 py-1 rounded bg-green-100 text-green-700 hover:bg-green-200"
                          >
                            Confirmar
                          </button>

                          <button
                            onClick={() => cancelar(r.id)}
                            className="text-sm px-3 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200"
                          >
                            Cancelar
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
