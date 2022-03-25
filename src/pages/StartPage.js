import React from 'react';
import Header from "../components/start_components/header/Header";
import Main from "../components/start_components/main/Main";
import Footer from "../components/start_components/footer/Footer";
import {getAuth} from "firebase/auth";

const StartPage = () => {

    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};

export default StartPage;