import ItemCount from './ItemCount/ItemCount'
import './Item.css'

const Item = ({vinos}) => {

    return (
        <>
            {vinos.length > 0 ? (
                vinos.map((vino, index) => {
                    <>
                        <div className="card m-5">
                            <img src={vino.fondo} alt="fondo" className='card-img-top' />
                            <div className="card-body">
                                <h5 key={index} className="card-title">{vino.nombre}</h5>
                                <p className='card-text'>${vino.precio}</p>
                                <ItemCount
                                    stock={vino.stock}
                                    initial="1"
                                />
                            </div>
                        </div>
                    </>
                })
            ) : (
                <h1>Cargando...</h1>
            )}
        </>
    )
}

export default Item