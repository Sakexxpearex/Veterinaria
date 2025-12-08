export default function ListaPropietarios({ propietarios, onDelete }) {
  return (
    <ul>
      {propietarios.map((p) => (
        <li key={p.id}>
          {p.nombre} - {p.email} - {p.telefono}
          <button onClick={() => onDelete(p.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}
