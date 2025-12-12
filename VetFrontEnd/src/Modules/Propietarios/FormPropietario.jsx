import { useState } from "react";

export default function FormPropietario({ onSubmit }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm({ nombre: "", telefono: "", email: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4"
    >
      <h2 className="text-lg font-semibold text-gray-700">
        Nuevo propietario
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
