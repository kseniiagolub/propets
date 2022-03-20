import React from 'react';
import paw from '../../../assets/png/paw.png';
import style from '../../../css_moduls/registration_css/registration.footer.module.css';
import {useHistory} from "react-router-dom";

const FooterBtn = () => {

    const {push} = useHistory()

    return (
        <div className={'col-6 d-flex justify-content-evenly'}>
            <button className={`${style.btnCancel}`} onClick={() => push('/')}>Cancel</button>
            <button className={`${style.btnSubmit}`}>
                <img className={` ${style.paw}`} src={paw} alt={paw}/>
                <span className={'m-auto'}>Submit</span>
            </button>
        </div>
    );
};

export default FooterBtn;