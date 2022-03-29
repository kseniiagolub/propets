import React, {useEffect} from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css';
import PostCard from "./PostCard";
import {useDispatch} from "react-redux";

const NewsWallHome = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: false, header: false}})
    })

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto`}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    );
};

export default NewsWallHome;