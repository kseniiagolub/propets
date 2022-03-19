import React from 'react';
import style from '../../../../css_moduls/start_css/section_welcome.module.css'

const JoinText = () => {
    return (
        <div className={'col-10'}>
            <p className={`${style.pJoin}`}>I'm okay, just want to <a className={`${style.join}`}>join</a> the pawsome community</p>
        </div>
    );
};

export default JoinText;