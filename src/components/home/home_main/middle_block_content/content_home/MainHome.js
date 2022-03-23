import React from 'react';
import NavHome from "../../left_block_nav/NavHome";
import NewsWallHome from "./NewsWallHome";
import PromoHome from "../../right_block_promo/PromoHome";
import style from '../../../../../css_moduls/home_css/home.module.css';

const MainHome = () => {
    return (
        <main className={'container-fluid'}>
            <div className={`${style.mainGreenBack} row justify-content-center align-items-center`}>
                <div className={`${style.heightMain} col-10 d-flex`}>
                    <NavHome/>
                    <NewsWallHome/>
                    <PromoHome/>
                </div>
            </div>
        </main>
    );
};

export default MainHome;