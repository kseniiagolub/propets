import React from 'react';
import style from "../../../css_moduls/registration_css/registration.main.module.css";

const SignInForm = () => {
    return (
        <div className={'container-fluid'}>
            <div className={'row d-flex flex-column justify-content-between h-100'}>
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
                <div className={`${style.forgotPwd} col-6 text-center`}>
                    <a href={'#'}>Forgot password?</a>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;