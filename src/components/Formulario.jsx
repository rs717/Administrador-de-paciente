import React, {Fragment,useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    const[cita,actualizarCita]=useState({
        mascota:"",
        dueno:"",
        fecha:"",
        hora:"",
        sintoma:"",
        id:""
    });
    const{mascota,dueno,fecha,hora,sintoma}=cita;

    const[vacio,actualizarVacio]=useState(false);




    const agregar = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value 
        })

    }

    const envio = e =>{
        e.preventDefault();
        if(mascota.trim()==="" || dueno.trim()==="" || fecha.trim()==="" || hora.trim()==="" || sintoma.trim()===""){
            actualizarVacio(true);
            return;
        }

        //Asignar un id 
        actualizarCita({
            ...cita,
            id:uuidv4()
            
        })

        //crear cita
        crearCita(cita);
    }
    return ( 
        <Fragment>
            <form onSubmit={envio}>
                {
                vacio

                ?
                <p>rellena los campos</p>

                :null
                }
                <label>Nombre de la Mascota</label>

                <input 
                className="u-full-width" 
                name="mascota"
                type="text" 
                placeholder="Nombre de la mascota"
                onChange={agregar}
                value={mascota}
                ></input>

                <label>Nombre del Dueño</label>

                <input 
                className="u-full-width" 
                name="dueno"
                type="text" 
                placeholder="Nombre del dueño" 
                onChange={agregar}
                value={dueno}
                ></input>

                <label>Fecha</label>

                <input 
                className="u-full-width" 
                name="fecha"
                type="date" 
                placeholder="Nombre del dueño"
                onChange={agregar} 
                value={fecha}
                ></input>

                <label>Hora</label>

                <input 
                className="u-full-width" 
                name="hora"
                type="time" 
                placeholder="Nombre del dueño" 
                onChange={agregar}
                value={hora}
                ></input>

                <label>Sintomas</label>

                <textarea 
                className="u-full-width" 
                placeholder="Sintomas" 
                onChange={agregar}
                value={sintoma}
                name="sintoma"></textarea>

                <input 
                className="button u-full-width" 
                type="submit"
                 ></input>
            </form>
        </Fragment>
     );
}
 
export default Formulario;