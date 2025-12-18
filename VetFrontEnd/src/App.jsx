import { Routes, Route, Navigate } from "react-router-dom";
import PropietariosPage from "./Modules/Propietarios/PropietariosPage";
import MascotaDetalle from "./Modules/Mascotas/MascotaDetalle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/propietarios" />} />
      <Route path="/propietarios" element={<PropietariosPage />} />
      <Route path="/mascotas/:id" element={<MascotaDetalle />} />
    </Routes>
  );
}

export default App;
