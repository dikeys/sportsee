import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <ul className='header__link-wrapper'>
                <li><NavLink className='header__link' to="#"> Accueil </NavLink></li>
                <li><NavLink className='header__link' to="#"> Profil </NavLink></li>
                <li><NavLink className='header__link' to="#"> Réglage </NavLink></li>
                <li><NavLink className='header__link' to="#"> Communauté </NavLink></li>
            </ul>

        </nav>
    );
};

export default Header;