import React from 'react'

const Itemportfolio = ({type, setType, active, display}) => {
    return (
        <li 
            className = {`item-portfolio ${active ? 'active' : ''}`} 
            onClick = {() => setType(type)}
            >
            {display}
        </li>
    )
}

export default Itemportfolio
