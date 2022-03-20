import React from 'react';
import style from "../../../css_moduls/home_css/home.module.css";
import plus from "../../../assets/png/plus.png";

const BtnHomeHeader = () => {
    return (
        <button className={`${style.btnHeader}`}>
            <img className={`${style.iconBtn}`} src={plus} alt={'plus'}/>
            <span className={'m-auto'}>Add new</span>
        </button>
    );
};

export default BtnHomeHeader;