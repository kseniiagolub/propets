import React from 'react';
import style from '../../../../css_moduls/start_css/section_welcome.module.css'
import search from '../../../../assets/png/search.png'
import {useHistory} from "react-router-dom";

const RegistrationLinks = () => {

    const {push} = useHistory()

    return (
        <>
            <button className={`${style.btnLostPet}`} onClick={() => push('/authorization')}>
                <div className={`${style.search}`}>
                    <span className={`${style.btnSpan}`}>I lost my pet!</span>
                    <img src={search}/>
                </div>
            </button>
            <button className={`${style.btnFoundPet}`} onClick={() => push('/authorization')}>
                <span className={`${style.btnSpanWhite}`}>I found a pet!</span>
            </button>
        </>
    );
};

export default RegistrationLinks;