import { useNavigate } from "react-router-dom";

export default function ListaPropietarios({
  propietarios,
  onDelete,
  onEdit,
}) {
  const navigate = useNavigate();

  if (!propietarios || propietarios.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-6">
        No hay propietarios registrados.
      </p>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
              Nombre
            </th>
            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
              Teléfono
            </th>
            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
              Email
            </th>
            <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          {propietarios.map((p) => (
            <tr
              key={p.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3 text-gray-800">
                {p.nombre}
              </td>
              <td className="px-4 py-3 text-gray-700">
                {p.telefono || "-"}
              </td>
              <td className="px-4 py-3 text-gray-700">
                {p.email || "-"}
              </td>

              <td className="px-4 py-3">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() =>
                      navigate(`/propietarios/${p.id}/mascotas`)
                    }
                    className="text-sm px-3 py-1 rounded bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                  >
                    Mascotas
                  </button>

                  <button
                    onClick={() => onEdit(p)}
                    className="text-sm px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => onDelete(p.id)}
                    className="text-sm px-3 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
