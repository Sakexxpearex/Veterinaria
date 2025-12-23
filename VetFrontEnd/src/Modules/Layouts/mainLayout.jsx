import { NavLink, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={asideStyle}>
        <h2 style={{ padding: "16px" }}>Veterinaria</h2>

        <nav>
          <NavLink to="/dashboard" style={linkStyle}>
            Dashboard
          </NavLink>
          <NavLink to="/propietarios" style={linkStyle}>
            Propietarios
          </NavLink>
          <NavLink to="/mascotas" style={linkStyle}>
            Mascotas
          </NavLink>
          <NavLink to="/reservaciones" style={linkStyle}>
            Reservaciones
          </NavLink>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "24px" }}>
        <Outlet />
      </main>
    </div>
  );
}

const asideStyle = {
  width: "220px",
  background: "#1f2937",
  color: "white",
};

const linkStyle = ({ isActive }) => ({
  display: "block",
  padding: "12px 16px",
  color: isActive ? "#60a5fa" : "white",
  textDecoration: "none",
});
