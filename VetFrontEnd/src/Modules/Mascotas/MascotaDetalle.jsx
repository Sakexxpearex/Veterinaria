import { useParams } from "react-router-dom";

export default function MascotaDetalle() {
  const { id } = useParams();

  return (
    <div>
      <h1>Ficha de la Mascota</h1>
      <p>ID mascota: {id}</p>
    </div>
  );
}
