import {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import Vinedo1 from '../../static/img/vinedo.jpg'
import Vinedo2 from '../../static/img/vinedo2.jpg'

const ItemListContainer = () => {

  const [vinos, setVinos] = useState([])
  const listaVinos = [
    {
      nombre: "Luigi Bosca",
      precio: "2000",
      stock: "10",
      fondo: Vinedo1
    },
    {
      nombre: "Perro Callejero",
      precio: "1100",
      stock: "20",
      fondo: Vinedo2
    }
  ]

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listaVinos)
      }, 2000)
    })

    pedido
      .then(
        (res) => {
          setVinos(res)
        },
        (err) => {
          console.log("Error: ", err)
        }
      )
  
    return () => {}
  }, [])

  return (
    <ItemList
      vinos={vinos}
    />
  )
}

export default ItemListContainer