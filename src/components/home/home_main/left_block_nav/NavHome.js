import React from 'react';
import style from '../../../../css_moduls/home_css/home.module.css';
import homeImg from '../../../../assets/png/home.png';
import lostImg from '../../../../assets/png/lost_black.png';
import foundImg from '../../../../assets/png/paw_black.png';
import star_full from '../../../../assets/png/star_full.png';
import avatar from '../../../../assets/png/avatar.jpg';
import logout from '../../../../assets/png/logout.png';
import ElementList from "./ElementList";
import DropMenu from "./DropMenu";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAuth, signOut} from "firebase/auth";

const NavHome = () => {

    const dispatch = useDispatch()
    const {push} = useHistory()
    const auth = getAuth()
    const user = useSelector(state => state.user)

    const logOut = () => {
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
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center ps-1`} to='/home'
                         onClick={() => dispatch({type: 'SET_DROPDOWN', payload: {dropdown: false}})}><ElementList
                    img={homeImg} name='Home'/></NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center ps-1`} to='/lost'
                         onClick={() => dispatch({type: 'SET_DROPDOWN', payload: {dropdown: false}})}><ElementList
                    img={lostImg} name='Lost'/></NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2 align-items-center ps-1`} to='/found'
                         onClick={() => dispatch({type: 'SET_DROPDOWN', payload: {dropdown: false}})}><ElementList
                    img={foundImg} name='Found'/></NavLink>
                <DropMenu/>
                <NavLink className={`${style.navBtn} d-flex mb-5 align-items-center ps-1`} to={'/favorites'}
                         onClick={() => dispatch({type: 'SET_DROPDOWN', payload: {dropdown: false}})}><ElementList
                    img={star_full} name='Favorites'/></NavLink>
            </nav>
            <div>
                <div className={`${style.gorizontLine} m-auto mb-3`}/>
                <NavLink to={'/personalarea'} className={`d-flex align-items-center col-5 m-auto mb-5`}
                     onClick={() => dispatch({type: 'SET_DROPDOWN', payload: {dropdown: false}})}>
                    <div className={`${style.imgUser} me-2`}><img src={avatar} alt={'avatar'}/></div>
                    <div className={`d-flex flex-wrap w-25`}>
                        <a className={`${style.aColor} m-0`}>{user.name}</a>
                    </div>
                </NavLink>
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