import { Routes, Route } from "react-router-dom";
import Dashboard from "./Modules/Dashboard/Dashboard";
import PropietariosPage from "./Modules/Propietarios/PropietariosPage";
import PropietarioDetalle from "./Modules/Propietarios/PropietarioDetalle";
import MascotasPage from "./Modules/Mascotas/MascotasPage";
import MascotaDetalle from "./Modules/Mascotas/MascotaDetalle";

export default function App() {
  return (
    <Routes>
      {/* Dashboard como raíz */}
      <Route path="/" element={<Dashboard />} />

      {/* Propietarios */}
      <Route path="/propietarios" element={<PropietariosPage />} />
      <Route path="/propietarios/:id" element={<PropietarioDetalle />} />

      {/* Mascotas */}
      <Route path="/mascotas" element={<MascotasPage />} />
      <Route path="/mascotas/:id" element={<MascotaDetalle />} />
    </Routes>
  );
}
