import { useEffect, useState } from "react";
import { 
  getPropietarios, 
  createPropietario, 
  deletePropietario,
  updatePropietario
} from "../../Api/propietarios";
import FormPropietario from "./FormPropietario";
import ListaPropietarios from "./ListaPropietarios";
import EditPropietario from "./Editar Propietario";
import FormMascota from "../Mascotas/FormMascota";

export default function PropietariosPage() {
  const [propietarios, setPropietarios] = useState([]);
  const [editando, setEditando] = useState(null);
  const [agregarMascota, setAgregarMascota] = useState(null); 
  // null = no agregando
  // objeto propietario = agregando mascota a ese propietario

  useEffect(() => {
    cargar();
  }, []);

  async function cargar() {
    const data = await getPropietarios();
    setPropietarios(data.data);
  }

  async function agregar(data) {
    const nuevo = await createPropietario(data);
    setPropietarios([...propietarios, nuevo]);
  }

  async function eliminar(id) {
    await deletePropietario(id);
    setPropietarios(propietarios.filter(p => p.id !== id));
  }

  async function actualizar(data) {
    const actualizado = await updatePropietario(data.id, data);
    setPropietarios(
      propietarios.map(p => (p.id === data.id ? actualizado : p))
    );
    setEditando(null);
  }

  return (
    <div>
      {/* FORMULARIOS */}
      {editando && (
        <EditPropietario
          propietario={editando}
          onUpdate={actualizar}
          onCancel={() => setEditando(null)}
        />
      )}

      {agregarMascota && (
        <>
          <h2 className="text-lg font-semibold mb-2">
            Nueva mascota para {agregarMascota.nombre}
          </h2>

          <FormMascota
            propietarioId={agregarMascota.id}
            onSubmit={() => setAgregarMascota(null)}
          />

          <button
            onClick={() => setAgregarMascota(null)}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            ← Volver a propietarios
          </button>
        </>
      )}

      {!editando && !agregarMascota && (
        <FormPropietario onSubmit={agregar} />
      )}

      {/* LISTA */}
      {!agregarMascota && (
        <ListaPropietarios
          propietarios={propietarios}
          onDelete={eliminar}
          onEdit={(p) => setEditando(p)}
          onAgregarMascota={(p) => setAgregarMascota(p)}
        />
      )}
    </div>
  );
}
