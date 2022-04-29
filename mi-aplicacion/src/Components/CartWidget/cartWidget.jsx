import React from 'react'
import ItemListContainer from './ItemListContainer'

const CartWidget = () => {
  return (
    <a href=''>
        <i className='bx bx-cart icon' ></i>
        <ItemListContainer
            cantidad="5"
        />
    </a>
  )
}

export default CartWidget