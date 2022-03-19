import React from 'react';
import AgreePersonalData from "./AgreePersonalData";
import Footer_btn from "./Footer_btn";
import style from '../../../css_moduls/registration_css/registration.footer.module.css';

const RegistrationFooter = () => {
    return (
        <>
            <hr className={`m-0`}/>
            <div className={`${style.heightFooter} row align-items-center`}>
                <AgreePersonalData/>
                <Footer_btn/>
            </div>
        </>
    );
};

export default RegistrationFooter;