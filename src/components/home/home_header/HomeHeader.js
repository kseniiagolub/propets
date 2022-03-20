import React from 'react';
import LogoHomeHeader from "./LogoHomeHeader";
import BtnHomeHeader from "./BtnHomeHeader";
import style from '../../../css_moduls/home_css/home.module.css';

const HomeHeader = () => {
    return (
        <header className={`${style.header} container-fluid`}>
            <div className={'row justify-content-center align-items-center h-100'}>
                <div className={'col-10 d-flex justify-content-between'}>
                    <LogoHomeHeader/>
                    <BtnHomeHeader/>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;