import React from 'react'
import rightArrow from '../../assets/right-arrow.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'

const Testimonials = () => {
    return (
        <div className = 'testimonials' id = 'testimonials'>
            <h1 className="testimonials__title">Testimonials</h1>
            <div className="testimonials__container">
                <div className="cart">
                    <div className="cart__top">
                        <div className="cart__top__social"><img src= {rightArrow} alt="" /></div>
                        <div className="cart__top__people">
                            <img src= "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  alt="" />
                        </div>
                        <div className="cart__top__social"><img src= {twitter} alt="" /></div>
                    </div>
                    <div className="cart__center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.
                    </div>
                    <div className="cart__bottom">
                        <h3>Tom Durden</h3>
                        <span>Senior Developer</span>
                    </div>
                </div>
                <div className="cart">
                    <div className="cart__top">
                        <div className="cart__top__social"><img src= {rightArrow} alt="" /></div>
                        <div className="cart__top__people">
                            <img src= "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  alt="" />
                        </div>
                        <div className="cart__top__social"><img src= {youtube} alt="" /></div>
                    </div>
                    <div className="cart__center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam 
                        dolorem recusandae perspiciatis ducimus vel hic temporibus.
                    </div>
                    <div className="cart__bottom">
                        <h3>Alex Kalinski</h3>
                        <span>Co-Founder of DELKA</span>
                    </div>
                </div>
                <div className="cart">
                    <div className="cart__top">
                        <div className="cart__top__social"><img src= {rightArrow} alt="" /></div>
                        <div className="cart__top__people">
                            <img src= "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  alt="" />
                        </div>
                        <div className="cart__top__social"><img src= {linkedin} alt="" /></div>
                    </div>
                    <div className="cart__center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.
                    </div>
                    <div className="cart__bottom">
                        <h3>Martin Harold</h3>
                        <span>CEO of ALBI</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
