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
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={form.nombre} onChange={handleChange} />
      <input name="telefono" value={form.telefono} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />

      <button type="submit">Guardar cambios</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}
