import React from 'react';
import logo from '../../../assets/svg/logo.svg';
import style from '../../../css_moduls/registration_css_moduls/section_header.module.css';

const SectionHeaderLogo = () => {
    return (
        <div className={'d-flex flex-row justify-content-between'}>
            <img className={`${style.logoHeader}`} src={logo} alt={'logo'}/>
            <p>крестик</p>
        </div>
    );
};

export default SectionHeaderLogo;