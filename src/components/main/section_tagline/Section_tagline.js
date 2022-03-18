import React from 'react';
import style from '../../../css_moduls/section_tagline.module.css'

const SectionTagline = () => {
    return (
        <section className={`${style.tagline} container-fluid`}>
            <div className={`row justify-content-center`}>
                    <p>Our fluffy space for lovers, admirers, dads and</p>
                    <p>moms of our four-legged, winged, tailed guys.</p>
            </div>
            <h1>test text</h1>
        </section>
    );
};

export default SectionTagline;