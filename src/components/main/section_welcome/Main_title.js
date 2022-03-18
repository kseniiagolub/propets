import React from 'react';
import style from '../../../css_moduls/section_welcome.module.css'

const MainTitle = () => {
    return (
        <>
            <p className={`${style.pText}`}>Welcome to your <span className={`${style.colorSpanText}`}>pawfessional</span> community</p>
        </>
    );
};

export default MainTitle;