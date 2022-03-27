import React from 'react';
import style from '../../../../css_moduls/home_css/home.module.css';
import homeImg from '../../../../assets/png/home.png';
import lostImg from '../../../../assets/png/lost_black.png';
import foundImg from '../../../../assets/png/paw_black.png';
import starImg from '../../../../assets/png/star.png';
import avatar from '../../../../assets/png/avatar.jpg';
import logout from '../../../../assets/png/logout.png';
import ElementList from "./ElementList";
import DropMenu from "./DropMenu";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAuth, signOut} from "firebase/auth";

const NavHome = () => {

    const dispatch = useDispatch()
    const {push} = useHistory()

    const logOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch({
                    type: 'SET_USER', payload: {
                        email: null,
                        id: null,
                        token: null
                    }
                })
                push('/')
            }).catch((error) => {
            console.log(error.message)
        });

    };
    return (
        <div className={`${style.mainGreenBack} col-3 pt-3`}>
            <nav className={'d-flex flex-column col-5 m-auto mb-5'}>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center ps-1`} to='/home'><ElementList img={homeImg} name='Home'/></NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center ps-1`} to='/lost'><ElementList img={lostImg} name='Lost'/></NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center ps-1`} to='/found'><ElementList img={foundImg} name='Found'/></NavLink>
                <DropMenu/>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center ps-1`} to={'/favorites'}><ElementList img={starImg} name='Favorites'/></NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center ps-1`} to={'/foundpet'}><ElementList img={starImg} name='Favorites'/></NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center ps-1`} to={'/lostpet'}><ElementList img={starImg} name='Favorites'/></NavLink>
            </nav>

            <div>
                <div className={`${style.gorizontLine} m-auto mb-3`}/>
                <div className={`d-flex align-items-center col-5 m-auto mb-5`}>
                    <div className={`${style.imgUser} me-2`}><img src={avatar} alt={'avatar'}/></div>
                    <div className={`d-flex flex-wrap w-25`}>
                        <a className={`${style.aColor} m-0`}>Anton Golub</a>
                    </div>
                </div>
                <div className={`col-5 m-auto mb-3`}>
                    <a className={`${style.btnLogout} mb-3`} onClick={() => logOut()}>
                        <img className={`${style.iconBtn}`} src={logout} alt={'logout'}/>Logout</a>
                </div>
                <div className={`${style.gorizontLine} m-auto`}/>
            </div>
        </div>
    );
};

export default NavHome;