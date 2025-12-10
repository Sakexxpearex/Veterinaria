import FormMascota from './FormMascota'
import ListaMascotas from './ListaMascotas'


export const MascotasPage = () =>{
    return(
        <>
        <h1>Mascotas</h1>
        <FormMascota></FormMascota>
        
        <h2>Lista Mascotas</h2>
        <ListaMascotas></ListaMascotas>

        </>
    )
}