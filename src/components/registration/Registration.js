import React from 'react';
import Section_header_logo from "./section_header/Section_header_logo";
import Section_header_welcome from "./section_header/Section_header_welcome";
import style from '../../css_moduls/registration_css_moduls/registration.module.css';
import SingInUp from "./section_main/SingInUp";
import SignUpForm from "./section_main/SignUpForm";
import SignInForm from "./section_main/SignInForm";
import Registration_footer from "./section_footer/Registration_footer";

const Registration = () => {
    return (
        <section className={'container-fluid'}>
            <div className={`${style.box} row justify-content-center`}>
                <Section_header_logo/>
                <Section_header_welcome/>
                <SingInUp/>
                <SignUpForm/>
                {/*<SignInForm/>*/}
                <Registration_footer/>

            </div>
        </section>
    );
};

export default Registration;