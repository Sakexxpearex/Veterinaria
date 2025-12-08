import axios from "axios";

const API = "http://localhost:8000/api/propietarios";

export const getPropietarios = () => axios.get(API).then(res => res.data);

export const createPropietario = (data) =>
  axios.post(API, data).then(res => res.data);

export const updatePropietario = (id, data) =>
  axios.put(`${API}/${id}`, data).then(res => res.data);

export const deletePropietario = (id) =>
  axios.delete(`${API}/${id}`).then(res => res.data);

export const getMascotasByPropietario = (id) =>
  axios.get(`${API}/${id}/mascotas`).then(res => res.data);
