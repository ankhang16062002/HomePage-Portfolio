import React, { useState } from 'react'
import shake from '../../assets/shake.svg'

const Contact = () => {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }
    return (
        <div className = 'contact' id = 'contact'> 
            <div className="contact__left">
                <img src= {shake} alt="img" />
            </div>
            <div className="contact__right">
                <h2>Contact.</h2>
                <form onSubmit = {handleSubmit}>
                    <input type="text" placeholder = "Email"/>
                    <textarea placeholder = "Message"></textarea>
                    <button type = 'submit'>Send</button>
                    {message ? <span>Thanks, I'll reply ASAP :)</span> : false}
                </form>
            </div>
        </div>
    )
}

export default Contact
 