import React from 'react';
import HomeHeader from "../components/home/home_header/HomeHeader";
import MainHome from "../components/home/home_main/middle_block_content/content_home/MainHome";
import {useAuth} from "../hooks"
import {Redirect} from "react-router-dom";

const HomePage = () => {

    const {isAuth} = useAuth();
    console.log(isAuth)

    return isAuth ? (
        <>
            <HomeHeader/>
            <MainHome/>
        </>
    ) : (
        <Redirect to='/'/>
    );
};

export default HomePage;