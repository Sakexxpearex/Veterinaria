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


export const createReservacion = async (data) => {
  const res = await axios.post(
    "http://localhost:8000/api/reservaciones",
    data
  );
  return res.data;
};

export const confirmarReservacion = async (id) => {
  const res = await axios.patch(
    `http://localhost:8000/api/reservaciones/${id}/confirmar`
  );
  return res.data;
};

export const cancelarReservacion = async (id) => {
  const res = await axios.patch(
    `http://localhost:8000/api/reservaciones/${id}/cancelar`
  );
  return res.data;
};