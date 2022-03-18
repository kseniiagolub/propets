import React from 'react';
import style from '../../../css_moduls/registration_css_moduls/section_header.module.css';


const SectionHeaderEnterFacebook = () => {
    return (
        <div className={`${style.btnFacebook} d-flex flex-row`}>
            <div className={`${style.btnFacebookFirstLetter}`}>f</div>
            <p>Enter with Facebook</p>
        </div>
    );
};

export default SectionHeaderEnterFacebook;