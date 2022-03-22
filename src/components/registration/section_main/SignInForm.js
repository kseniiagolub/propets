import React from 'react';
import style from "../../../css_moduls/registration_css/registration.main.module.css";

const SignInForm = () => {
    return (
        <>
            <div className={`${style.heightFormAuth} row d-flex flex-column justify-content-center mb-4`}>
                <div className={'col-6'}>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email"
                               required/>
                    </div>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw" required/>
                    </div>
                </div>
            </div>
            <div className={`${style.forgotPwd} col-6 text-center mb-2`}>
                <a href={'#'}>Forgot password?</a>
            </div>
        </>
    );
};

export default SignInForm;