import React from 'react';
import logo from '../../../assets/svg/logo.svg';
import close from '../../../assets/png/close.png';
import style from '../../../css_moduls/registration_css/section_header.module.css';

const SectionHeaderLogo = () => {
    return (
        <div className={'d-flex flex-row justify-content-between'}>
            <img className={`${style.logoHeader}`} src={logo} alt={'logo'}/>
            <img className={`${style.close}`} src={close} alt={'close'}/>
        </div>
    );
};

export default SectionHeaderLogo;