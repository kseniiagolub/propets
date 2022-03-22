import React from 'react';
import style from '../../css_moduls/home_css/home.module.css';
import HomeHeader from "./home_header/HomeHeader";
import MainHome from "./home_main/MainHome";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <MainHome/>
        </>
    );
};

export default Home;