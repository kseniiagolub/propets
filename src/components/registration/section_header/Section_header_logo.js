import React from 'react';
import logo from '../../../assets/svg/logo.svg';
import close from '../../../assets/png/close.png';
import style from '../../../css_moduls/registration_css/section_header.module.css';
import {Link} from "react-router-dom";

const SectionHeaderLogo = () => {
    return (
        <div className={'d-flex flex-row justify-content-between mb-2'}>
            <img className={`${style.logoHeader}`} src={logo} alt={'logo'}/>
            <Link to='/'><img className={`${style.close}`} src={close} alt={'close'}/></Link>
        </div>
    );
};

export default SectionHeaderLogo;