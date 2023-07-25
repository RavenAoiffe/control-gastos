import React from "react";
import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) =>{

    const [mensaje, setMensaje] =  useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();
        
        if(!Number(presupuesto) || Number(presupuesto) < 0){
           setMensaje('No es un presupuesto válido')
        }
        else{
            setMensaje('Si es un presupuesto válido')
        }

    }

    return(
        <div className="contenedor-presupuesto contenedor sombra">
            <form action="#" className="formulario">
                <div className="campo">
                    <label htmlFor="nuevo-presupuesto">Definir presupuesto</label>
                    <input type="text"
                    className="nuevo-presupuesto" 
                    placeholder="añade tu presupuesto"
                    name="nuevo-presupuesto"
                    value={presupuesto}
                    onChange={(e)=> setPresupuesto(e.target.value)}
                    />
                </div>
                <input type="submit" value="añadir" onClick={handlePresupuesto}/>
                
                {mensaje && <Mensaje  tipo='error'>{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto;