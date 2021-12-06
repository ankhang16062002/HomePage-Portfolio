import React, {useEffect, useRef} from 'react'
import imgIntroduct from '../../assets/ankhang.png'
import imgDown from '../../assets/down.png'
import { init } from 'ityped'

const Introduct = () => {
    const textBlink = useRef(null)

    useEffect(() => {
        init(textBlink.current, { 
            showCursor: true,
            backSpeed:  60,
            backDelay:  1500,
            strings: ['Developer', 'Designer', 'Content Credictor'] }
        )
    }, [])

    return (
        <div className = 'introduct' id = 'introduct'>
            <div className="introduct__img">
                <div className="introduct__img__container">
                    <img src= {imgIntroduct} alt="" />
                </div>
            </div>
            <div className="introduct__info">
                <h3>Hi There, I'm</h3>
                <h1>Vương An Khang</h1>
                <h3>Freelance <span ref = {textBlink}></span></h3>
                <div className="introduct__info__arrow">
                    <a href="#portfolio"><img src= {imgDown} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Introduct
