import React from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css';
import {Route, Switch} from "react-router-dom";
import NavHome from "../../left_block_nav/NavHome";
import PromoHome from "../../right_block_promo/PromoHome";
import NewsWallHome from "./NewsWallHome";
import Lost from "../content_lost/Lost"
import Found from "../content_found/Found"
import Hotels from "../content_hotels/Hotels"
import Walking from "../content_walking/Walking"
import Favorites from "../content_favorites/Favorites";
import Fostering from "../content_fostering/Fostering";
import VetHelp from "../content_vethelp/VetHelp";

const MainHome = () => {
    return (
        <main className={'container-fluid'}>
            <div className={`${style.mainGreenBack} row justify-content-center align-items-center`}>
                <div className={`${style.heightMain} col-10 d-flex`}>
                    <NavHome/>
                    <Switch>
                        <Route exact path={'/main/home'} component={NewsWallHome}/>
                        <Route exact path={'/main/lost'} component={Lost}/>
                        <Route exact path={'/main/found'} component={Found}/>
                        <Route exact path={'/main/hotels'} component={Hotels}/>
                        <Route exact path={`/main/walking`} component={Walking}/>
                        <Route exact path={'/main/fostering'} component={Fostering}/>
                        <Route exact path={'/main/vethelp'} component={VetHelp}/>
                        <Route exact path={'/main/favorites'} component={Favorites}/>
                    </Switch>
                    <PromoHome/>
                </div>
            </div>
        </main>
    );
};

export default MainHome;