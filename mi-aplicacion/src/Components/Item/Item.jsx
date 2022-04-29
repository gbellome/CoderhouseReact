import React from 'react'
import ItemCount from './ItemCount/ItemCount'

const Item = () => {
    return (
        <div className="card m-5" style={{width : "300px"}}>
            <div className="card-body">
                <h5 className="card-title">Producto</h5>
                <ItemCount
                    stock="10"
                    initial="1"
                />
            </div>
        </div>
    )
}

export default Item