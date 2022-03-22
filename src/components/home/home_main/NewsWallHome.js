import React from 'react';
import Hotels from "./services_home_main/Hotels";

const NewsWallHome = () => {
    return (
        <div className={`d-flex flex-column col-5 justify-content-center align-items-center`}>
            <Hotels/>
            <div>post 1</div>
            <div>post 2</div>
            <div>post 3</div>
        </div>
    );
};

export default NewsWallHome;