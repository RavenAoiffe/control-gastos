import {useState} from "react";
import Mensaje from './Mensaje';
import CerrarBtn from "../img/cerrar.svg";


const Modal = ({setModal,setanimarModal,animarModal,guardarGasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('');

const ocultarModal = () => {

    setanimarModal(false);

    
    setTimeout(() => {
        setModal(false);
    }, 500)
}

const handleSubmit = e =>{
    e.preventDefault();

    if([nombre,categoria,cantidad].includes('')){
        setMensaje('Todos los campos son obligatorios');

        setTimeout(()=>{
            setMensaje('');
        },2000)

        return;
    }
    guardarGasto({nombre,cantidad,categoria})
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
            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>

                <legend>Nuevo Gasto</legend>
                {Mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
                <div className="campo">
                    <label htmlFor="nombre">Nombre gasto</label>
                    <input type="text"
                    id="nombre"
                    name="nombre" 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    placeholder="Añade el nombre del gasto"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number"
                    id="cantidad"
                    name="cantidad" 
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}
                    placeholder="Añade la cantidad del gasto: ej. 300"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria" >Categoría</label>

                    <select name="categoria" id="categoria" value={categoria}
                     onChange={e => setCategoria(e.target.value)}>
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
