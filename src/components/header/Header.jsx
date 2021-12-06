import { Email, Person } from '@material-ui/icons'
import React from 'react'

const Header = ({openMenu, setOpenMenu}) => {
    return (
        <div className = {`header ${openMenu ? 'active' : ''}`} >
            <div className="header__left">
                <div className="header__left__logo"><a href = "#introduct">Front-end.</a></div>
                <div className="header__left__contact">
                    <div className="header__left__contact__phone">
                        <Person className = "icon"/>
                        <span>+08 687 18 744</span>
                    </div>
                    <div className="header__left__contact__email">
                        <Email className = "icon"/> 
                        <span>vuongankhang1606@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="header__right" onClick = {() => setOpenMenu(!openMenu)}>
                <span className="header__right__top"></span>
                <span className="header__right__center"></span>
                <span className="header__right__bottom"></span>
            </div>
        </div>
    )
}

export default Header
