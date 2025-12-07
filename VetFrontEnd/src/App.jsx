import { useEffect, useState } from "react";
import { api } from "./api";
import axios from "axios";
function App() {
  const [propietarios, setPropietarios] = useState([]);
  const [form, setForm] = useState({
  nombre: "",
  email: "",
  telefono: "",
  });

useEffect(() => {
  async function fetchData() {
    try {
      const res = await axios.get('http://localhost:8000/api/propietarios');
      setPropietarios(res.data); 
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  fetchData();
  
}, []);

  async function handleSubmit(e) {
  e.preventDefault();
  try {
    const res=await axios.post("http://localhost:8000/api/propietarios", form);
    setPropietarios([...propietarios,res.data]); 
    setForm({ nombre: "", telefono: "", email: "" });
  } catch (error) {
    console.error(error);
  }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form)
  }


  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={form.nombre} placeholder="Nombre" onChange={handleChange} />
      <input name="telefono" value={form.telefono} placeholder="Teléfono" onChange={handleChange} type="number"  />
      <input name="email" value={form.email} placeholder="Email" onChange={handleChange} />
      
      <button type="submit">Guardar</button>
    </form>
    </div>
    <div>
      <h1>Propietarios</h1>
      <ul>
        {propietarios.map((o) => (
          <li key={o.id}> {o.nombre} {o.email} {o.telefono}</li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
