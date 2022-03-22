import React from 'react';
import {Redirect} from "react-router-dom";
import Home from "../components/home/Home";

const HomePage = () => {
    return (
        <>
            {/*<Redirect to='/authorization'/>*/}
            <Home/>
        </>
    );
};

export default HomePage;