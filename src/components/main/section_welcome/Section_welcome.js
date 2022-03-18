import React from 'react';
import style from "../../../css_moduls/section_welcome.module.css";
import Main_title from "./Main_title";
import Registration_links from "./Registration_links";
import Dog_img from "./Dog_img";
import Join_text from "./Join_text";

const SectionWelcome = () => {
    return (
        <section className={'container-fluid'}>
            <div className={'row justify-content-center'}>
                <div className={'col-10 d-flex justify-content-between'}>
                    <div className={`${style.welcomeTextSize}`}>
                        <Main_title/>
                        <Registration_links/>
                    </div>
                    <Dog_img/>
                </div>
                <Join_text/>
            </div>
        </section>
    );
};

export default SectionWelcome;