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
            </form>
       </div>
        )
}

export default Modal
