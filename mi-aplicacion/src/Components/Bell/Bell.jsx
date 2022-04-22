import React from 'react'

const Bell = (props) => {
  return (
    props.onTada ? (<i className='bx bxs-bell bx-tada icon'></i>) : (<i className='bx bx-bell icon'></i>)
  )
}

export default Bell