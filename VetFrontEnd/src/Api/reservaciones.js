import axios from "axios";



export const getReservacionesHoy = async () => {
  const res = await axios.get(
    "http://localhost:8000/api/reservaciones-hoy-count"
  );
  return res.data;
};

