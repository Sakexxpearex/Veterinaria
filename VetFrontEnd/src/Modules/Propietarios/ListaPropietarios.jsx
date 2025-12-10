export default function ListaPropietarios({ propietarios, onDelete , onEdit , onVerDetalle }) {
  return (
    <ul>
      {propietarios.map((p) => (
        <li key={p.id}>
          {p.nombre} - {p.email} - {p.telefono}
          <button onClick={() => onDelete(p.id)}>Eliminar</button>
          <button onClick={() => onEdit(p)}>Editar</button>
          <button onClick={() => onVerDetalle(p.id)}>Ver mascotas</button>
        </li>
      ))}
    </ul>
  );
}
