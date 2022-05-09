import React from 'react'
import BotellaVino from '../../static/img/Botella Vino.png'

const ItemDetailsContainer = () => {
    return (
        <>
            <div class="box one">
                <div class="details">
                    <div class="topic">Description</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque consequatur corporis vitae nobis, ut veniam earum expedita eaque at placeat perferendis unde voluptates explicabo rerum distinctio quis, illo, porro et?</p>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="price-box">
                        <div class="discount">$1800.00</div>
                        <div class="price">$1500.00</div>
                    </div>
                </div>
                <div class="button1">
                    <button>Add To Cart</button>
                </div>
            </div>
            <div class="box two">
                <div class="image-box">
                    <div class="image">
                        <BotellaVino />
                    </div>
                    <div class="info">
                        <div class="brand">SONY</div>
                        <div class="name">SONY ALPHA A7 KIT</div>
                        <div class="shipping">FREE SHIPPING</div>
                        <div class="button2">
                            <button>Login For More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetailsContainer