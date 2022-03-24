import React, {useState} from 'react';
import style from '../../../css_moduls/registration_css/registration.main.module.css';
import {useDispatch} from "react-redux";
import AgreePersonalData from "../section_footer/AgreePersonalData";
import Footer_UpBtn from "../section_footer/Footer_UpBtn";

const SignUpForm = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [passwordFirst, setPasswordFirst] = useState()
    const [passwordSecond, setPasswordSecond] = useState()

    const compare = (passwordFirst, passwordSecond) => {
        if(passwordFirst !== passwordSecond) {
            alert('log')
        }
        dispatch({type: 'SET_USER_PASSWORD', payload: passwordSecond})
    }

    return (
        <>
            <div className={`${style.heightFormRegister} ${style.marginUpForm} row align-items-center`}>
                <div className={'col-6'}>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="name">Name:</label>
                        <input className={'col-8'} type="text" placeholder="Helen Johnson" name="name"
                               onChange={(e => setName(e.target.value))} required
                               onBlur={() => dispatch({type: 'SET_USER_NAME', payload: name})}/>
                    </div>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="email">Email:</label>
                        <input className={'col-8'} type="email" placeholder="helenjohnson@gmail.com" name="email"
                               onChange={(e => setEmail(e.target.value))} required
                               onBlur={() => dispatch({type: 'SET_USER_EMAIL', payload: email})}/>
                    </div>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw"
                               onChange={(e => setPasswordFirst(e.target.value))} required/>
                    </div>
                    <div>
                        <label className={'col-3 text-end'} htmlFor="psw">Password:</label>
                        <input className={'col-8'} type="password" placeholder="*****************" name="psw"
                               onChange={(e => setPasswordSecond(e.target.value))} required
                               onBlur={() => compare(passwordFirst, passwordSecond)}/>
                    </div>
                </div>
                <div className={`${style.textPwd} col-6 d-flex flex-column justify-content-center`}>
                    <p>Password must have at least 8 characters with at least one Capital letter, at least one lower
                        case
                        letter and at least one number or special character.</p>
                    <p>Please re-enter your password</p>
                </div>
            </div>
            <hr className={`m-0`}/>
            <div className={`${style.heightFooter} row align-items-center`}>
                <AgreePersonalData/>
                <Footer_UpBtn/>
            </div>
        </>
    );
};

export default SignUpForm;