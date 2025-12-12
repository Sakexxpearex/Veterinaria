import { useState } from "react";

export default function EditPropietario({ propietario, onUpdate, onCancel }) {
  const [form, setForm] = useState(propietario);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(form);
  }

return (
  <form
    onSubmit={handleSubmit}
    className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-4"
  >
    <h2 className="text-lg font-semibold text-gray-700">
      Editar propietario
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />

      <input
        name="telefono"
        value={form.telefono}
        onChange={handleChange}
        placeholder="Teléfono"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>

    <div className="flex justify-end gap-3">
      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
      >
        Cancelar
      </button>

      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-yellow-600 text-white hover:bg-yellow-700"
      >
        Actualizar
      </button>
    </div>
  </form>
);

}
