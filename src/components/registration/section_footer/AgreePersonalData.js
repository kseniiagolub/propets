import React from 'react';
import style from '../../../css_moduls/registration_css_moduls/registration.footer.module.css';

const AgreePersonalData = () => {
    return (
        <div>
            <p className={`${style.agreeText}`}>By clicking “Submit”, you agree to us processing your information in accordance with <a href={'#'}>these terms</a>.</p>
        </div>
    );
};

export default AgreePersonalData;