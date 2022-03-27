import React from 'react';
import lost_black from '../../../assets/png/lost_black.png';
import found from '../../../assets/png/found.png';
import style from '../../../css_moduls/home_css/lost_found_btn.module.css';
import {NavLink} from "react-router-dom";

const LostFoundBtn = () => {
    return (
        <div className={'col-4 d-flex justify-content-evenly'}>
            <NavLink to={'/lostpet'}>
                <button className={`${style.btnLost}`}>
                    <img className={`${style.iconBtnDark}`} src={lost_black} alt={'lost'}/>
                    <span className={'m-auto'}>I lost my pet</span>
                </button>
            </NavLink>
            <NavLink to={'/foundpet'}>
                <button className={`${style.btnFound}`}>
                    <img className={`${style.iconBtn}`} src={found} alt={'found'}/>
                    <span className={'m-auto'}>I found a pet</span>
                </button>
            </NavLink>

        </div>
    );
};

export default LostFoundBtn;