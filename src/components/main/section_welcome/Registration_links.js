import React from 'react';
import style from '../../../css_moduls/section_welcome.module.css'
import search from '../../../assets/png/search.png'

const RegistrationLinks = () => {
    return (
        <>
            <button className={`${style.btnLostPet}`}>
                <div className={`${style.search}`}>
                    <span className={`${style.btnSpan}`}>I lost my pet!</span>
                    <img src={search}/>
                </div>
            </button>
            <button className={`${style.btnFoundPet}`}>
                <span className={`${style.btnSpan}`}>I found a pet!</span>
            </button>
        </>
    );
};

export default RegistrationLinks;