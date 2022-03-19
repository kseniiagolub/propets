import React from 'react';
import AgreePersonalData from "./AgreePersonalData";
import Footer_btn from "./Footer_btn";
import style from '../../../css_moduls/registration_css/registration.footer.module.css';

const RegistrationFooter = () => {
    return (
        <div className={`container-fluid`}>
            <hr/>
            <div className={'row'}>
                <AgreePersonalData/>
                <Footer_btn/>
            </div>
        </div>
    );
};

export default RegistrationFooter;