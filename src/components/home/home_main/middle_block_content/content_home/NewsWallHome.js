import React from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css';
import PostCard from "./PostCard";

const NewsWallHome = () => {
    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-7 align-items-center overflow-auto`}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    );
};

export default NewsWallHome;