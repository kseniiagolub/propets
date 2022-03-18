import React from 'react';
import Section_header_enter_facebook from "./Section_header_enter_facebook";
import style from '../../../css_moduls/registration_css_moduls/section_header.module.css';


const SectionHeaderWelcome = () => {
    return (
        <div className={'d-flex flex-row'}>
            <h2 className={`${style.title}`}><span className={'fw-bold'}>Welcome! </span>Please sign in / sign up to continue or</h2>
            <Section_header_enter_facebook/>
        </div>
    );
};

export default SectionHeaderWelcome;