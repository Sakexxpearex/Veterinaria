import { useEffect, useState } from "react";
import { getPropietario, getMascotasByPropietario } from "../../Api/propietarios";
import { createMascota } from "../../Api/mascotas";
import ListaMascotas from "../Mascotas/ListaMascotas";
import FormMascota from "../mascotas/FormMascota";

export default function PropietarioDetalle({ id, onVolver }) {
  
  const [propietario, setPropietario] = useState(null);
  const [mascotas, setMascotas] = useState([]);
  const [agregando, setAgregando] = useState(false);

  useEffect(() => {
    cargarDatos();
  }, []);

  async function cargarDatos() {
    const dataProp = await getPropietario(id);
    const dataMasc = await getMascotasByPropietario(id);

    setPropietario(dataProp);
    setMascotas(dataMasc);
  }

  async function agregarMascota(formData) {
    // Insertamos el propietario_id antes de enviar
    const nueva = await createMascota({
      ...formData,
      propietario_id: propietario.id,
    });

    setMascotas([...mascotas, nueva]);
    setAgregando(false);
  }

  if (!propietario) return <p>Cargando propietario...</p>;

return (
  <div className="space-y-6">

    <button
      onClick={onVolver}
      className="text-sm text-blue-600 hover:underline"
    >
      ← Volver a propietarios
    </button>

    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <h2 className="text-2xl font-bold text-gray-800">
        {propietario.nombre}
      </h2>

      <p className="text-gray-600 mt-1">
        {propietario.email || "Sin email"} ·{" "}
        {propietario.telefono || "Sin teléfono"}
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Mascotas
        </h3>

        <button
          onClick={() => setAgregando(!agregando)}
          className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
        >
          {agregando ? "Cancelar" : "Agregar mascota"}
        </button>
      </div>

      {agregando && (
        <div className="mb-4">
          <FormMascota onSubmit={agregarMascota} />
        </div>
      )}

      <ListaMascotas mascotas={mascotas} />
    </div>

  </div>
);

}
