import React from 'react';
import style from "../../../css_moduls/home_css/home.module.css";
import plus from "../../../assets/png/plus.png";
import {NavLink} from "react-router-dom";

const BtnHomeHeader = () => {
    return (
        <NavLink to={'/newpost'} className={`${style.btnHeader}`}>
            <img className={`${style.iconBtn}`} src={plus} alt={'plus'}/>
            <span className={'m-auto'}>Add new</span>
        </NavLink>
    );
};

export default BtnHomeHeader;