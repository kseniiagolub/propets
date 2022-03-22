import React from 'react';
import style from '../../../css_moduls/home_css/home.module.css';
import PostCard from "./PostCard";

const NewsWallHome = () => {
    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-7 justify-content-center align-items-center overflow-scroll`}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    );
};

export default NewsWallHome;