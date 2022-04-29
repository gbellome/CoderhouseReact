import React from 'react'
import Bell from '../Bell/Bell'
import CartWidget from '../CartWidget/cartWidget'

const SideBar = () => {
  return (
    <div className='App'>
      <nav className='sidebar'>
        <header>
          <div className='image-text'>
            <span className='image'>
            <i className='bx bxs-plane-alt'></i>
            </span>

            <div className='text logo-text'>
              <span className='name'>Gabriel Bellome</span>
              <span className='profession'>React Developers</span>
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
                <a href=''>
                  <i className='bx bx-home-alt icon' ></i>
                  <span className='text nav-text'>Inicio</span>
                </a>
              </li>

              <li className='nav-link'>
                <a href=''>
                  <i className='bx bx-customize icon' ></i>
                  <span className='text nav-text'>Editar</span>
                </a>
              </li>

              <li className='nav-link'>
                <a href=''>
                  <Bell 
                    /* onTada */
                  />
                  <span className='text nav-text'>Notificaciones</span>
                </a>
              </li>

              <li className='nav-link'>
                <a href=''>
                  <i className='bx bx-pie-chart-alt icon' ></i>
                  <span className='text nav-text'>Graficos</span>
                </a>
              </li>

              <li className='nav-link'>
                <a href=''>
                  <i className='bx bx-heart icon' ></i>
                  <span className='text nav-text'>Favoritos</span>
                </a>
              </li>

              <li className='nav-link'>
                <a href=''>
                <i className='bx bx-trip icon'></i>
                  <span className='text nav-text'>Rutas</span>
                </a>
              </li>

            </ul>
          </div>

          <div className='bottom-content'>
            <li className=''>
              <CartWidget/>
            </li>

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