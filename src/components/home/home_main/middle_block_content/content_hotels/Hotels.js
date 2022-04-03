import React, {useEffect} from 'react';
import style from "../../../../../css_moduls/home_css/home.module.css";
import {useDispatch} from "react-redux";

const Hotels = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: false, header: false}})
    })

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto`}>
            <p className={`${style.titleSemiBold}`}>
                <span className={`${style.titleBold}`}>Hotels. </span>
                Go to vacations — we’ll take care of your pet!
            </p>
        </div>
    );
};

export default Hotels;