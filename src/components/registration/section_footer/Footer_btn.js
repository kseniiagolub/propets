import React from 'react';
import paw from '../../../assets/png/paw.png';
import style from '../../../css_moduls/registration_css_moduls/registration.footer.module.css';


const FooterBtn = () => {
    return (
        <div>
            <button className={`${style.btnCancel}`}>Cancel</button>
            <button className={`${style.btnSubmit}`}>
                <img src={paw} alt={paw}/>
                <p>Submit</p>
            </button>
        </div>
    );
};

export default FooterBtn;