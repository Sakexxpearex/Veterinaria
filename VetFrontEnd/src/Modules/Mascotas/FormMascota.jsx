import { useState } from "react";

export default function FormMascota({ onSubmit }) {
  const [form, setForm] = useState({
    nombre: "",
    especie: "",
    raza: "",
    edad: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm({
      nombre: "",
      especie: "",
      raza: "",
      edad: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4"
    >
      <h2 className="text-lg font-semibold text-gray-700">
        Nueva mascota
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="especie"
          placeholder="Especie"
          value={form.especie}
          onChange={handleChange}
          required
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="raza"
          placeholder="Raza"
          value={form.raza}
          onChange={handleChange}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="edad"
          placeholder="Edad"
          type="number"
          value={form.edad}
          onChange={handleChange}
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Guardar Mascota
        </button>
      </div>
    </form>
  );
}
