import React, {useState} from 'react';
import style from '../../../../css_moduls/home_css/home.module.css';
import homeImg from '../../../../assets/png/home.png';
import lostImg from '../../../../assets/png/lost_black.png';
import foundImg from '../../../../assets/png/paw_black.png';
import starImg from '../../../../assets/png/star.png';
import avatar from '../../../../assets/png/avatar.jpg';
import logout from '../../../../assets/png/logout.png';
import ElementList from "./ElementList";
import DropMenu from "./DropMenu";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

const NavHome = () => {

    const dispatch = useDispatch()

    return (
        <div className={`${style.mainGreenBack} col-2 mt-3`}>
            <nav className={'d-flex flex-column'}>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center`} to='/main/home'><ElementList img={homeImg} name='Home'/></NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center`} to='/main/lost'><ElementList img={lostImg} name='Lost'/></NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center`} to='/main/found'><ElementList img={foundImg} name='Found'/></NavLink>
                <DropMenu/>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center`} to={'/main/favorites'}><ElementList img={starImg} name='Favorites'/></NavLink>
            </nav>

            <div>
                <div className={`${style.gorizontLine} mb-3`}/>
                <div className={`d-flex align-items-center mb-5`}>
                    <div className={`${style.imgUser} me-2`}><img src={avatar} alt={'avatar'}/></div>
                    <div className={`d-flex flex-wrap w-25`}>
                        <a className={`${style.aColor} m-0`}>Anton Golub</a>
                    </div>
                </div>
                <a className={`${style.btnLogout} col-4 mb-3`} onClick={() => dispatch({
                    type: 'SET_USER', payload: {
                        email: null,
                        id: null,
                        token: null
                    }
                })}>
                    <img className={`${style.iconBtn}`} src={logout} alt={'logout'}/>Logout</a>
                <div className={`${style.gorizontLine}`}/>
            </div>
        </div>
    );
};

export default NavHome;