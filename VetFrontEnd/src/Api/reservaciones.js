import axios from "axios";

export const getReservaciones = async () => {
  const res = await axios.get(
    "http://localhost:8000/api/reservaciones"
  );
  return res.data;
};

export const getReservacionesHoy = async () => {
  const res = await axios.get(
    "http://localhost:8000/api/reservaciones-hoy-count"
  );
  return Number(res.data);
};

export const getReservacionesPendientes = async () => {
  const res = await axios.get(
    "http://localhost:8000/api/reservaciones-pendientes-count"
  );
  return Number(res.data);
};
