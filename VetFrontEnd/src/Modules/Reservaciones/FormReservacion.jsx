import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createReservacion } from "../../Api/reservaciones";

export default function FormReservacion() {
  const { id } = useParams(); // id de la mascota
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fecha: "",
    motivo: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await createReservacion({
      mascota_id: id,
      fecha: form.fecha,
      motivo: form.motivo,
    });

    navigate(-1); // volver a la pantalla anterior
  }

  return (
    <div className="max-w-lg bg-white border rounded-lg p-6">
      <h1 className="text-lg font-semibold mb-4">
        Crear reservación
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          required
        />

        <input
          type="text"
          name="motivo"
          value={form.motivo}
          onChange={handleChange}
          placeholder="Motivo"
          className="w-full border rounded-md p-2"
          required
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-gray-600 hover:underline"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
