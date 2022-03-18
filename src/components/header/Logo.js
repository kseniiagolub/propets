import React from 'react';
import style from '../../css_moduls/header.module.css'
import logo from '../../assets/svg/logo.svg'

const Logo = () => {
    return (
            <img className={`${style.logo}`} src={logo} alt='logo'/>
    );
};

export default Logo;