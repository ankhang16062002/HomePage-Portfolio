import React, { useState } from 'react'
import {dataCart} from '../../fakedata'
import arrow from '../../assets/arrow.png'

const Slider = () => {
    const [location, setLocation] = useState(0)

    const handleClick = (type) => {
        switch(type) {
            case 'plus':
                setLocation(location === dataCart.length- 1 ? 0 : location + 1)
                break;
            case 'minus':
                setLocation(location === 0 ? dataCart.length - 1 : location - 1)
                break;
            default:
                break;
        }
    }
    return (
        <div className = 'slider' id = 'slider'>
            <div className="slider__container" style = {{transform: `translateX(-${location * 100}vw)`}}>
                {
                    dataCart.map((item, index) => (
                        <div className="slider__container__item" key = {index}>
                            <div className="cart">
                                <div className="cart__left">
                                    <div className="cart__left__img">
                                        <img src= {item.icon} alt="img" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <span>{item.project}</span>
                                </div>
                                <div className="cart__right">
                                    <img src= {item.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="slider__arrowLeft" onClick = {() => handleClick('minus')}>
                <img src= {arrow} alt="img" />
            </div>
            <div className="slider__arrowRight" onClick = {() => handleClick('plus')}>
                <img src= {arrow} alt="img" />
            </div>
        </div>
    )       
}

export default Slider