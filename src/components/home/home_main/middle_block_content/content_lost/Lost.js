import React, {useEffect} from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css';
import {useDispatch} from "react-redux";

const Lost = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: true, header: false}})
    })

    return (
        <div className={`${style.mainWhiteBack} pb-2 pt-2 d-flex flex-column col-6 align-items-center overflow-auto`}>
            <div className={`${style.blockBtns} d-flex flex-row justify-content-evenly`}>
                <button className={`${style.searchBtn} ${style.smallBtn}`}>Type</button>
                <button className={`${style.searchBtn} ${style.smallBtn}`}>Breed</button>
                <button className={`${style.searchBtn} ${style.bigBtn}`}>Additional features</button>
            </div>
            <div className={`${style.blockWall}`}>
                <h1>Lost</h1>
            </div>
        </div>
    );
};

export default Lost;