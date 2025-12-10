import { useEffect, useState } from "react";
import { getPropietario, getMascotasByPropietario } from "../../Api/propietarios";
import { createMascota } from "../../api/mascotas";
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
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      
      <button onClick={onVolver}>Volver</button>

      <h2>Propietario: {propietario.nombre}</h2>
      <p>Email: {propietario.email}</p>
      <p>Teléfono: {propietario.telefono}</p>

      <h3>Mascotas</h3>

      <button onClick={() => setAgregando(!agregando)}>
        {agregando ? "Cerrar formulario" : "Agregar Mascota"}
      </button>

      {agregando && (
        <FormMascota onSubmit={agregarMascota} />
      )}

      <ListaMascotas mascotas={mascotas} />

    </div>
  );
}
