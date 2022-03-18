import React from 'react';
import style from '../../../css_moduls/css_start/section_tagline.module.css'

const SectionTagline = () => {
    return (
        <section className={`${style.tagline} container-fluid mb-5`}>
            <div className={`row justify-content-center`}>
                    <p>Our fluffy space for lovers, admirers, dads and</p>
                    <p>moms of our four-legged, winged, tailed guys.</p>
            </div>
        </section>
    );
};

export default SectionTagline;