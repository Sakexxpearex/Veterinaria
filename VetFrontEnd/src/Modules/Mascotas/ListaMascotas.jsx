export default function ListaMascotas({ mascotas }) {

  if (!mascotas || mascotas.length === 0) {
    return <p>Este propietario no tiene mascotas registradas.</p>;
  }

  return (
    <ul style={{ marginTop: "15px" }}>
      {mascotas.map((m) => (
        <li key={m.id}>
          <strong>{m.nombre}</strong> — {m.especie}
          {m.raza && ` (${m.raza})`}
          {m.edad && ` — ${m.edad} años`}
        </li>
      ))}
    </ul>
  );
}
