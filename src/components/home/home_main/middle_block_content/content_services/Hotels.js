import React from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css';

const Hotels = () => {
    return (
        <>
        <p className={`${style.titleSemiBold}`}>
            <span className={`${style.titleBold}`}>Hotels. </span>
            Go to vacations — we’ll take care of your pet!
        </p>
        </>
    );
};

export default Hotels;