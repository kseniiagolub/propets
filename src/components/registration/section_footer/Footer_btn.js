import React from 'react';
import paw from '../../../assets/png/paw.png';
import style from '../../../css_moduls/registration_css/registration.footer.module.css';
import {Link} from "react-router-dom";

const FooterBtn = () => {

    return (
        <div className={'col-6 d-flex justify-content-evenly'}>
            <Link to='/'><button className={`${style.btnCancel}`}>Cancel</button></Link>
            <button className={`${style.btnSubmit}`}>
                <img className={` ${style.paw}`} src={paw} alt={paw}/>
                <span className={'m-auto'}>Submit</span>
            </button>
        </div>
    );
};

export default FooterBtn;