import React, { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock, initial }) => {

    const [contador, setContador] = useState(parseInt(initial))
    
    const sumar = () => {
        if (contador < stock) setContador(contador + 1)
    }

    const restar = () => {
        if (contador > initial) setContador(contador - 1)
    }

    return (

        <div className="ItemCount">
            <div className="Sub">
                <button onClick={restar} className="btn btn-primary">-</button>
            </div>
            <div className="Qty">
                <p className='text-center'>{contador}</p>
            </div>
            <div className="Add">
                <button onClick={sumar} className="btn btn-primary">+</button>
            </div>
        </div>
    )
}

export default ItemCount