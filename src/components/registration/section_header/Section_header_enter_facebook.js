import React from 'react';
import style from '../../../css_moduls/registration_css/section_header.module.css';
import facebook from '../../../assets/png/facebook.png'


const SectionHeaderEnterFacebook = () => {
    return (
        <div className={'col-5'}>
            <button className={`${style.btnFacebook}`}>
                <img className={`${style.fb}`} src={facebook} alt={'facebook'}/>
                <span className={'m-auto'}>Enter with Facebook</span>
            </button>
        </div>
    );
};

export default SectionHeaderEnterFacebook;