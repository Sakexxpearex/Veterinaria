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
import PropietarioDetalle from "./PropietarioDetalle";

export default function PropietariosPage() {
  const [propietarios, setPropietarios] = useState([]);
  const [editando, setEditando] = useState(null);
  const [propietarioSeleccionado, setPropietarioSeleccionado] = useState(null);

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
      propietarios.map((p) => (p.id === data.id ? actualizado : p))
    );

    setEditando(null);
  }

return (
  <>
    {propietarioSeleccionado ? (
      <PropietarioDetalle
        id={propietarioSeleccionado}
        onVolver={() => setPropietarioSeleccionado(null)}
      />
    ) : (
      <div>
        <h1>Propietarios</h1>

        {editando ? (
          <EditPropietario
            propietario={editando}
            onUpdate={actualizar}
            onCancel={() => setEditando(null)}
          />
        ) : (
          <FormPropietario onSubmit={agregar} />
        )}

        <ListaPropietarios
          propietarios={propietarios}
          onDelete={eliminar}
          onEdit={(p) => setEditando(p)}
          onVerDetalle={(id) => setPropietarioSeleccionado(id)}
        />
      </div>
    )}
  </>
);

}
