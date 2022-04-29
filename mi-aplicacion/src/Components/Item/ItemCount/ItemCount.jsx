import React, { useState } from 'react'

const ItemCount = ({ stock, initial }) => {

    const [contador, setContador] = useState(parseInt(initial))
    
    const sumar = () => {
        if (contador < stock) setContador(contador + 1)
    }

    const restar = () => {
        if (contador > initial) setContador(contador - 1)
    }

    return (
        <div className="row">
            <div className="col-2">
                <button onClick={restar} className="btn btn-primary">-</button>
            </div>
            <div className="col-7"><p className='text-center'>{contador}</p></div>
            <div className="col-2">
                <button onClick={sumar} className="btn btn-primary">+</button>
            </div>
        </div>
    )
}

export default ItemCount