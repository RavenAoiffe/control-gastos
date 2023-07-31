const ControlPresupuesto = ({presupuesto}) => {
    
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
    
    return (
        <div className="contenedor-presupuesto contendor sombra dos-columnas">
            <div>
                <p>Gráfica</p>

                <div className="contenido-presupuesto">
                    <p> 
                        <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                    </p>
                    <p> 
                        <span>Disponible: </span> $0.00
                    </p>
                    <p> 
                        <span>Gastado: </span> $0.00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ControlPresupuesto;
