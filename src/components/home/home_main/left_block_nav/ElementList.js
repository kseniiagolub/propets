import React from 'react';
import style from "../../../../css_moduls/home_css/home.module.css";

const ElementList = (props) => {

    return (
        <button className={`${style.navBtn} d-flex mb-2`}>
            <div>
                <img className={`${style.iconBtn} me-2`} src={props.img} alt={props.name}/>
                <span>{props.name}</span>
            </div>
        </button>
    );
};

export default ElementList;