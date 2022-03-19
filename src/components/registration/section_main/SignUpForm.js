import React from 'react';
import style from '../../../css_moduls/registration_css/registration.main.module.css';

const SignUpForm = () => {
    return (
            <div className={`${style.heightForm} row align-items-center mb-4`}>
                <div className={'col-6'}>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="name">Name:</label>
                        <input className={'col-8'} type="text" placeholder="Helen Johnson" name="name" required/>
                    </div>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email" required/>
                    </div>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw" required/>
                    </div>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw" required/>
                    </div>
                </div>
                <div className={`${style.textPwd} col-6 d-flex flex-column justify-content-center`}>
                    <p>Password must have at least 8 characters with at least one Capital letter, at least one lower
                        case
                        letter and at least one number or special character.</p>
                    <p>Please re-enter your password</p>
                </div>
            </div>
    );
};

export default SignUpForm;