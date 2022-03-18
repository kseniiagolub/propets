import React from 'react';
import logo from "../../assets/svg/logo.svg";
import style from '../../css_moduls/css_start/footer.module.css'

const FooterLogo = () => {
    return (
        <div>
            <img src={logo} className={`${style.footerLogo}`} alt='logo'/>
        </div>
    );
};

export default FooterLogo;