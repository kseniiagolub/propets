import React from 'react';
import style from "../../../../css_moduls/home_css/home.module.css";

const ElementList = (props) => {

    return (
        <>
            <img className={`${style.iconBtn} me-2`} src={props.img} alt={props.name}/>
            <span>{props.name}</span>
        </>
    );
};

export default ElementList;