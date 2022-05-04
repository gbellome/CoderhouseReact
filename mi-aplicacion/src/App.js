import SideBar from './Components/SideBar/SideBar';
import './App.css';
import Item from './Components/Item/Item'
import vinedo from './static/img/vinedo.jpg'
import vinedo2 from './static/img/vinedo2.jpg'
import vinedo3 from './static/img/vinedo3.jpg'
import {
  useEffect,
  useState
} from 'react';

function App() {

  const [vinos, setVinos] = useState([])

  // Datos 
  const listaVinos = [{
      nombre: "El enemigo",
      precio: "3.150,00",
      stock: 10,
      fondo: vinedo
    },
    {
      nombre: "Sapo de otro pozo",
      precio: "1.250,00",
      stock: 5,
      fondo: vinedo2
    },
    {
      nombre: "Luigi Bosca",
      precio: "1.570,00",
      stock: 20,
      fondo: vinedo3
    }
  ]

  // Llamado a la BD
  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listaVinos)
      }, 3000)
    })

    pedido
      .then((res) => {
        setVinos(res)
      }, err => {
        console.log("Error: ", err)
      })
      .then(() => console.log(vinos))
      .catch((err) => console.log("Error 2: ", err))

    console.log(vinos)

    return () => {}
  }, [])

  return ( 
    <div className = "App" >
      <SideBar />
      <section className = 'home' >
        <div className = 'text'> E Commerce</div>
        <div className = 'd-flex'>
          <Item vinos = {vinos}/> 
        </div> 
      </section> 
    </div>
  );
}

export default App;