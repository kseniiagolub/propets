import React from 'react';
import NavHome from "./NavHome";
import NewsWallHome from "./NewsWallHome";
import PromoHome from "./PromoHome";

const MainHome = () => {
    return (
        <main className={'container-fluid'}>
            <div className={'row justify-content-center align-items-center'}>
                <NavHome/>
                <NewsWallHome/>
                <PromoHome/>
            </div>
        </main>
    );
};

export default MainHome;