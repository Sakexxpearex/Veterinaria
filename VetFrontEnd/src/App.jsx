import {Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./Modules/Layouts/MainLayout";
import Dashboard from "./Modules/Dashboard/Dashboard";
import PropietariosPage from "./Modules/Propietarios/PropietariosPage";
import MascotasPage from "./Modules/Mascotas/MascotasPage";
import ReservacionesPage from "./Modules/Reservaciones/ReservacionesPage";
import MascotasPorPropietario from "./Modules/Propietarios/MascotaPorPropietario";
import FormReservacion from "./Modules/Reservaciones/FormReservacion";
import MascotaDetalle from "./Modules/Mascotas/MascotaDetalle";
function App() {
  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/propietarios" element={<PropietariosPage />} />
          <Route path="/mascotas" element={<MascotasPage />} />
          <Route path="/reservaciones" element={<ReservacionesPage />} />
          <Route path="/propietarios/:id/mascotas" element={<MascotasPorPropietario />}/>
          <Route path="/mascotas/:id/reservar" element={<FormReservacion />}/>
          <Route path="/mascotas/:id/detalle" element={<MascotaDetalle />}/>
        </Route>
      </Routes>
  );
}

export default App;
