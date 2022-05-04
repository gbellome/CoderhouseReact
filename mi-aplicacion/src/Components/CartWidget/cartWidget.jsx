import React from 'react'
import ItemListContainer from './ItemListContainer'

const CartWidget = () => {
  return (
    <li className=''>
      <a href="">
        <i className='bx bx-cart icon'></i>
        <ItemListContainer
          cantidad="5"
        />
      </a>
    </li>
  )
}

export default CartWidget