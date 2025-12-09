export default function ListaPropietarios({ propietarios, onDelete , onEdit }) {
  return (
    <ul>
      {propietarios.map((p) => (
        <li key={p.id}>
          {p.nombre} - {p.email} - {p.telefono}
          <button onClick={() => onDelete(p.id)}>Eliminar</button>
          <button onClick={() => onEdit(p)}>Editar</button>
        </li>
      ))}
    </ul>
  );
}
