import React, {useEffect} from 'react';
import style from "../../../../../css_moduls/home_css/home.module.css";
import {useDispatch} from "react-redux";

const Walking = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: false, header: false}})
    })

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto`}>
            <h1>Walking</h1>
        </div>
    );
};

export default Walking;