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
                <button onClick={restar}>-</button>
            </div>
            <div className="Qty">
                <p>{contador}</p>
            </div>
            <div className="Add">
                <button onClick={sumar}>+</button>
            </div>
        </div>
    )
}

export default ItemCount