import React from 'react';
import paw from '../../../assets/png/paw.png';
import style from '../../../css_moduls/registration_css/registration.footer.module.css';
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

const FooterUpBtn = () => {

    const register = useSelector(state => state.registration)
    const dispatch = useDispatch();
    const {push} = useHistory()
    const auth = getAuth();

    const Registration = (email, password) => {
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
                push('/main/home')
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <div className={'col-6 d-flex justify-content-evenly'}>
            <Link className={`${style.btnCancel} d-flex mb-2 align-items-center justify-content-center`}
                  to='/'>Cancel</Link>
            <button className={`${style.btnSubmit}`} onClick={() => Registration(register.email, register.password)}>
                <img className={` ${style.paw}`} src={paw} alt={paw}/>
                <span className={'m-auto'}>Submit</span>
            </button>
        </div>
    );
};

export default FooterUpBtn;