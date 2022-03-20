import React from 'react';
import Header from "../components/start_components/header/Header";
import Main from "../components/start_components/main/Main";
import Footer from "../components/start_components/footer/Footer";
import Registration from "../components/registration/Registration";

const StartPage = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
            {/*<Registration/>*/}
        </div>
    );
};

export default StartPage;