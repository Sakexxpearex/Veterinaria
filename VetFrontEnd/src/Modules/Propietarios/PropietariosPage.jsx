import { useEffect, useState } from "react";
import { 
  getPropietarios, 
  createPropietario, 
  deletePropietario 
} from "../../Api/propietarios";
import FormPropietario from "./FormPropietario";
import ListaPropietarios from "./ListaPropietarios";

export default function PropietariosPage() {
  const [propietarios, setPropietarios] = useState([]);

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
  
  return (
    <div>
      <h1>Propietarios</h1>

      <FormPropietario onSubmit={agregar} />

      <ListaPropietarios 
        propietarios={propietarios}
        onDelete={eliminar}
      />
    </div>
  );
}
