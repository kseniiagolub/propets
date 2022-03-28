import React from 'react';
import style from "../../css_moduls/home_css/home.module.css";

const FoundPet = () => {
    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold}`}><span className={`${style.titleBold}`}>Found a pet?</span> Please complete the form to help.</h1>
        </div>
    );
};

export default FoundPet;