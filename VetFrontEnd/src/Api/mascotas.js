import axios from "axios";

const API = "http://localhost:8000/api/mascotas";

// Obtener TODAS las mascotas (para el módulo Mascotas general)
export const getMascotas = async () => {
  const res = await axios.get(API);
  return res.data; // debe ser un array plano
};

// Crear una mascota
export const createMascota = async (data) => {
  const res = await axios.post(API, data);
  return res.data; // retorna la mascota creada
};

// Actualizar una mascota
export const updateMascota = async (id, data) => {
  const res = await axios.put(`${API}/${id}`, data);
  return res.data;
};

// Eliminar una mascota
export const deleteMascota = async (id) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};

// Obtener mascotas por propietario
export const getMascotasByPropietario = async (propietarioId) => {
  const res = await axios.get(
    `http://localhost:8000/api/propietarios/${propietarioId}/mascotas`
  );
  return res.data; // lista de mascotas del propietario
};

export const getMascotasCount = async () => {
  const res = await axios.get("http://localhost:8000/api/mascotas-count");
  return res.data;
};