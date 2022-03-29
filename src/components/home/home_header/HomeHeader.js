import React from 'react';
import LogoHomeHeader from "./LogoHomeHeader";
import BtnHomeHeader from "./BtnHomeHeader";
import style from '../../../css_moduls/home_css/home.module.css';
import {useSelector} from "react-redux";
import LostFoundBtn from "./LostFoundBtn";

const HomeHeader = () => {

    const map = useSelector(state => state.map)

    const test = () => {
        if(!map.header) {
            if(!map.map) {
                return <BtnHomeHeader/>
            } else {
                return <LostFoundBtn/>
            }
        }
    }

    return (
        <header className={`${style.heightHeader} container-fluid`}>
            <div className={'row justify-content-center align-items-center h-100'}>
                <div className={'col-10 d-flex justify-content-between'}>
                    <LogoHomeHeader/>
                    {test()}
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;