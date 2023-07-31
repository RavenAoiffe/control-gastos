import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);

  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setanimarModal] = useState(false);


  const handleNuevoGasto = () =>{
    //console.log('nuevo gasto')
    setModal(true);

    setTimeout(() => {
        setanimarModal(true)
    }, 500)
  }
  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
      />

      {isValidPresupuesto &&
        (
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        ) 
      }

      {modal && (
        <Modal
          setModal={setModal}
          setanimarModal={setanimarModal}
          animarModal={animarModal}
        />
      )}
    </>
  )
}

export default App
