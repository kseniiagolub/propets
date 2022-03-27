import React from 'react';
import style from "../../css_moduls/home_css/home.module.css";
import LostPetForm from "./LostPetForm";

const FoundPet = () => {
    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold}`}><span className={`${style.titleBold}`}>Lost your buddy?</span> Keep
                calm and complete the form.</h1>
            <LostPetForm/>
        </div>
    );
};

export default FoundPet;