import React from 'react';
import Section_header_logo from "./section_header/Section_header_logo";
import Section_header_welcome from "./section_header/Section_header_welcome";
import style from '../../css_moduls/registration_css/registration.module.css';
import SingInUp from "./section_main/SingInUp";
import SignUpForm from "./section_main/SignUpForm";
import SignInForm from "./section_main/SignInForm";
import Registration_footer from "./section_footer/Registration_footer";

const Registration = () => {
    return (
        <section className={`${style.box} container-fluid pt-3`}>
                <Section_header_logo/>
                <Section_header_welcome/>
                <SingInUp/>
                <Registration_footer/>
        </section>
    );
};

export default Registration;