import React from "react";
import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setisValidPresupuesto}) =>{

    const [mensaje, setMensaje] =  useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();
        
        if(!presupuesto || presupuesto < 0){
           setMensaje('No es un presupuesto válido');
           return;
        }
       
        setMensaje('');
        setisValidPresupuesto(true)
        

    }

    return(
        <div className="contenedor-presupuesto contenedor sombra">
            <form action="#" className="formulario">
                <div className="campo">
                    <label htmlFor="nuevo-presupuesto">Definir presupuesto</label>
                    <input type="number"
                    className="nuevo-presupuesto" 
                    placeholder="añade tu presupuesto"
                    name="nuevo-presupuesto"
                    value={presupuesto}
                    onChange={(e)=> setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="añadir" onClick={handlePresupuesto}/>
                
                {mensaje && <Mensaje  tipo='error'>{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto;
