import { useEffect, useState } from "react"
import { getMascotas } from "../../Api/mascotas";
import { useNavigate } from "react-router-dom";


export default function ListaMascotas() {
    const [mascotas, setMascotas] = useState([])
    const navigate = useNavigate();

  useEffect(() => {
    cargarMascotas();
  }, []);

  async function cargarMascotas() {
    const dataMasc = await getMascotas();
    setMascotas(dataMasc);
  }

return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 text-left">Nombre</th>
            <th className="px-4 py-3 text-left">Especie</th>
            <th className="px-4 py-3 text-left">Raza</th>
            <th className="px-4 py-3 text-left">Edad</th>
            <th className="px-4 py-3 text-left">Propietario</th>
            <th className="px-4 py-3 text-left">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {mascotas.map((mascota) => (
            <tr key={mascota.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{mascota.nombre}</td>
              <td className="px-4 py-3">{mascota.especie}</td>
              <td className="px-4 py-3">{mascota.raza || "-"}</td>
              <td className="px-4 py-3">{mascota.edad ?? "-"}</td>
              <td className="px-4 py-3">
                {mascota.propietario?.nombre || "-"}
              </td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:underline">
                  Ver
                </button>
                <button
                  onClick={() => navigate(`/mascotas/${mascota.id}/reservar`)}
                  className="text-blue-600 hover:underline"
                >
                  Crear Reservación
                </button>
              </td>
            </tr>
          ))}

          {mascotas.length === 0 && (
            <tr>
              <td
                colSpan="6"
                className="px-4 py-6 text-center text-gray-500"
              >
                No hay mascotas registradas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
  


