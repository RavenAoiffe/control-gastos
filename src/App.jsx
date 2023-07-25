import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);

  const [isValidPresupuesto, setisValidPresupuesto] = useState(false);

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
      />
    </>
  )
}

export default App
