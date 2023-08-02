import React from "react";
import CerrarBtn from "../img/cerrar.svg";


const Modal = ({setModal,setanimarModal,animarModal}) => {

const ocultarModal = () => {

    setanimarModal(false);

    
    setTimeout(() => {
        setModal(false);
    }, 500)
}
    return(
       <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn}
                    alt="Cerrar modal"
                    onClick={ocultarModal}
                />
            </div>
            <form action="" className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>

                <legend>Nuevo Gasto</legend>
                <div className="campo">
                    <label htmlFor="nombre">Nombre gasto</label>
                    <input type="text"
                    id="nombre"
                    name="nombre" 
                    placeholder="Añade el nombre del gasto"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number"
                    id="cantidad"
                    name="cantidad" 
                    placeholder="Añade la cantidad del gasto: ej. 300"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>

                    <select name="categoria" id="categoria">
                        <option value="">--Selecciona</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="salud">Salud</option>
                        <option value="subscripciones">Subscripciones</option>
                        <option value="ocio">Ocio</option>
                    </select>
                </div>

                <input type="submit" value="Añadir gasto" />
            </form>
       </div>
        )
}

export default Modal
