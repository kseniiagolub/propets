import React from 'react';
import style from '../../../css_moduls/registration_css/registration.main.module.css';

const SingInUp = () => {
    return (
        <div>
            <button className={`${style.btn} ${style.active}`}>Sign up</button>
            <button className={`${style.btn}`}>Sign in</button>
        </div>
    );
};

export default SingInUp;