const ControlPresupuesto = ({presupuesto}) => {
    
    const formatearCantidad = () => {
        return formatearCantidad.toLocalString('en-US', {
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
                </div>
            </div>
        </div>
    )
}

export default ControlPresupuesto;
