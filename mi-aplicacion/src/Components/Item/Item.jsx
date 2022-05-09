import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import BotellaVino from '../../static/img/Botella Vino.png'

const Item = ({ nombre, precio, stock, fondo, index }) => {

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <div className="card-header">
                        <div className='card-image-background'>
                            <img src={fondo} alt="fondo" />
                        </div>
                        <div className="card-image-item">
                            <img src={BotellaVino} alt="Botella" />
                        </div>
                        <div className="card-image-icons">
                            <i className='bx bx-heart icon'></i>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="title-wines">
                            <span className="name">{nombre}</span>
                            <span className="price">${precio}</span>
                        </div>
                        <div className="rating">
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bx-star' ></i>
                            <i class='bx bx-star' ></i>
                        </div>
                        <ItemCount
                            stock={stock}
                            initial="1"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item