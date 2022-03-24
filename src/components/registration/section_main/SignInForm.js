import React, {useState} from 'react';
import style from "../../../css_moduls/registration_css/registration.main.module.css";
import AgreePersonalData from "../section_footer/AgreePersonalData";
import FooterInBtn from "../section_footer/Footer_InBtn";
import {useDispatch} from "react-redux";

const SignInForm = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <>
            <div className={`${style.heightFormAuth} row d-flex flex-column justify-content-center mb-4`}>
                <div className={'col-6'}>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email"
                               onChange={(e => setEmail(e.target.value))} required
                               onBlur={() => dispatch({type: 'SET_USER_EMAIL_AUTH', payload: email})}/>
                    </div>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw"
                               onChange={(e => setPassword(e.target.value))} required
                               onBlur={() => dispatch({type: 'SET_USER_PASSWORD_AUTH', payload: password})}/>
                    </div>
                </div>
            </div>
            <div className={`${style.forgotPwd} ${style.marginInForm} col-6 text-center`}>
                <a href={'#'}>Forgot password?</a>
            </div>
            <hr className={`m-0`}/>
            <div className={`${style.heightFooter} row align-items-center`}>
                <AgreePersonalData/>
                <FooterInBtn/>
            </div>
        </>
    );
};

export default SignInForm;