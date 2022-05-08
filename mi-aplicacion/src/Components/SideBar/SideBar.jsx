import React from 'react'
import CartWidget from '../CartWidget/cartWidget'
import { NavLink } from 'react-router-dom'

const SideBar = () => {





  return (
    <div className='App'>
      <nav className='sidebar'>
        <header>
          <div className='image-text'>
            <span className='image'>
              <i className='bx bxs-wine'></i>
            </span>

            <div className='text logo-text'>
              <span className='name'>Gabriel Bellome</span>
              <span className='profession'>Wine Taster</span>
            </div>
          </div>

          <i className='bx bx-chevron-right toggle'></i>
        </header>

        <div className='menu-bar'>
          <div className='menu'>

            <li className='search-box'>
              <i className='bx bx-search icon'></i>
              <input type='text' placeholder='Buscar...' />
            </li>

            <ul className='menu-links'>
              <li className='nav-link'>
                <NavLink to="/">
                  <i className='bx bx-store-alt icon'></i>
                  <span className='text nav-text'>Inicio</span>
                </NavLink>
              </li>

              <li className='nav-link'>
                <NavLink to="/Combos">
                  <i className='bx bx-purchase-tag icon'></i>
                  <span className='text nav-text'>Combos</span>
                </NavLink>
              </li>

              <li className='nav-link'>
                <NavLink to="/Cajas">
                  <i className='bx bx-package icon' ></i>
                  <span className='text nav-text'>Cajas</span>
                </NavLink>
              </li>

              <li className='nav-link'>
                <NavLink to="/Ofertas">
                  <i className='bx bxs-offer icon' ></i>
                  <span className='text nav-text'>Ofertas</span>
                </NavLink>
              </li>

              <li className='nav-link'>
                <NavLink to="/Favoritos">
                  <i className='bx bx-heart icon' ></i>
                  <span className='text nav-text'>Favoritos</span>
                </NavLink>
              </li>

              <li className='nav-link'>
                <NavLink to="/PorPais">
                  <i className='bx bx-trip icon'></i>
                  <span className='text nav-text'>Por pais</span>
                </NavLink>
              </li>

            </ul>
          </div>

          <div className='bottom-content'>
            <CartWidget />

            <li className='mode'>
              <div className='sun-moon'>
                <i className='bx bx-moon icon moon'></i>
                <i className='bx bx-sun icon sun'></i>
              </div>
              <span className='mode-text text'>Lado oscuro</span>

              <div className='toggle-switch'>
                <span className='switch'></span>
              </div>
            </li>

          </div>
        </div>

      </nav>

      {/* <script>
                const body = document.querySelector('body'),
                sidebar = body.querySelector('nav'),
                toggle = body.querySelector(".toggle"),
                searchBtn = body.querySelector(".search-box"),
                modeSwitch = body.querySelector(".toggle-switch"),
                modeText = body.querySelector(".mode-text");


                toggle.addEventListener("click" , () => {
                    sidebar.classList.toggle("close")
                })

                searchBtn.addEventListener("click" , () =>{
                    sidebar.classList.remove("close")
                })

                modeSwitch.addEventListener("click" , () =>{
                    body.classList.toggle("dark")

                    if (body.classList.contains("dark")){
                        modeText.innerText = "Light mode"
                    } else {
                        modeText.innerText = "Dark mode"
                    }
                })
            </script> */}
    </div>
  )
}

export default SideBar