import React from 'react'
import {itemMenu} from '../../fakedata'

const Menu = ({openMenu, setOpenMenu}) => {
    return (
        <div className = {`menu ${openMenu ? 'active' : ''}`}>
            <ul>
                {
                    itemMenu.map((item, index) => (
                        <li onClick = {() => {setOpenMenu(false)}}>
                            <a href = {`#${item.id}`} key = {index}>{item.display}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Menu
