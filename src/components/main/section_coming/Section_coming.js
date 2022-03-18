import React from 'react';
import Comming from "./Comming";
import About_coming from "./About_coming";
import Logo from "./Logo";
import style from '../../../css_moduls/section_coming.module.css'

const SectionComing = () => {
    return (
        <section className={`${style.colorSection} container-fluid`}>
            <div className={`row justify-content-center align-items-center`}>
                <div className={'d-flex col-10 align-items-center'}>
                    <Comming/>
                    <div className={`row align-items-center col-8 justify-content-end`}>
                        <About_coming/>
                        <Logo/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionComing;