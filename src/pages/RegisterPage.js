import React from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import style from "../css_moduls/registration_css/registration.module.css";
import Section_header_logo from "../components/registration/section_header/Section_header_logo";
import Section_header_welcome from "../components/registration/section_header/Section_header_welcome";
import SingInUp from "../components/registration/section_main/SingInUp";
import Registration_footer from "../components/registration/section_footer/Registration_footer";

const RegisterPage = () => {

    const dispatch = useDispatch();
    const {push} = useHistory()
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch({
                    type: 'SET_USER', payload: {
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken
                    }
                })
                push('/')
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <section className={`${style.box} container-fluid pt-3`}>
            <Section_header_logo/>
            <Section_header_welcome/>
            <SingInUp/>
            <Registration_footer/>
        </section>
    );
};

export default RegisterPage;
