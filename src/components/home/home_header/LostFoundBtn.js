import React from 'react';
import lost_black from '../../../assets/png/lost_black.png';
import found from '../../../assets/png/found.png';
import style from '../../../css_moduls/home_css/lost_found_btn.module.css';

const LostFoundBtn = () => {
    return (
        <div className={'col-6 d-flex justify-content-evenly'}>
            <button className={`${style.btnLost}`}>
                <img className={`${style.iconBtnDark}`} src={lost_black} alt={'lost'}/>
                <span className={'m-auto'}>I lost my pet</span>
            </button>
            <button className={`${style.btnFound}`}>
                <img className={`${style.iconBtn}`} src={found} alt={'found'}/>
                <span className={'m-auto'}>I found a pet</span>
            </button>
        </div>
    );
};

export default LostFoundBtn;