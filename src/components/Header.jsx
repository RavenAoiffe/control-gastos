import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";


const Header = ({presupuesto, setPresupuesto,isValidPresupuesto,setisValidPresupuesto,gastos,setGastos}) =>{
    return(
        <>
        <header>
            <h1>Planificador de gastos</h1>

            {isValidPresupuesto ? 
                (
                    <ControlPresupuesto
                    gastos={gastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setGastos={setGastos}
                    setisValidPresupuesto={setisValidPresupuesto}
                    />
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
