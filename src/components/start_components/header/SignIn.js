import React from 'react';
import style from '../../../css_moduls/start_css/header.module.css'
import {useHistory} from "react-router-dom";

const SignIn = () => {

    const {push} = useHistory()

    return (
        <button className={`${style.btnSign}`} onClick={() => push('/authorization')}>
            Sign in
        </button>
    );
};

export default SignIn;