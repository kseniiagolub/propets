import React from 'react';
import style from '../../../../css_moduls/start_css/section_welcome.module.css'
import {Link} from "react-router-dom";

const JoinText = () => {
    return (
        <div className={'col-10 mt-4 mb-4'}>
            <p className={`m-0`}>I'm okay, just want to <Link to='/authorization' className={`${style.join}`}>join</Link> the pawsome community</p>
        </div>
    );
};

export default JoinText;