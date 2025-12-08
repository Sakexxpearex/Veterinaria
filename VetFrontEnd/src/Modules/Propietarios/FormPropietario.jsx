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
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <button>Guardar</button>
    </form>
  );
}
