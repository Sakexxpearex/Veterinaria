import { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  const [propietarios, setPropietarios] = useState([]);

useEffect(() => {
  fetch('http://localhost:8000/api/propietarios')
    .then(r => r.json())
    .then(data => setPropietarios(data));
}, []);

  return (
    <div>
      <h1>Propietarios</h1>
      <ul>
        {propietarios.map((o) => (
          <li key={o.id}>{o.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
