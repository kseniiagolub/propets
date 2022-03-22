import React from 'react';
import style from '../../../css_moduls/home_css/home.module.css';

const NewsWallHome = () => {
    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-7 justify-content-center align-items-center`}>
            <div>post 1</div>
            <div>post 2</div>
            <div>post 3</div>
        </div>
    );
};

export default NewsWallHome;