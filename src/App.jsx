import { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';

import {generarId}  from './helpers';

import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);

  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setanimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  //escuchando por los cambios
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(()=>{
    console.log('componente listo')
  }, [gastoEditar])

  const handleNuevoGasto = () =>{
    //console.log('nuevo gasto')
    setModal(true);

    setTimeout(() => {
        setanimarModal(true)
    }, 500)
  }

  const guardarGasto = gasto =>{
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos,gasto]);

    setanimarModal(false);

    setTimeout(() => {
        setModal(false);
    }, 500)

  }

  return (
    <div className={modal ? 'fijar': ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
      />

      {isValidPresupuesto &&
       <>
          <main>
            <ListadoGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      }

      {modal && (
        <Modal
          setModal={setModal}
          setanimarModal={setanimarModal}
          animarModal={animarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  )
}

export default App
