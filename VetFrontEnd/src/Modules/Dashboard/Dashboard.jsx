import { getMascotasCount } from "../../Api/mascotas";
import { getReservacionesHoy , getReservacionesPendientes } from "../../Api/reservaciones";
import { useState , useEffect } from "react";


const Dashboard = () =>{
const [totalMascotas, setTotalMascotas] = useState(0);
const [reservaciones,setReservaciones] = useState(0)
const [pendientes , setPendientes] = useState(0)
  useEffect(() => {
    const fetchCount = async () => {
      const count = await getMascotasCount();
      console.log("reservaciones hoy:", count);
      setTotalMascotas(count);
    };

    fetchCount();
  }, []);

    useEffect(() => {
    const fetchCount = async () => {
      const count = await getReservacionesHoy();
      console.log("reservaciones hoy:", count);
      setReservaciones(count);
    };

    fetchCount();
  }, []);

    useEffect(() => {
    const fetchCount = async () => {
    const count = await getReservacionesPendientes();
    console.log("reservaciones hoy:", count);
    setPendientes(count);
    };

    fetchCount();
  }, []);



return (
    <>
  <div>
    <h2>Total de mascotas</h2>
    <p>{totalMascotas}</p>
  </div>
  <div>
    <h2>Reservaciones de hoy</h2>
    <p>{reservaciones}</p>
  </div>
  <div>
    <h2>Reservaciones pendientes</h2>
    <p>{pendientes}</p>
  </div>
  </>
);

}

export default Dashboard;