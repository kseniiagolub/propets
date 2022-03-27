import React from 'react';
import style from "../../css_moduls/home_css/home.module.css";

const FoundPet = () => {
    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto`}>
            <h1>Found Pet</h1>
        </div>
    );
};

export default FoundPet;