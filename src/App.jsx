import { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import Filtros from './components/Filtros';

import {generarId}  from './helpers';

import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
  const [presupuesto, setPresupuesto] = useState([
    Number(localStorage.getItem('presupuesto') ?? 0)
  ]);

  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setanimarModal] = useState(false);

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );

  const[filtro, setFiltro] = useState('');
  const[gastosFiltrafos, setgastosFiltrafos] = useState('');


  //escuchando por los cambios
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true);
      setTimeout(() => {
          setanimarModal(true)
      }, 500)
    }
  }, [gastoEditar])

  useEffect(()=>{
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  },[presupuesto])

  //Guardar datos en local storage

  useEffect(() =>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  //filtro
  
  useEffect(() =>{
    if(filtro){
      //filtrar por categoría
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setgastosFiltrafos(gastosFiltrados)
    }
  },[filtro])
  //presupuesto local storage
  useEffect(() => {
    const presupuestoLS =Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presupuestoLS > 0){
      setisValidPresupuesto(true)
    }
  },[])

  const handleNuevoGasto = () =>{
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
        setanimarModal(true)
    }, 500)
  }

  const guardarGasto = gasto =>{
    if(gasto.id){
      //actualizar
      const gastosActualizados = gastos.map( gastoState =>
        gastoState.id === gasto.id ? gasto : gastoState
      )
      setGastos(gastosActualizados);
      setGastoEditar({})
    }
    else{
      //nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos,gasto]);
    }

    setanimarModal(false);
    setTimeout(() => {
        setModal(false);
    }, 500)

  }

  const eliminarGasto = id =>{
    
    const gastosActualizados =  gastos.filter(gasto => gasto.id !== id)

    setGastos(gastosActualizados)

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
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              setgastosFiltrafos={setgastosFiltrafos}
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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  )
}

export default App
