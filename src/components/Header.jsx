import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({presupuesto, setPresupuesto,isValidPresupuesto,setisValidPresupuesto}) =>{
    return(
        <>
        <header>
            <h1>Planificador de gastos</h1>

            {isValidPresupuesto ? 
                (
                    <p>Control presupuesto</p>
                )
                :
                (
                    <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setisValidPresupuesto={setisValidPresupuesto}
                    />
                )
            }

        </header>
        </>
    )
}

export default Header;
