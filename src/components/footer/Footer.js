import React from 'react';
import Footer_logo from "./Footer_logo";
import Social from "./Social";

const Footer = () => {
    return (
        <footer className={`container-fluid`}>
            <div className={'row justify-content-center align-items-center h-100'}>
                <div className={'col-10 d-flex justify-content-between'}>
                    <Footer_logo/>
                    <Social/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;