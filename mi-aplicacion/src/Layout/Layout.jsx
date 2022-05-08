import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <SideBar/>
        <Outlet/>
    </>
  )
}

export default Layout