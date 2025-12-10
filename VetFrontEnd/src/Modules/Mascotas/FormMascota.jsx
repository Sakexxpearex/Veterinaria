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

    // Enviamos el formulario al componente padre
    onSubmit(form);

    // Limpiar campos
    setForm({
      nombre: "",
      especie: "",
      raza: "",
      edad: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>

      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        required
      />

      <input
        name="especie"
        placeholder="Especie"
        value={form.especie}
        onChange={handleChange}
        required
      />

      <input
        name="raza"
        placeholder="Raza"
        value={form.raza}
        onChange={handleChange}
      />

      <input
        name="edad"
        placeholder="Edad"
        type="number"
        value={form.edad}
        onChange={handleChange}
      />

      <button type="submit">Guardar Mascota</button>
    </form>
  );
}
