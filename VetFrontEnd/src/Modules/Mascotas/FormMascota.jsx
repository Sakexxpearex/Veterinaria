import { useState } from "react"


export const FormMascota = () =>{
    [form, setForm] = useState({
    nombre = '' ,
    especie ='' ,
    raza = '',
    sexo = '',
    edad = '',
    peso = ''
    })

    return(
        <>
            <form onSubmit={handleSubmit}>
            <input name="nombre" value={form.nombre} onChange={handleChange} />
            <input name="especie" value={form.especie} onChange={handleChange} />
            <input name="raza" value={form.raza} onChange={handleChange} />
            <input name="sexo" value={form.sexo} onChange={handleChange} />
            <input name="edad" value={form.edad} onChange={handleChange} />
            <input name="peso" value={form.peso} onChange={handleChange} />


            <button type="submit">Guardar cambios</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
            </form>
        </>
    )
} 