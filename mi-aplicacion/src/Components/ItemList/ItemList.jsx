import React from 'react'
import Item from '../Item/Item'
import Preloader from '../Preloader/Preloader'


const ItemList = ({ vinos }) => {
    return (
        <>
            {vinos.length > 0 ? (
                vinos.map((vino, index) => (
                    <Item
                        nombre={vino.nombre}
                        precio={vino.precio}
                        stock={vino.stock}
                        fondo={vino.fondo}
                        index={index}
                    />
                ))
            ) : (
                <Preloader />
            )}
        </>
    )
}

export default ItemList