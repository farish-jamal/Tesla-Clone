import React from 'react'
import TeslaLogo from '../assets/logo.svg'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="main_logo" style={{width: '80px'}}/>
            </div>
            <div className="header__links">
                <p>Model s</p>
                <p>Model 3</p>
                <p>Model x</p>
                <p>Model y</p>
            </div>
            <div className="header__right">
                <p>Shop</p>
                <p>Account</p>
                 <MenuIcon />
            </div>
        </div>
    )
}

export default Header
