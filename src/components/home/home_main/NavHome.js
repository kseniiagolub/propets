import React, {useState} from 'react';
import style from '../../../css_moduls/home_css/home.module.css';
import homeImg from '../../../assets/png/home.png';
import lostImg from '../../../assets/png/lost_black.png';
import foundImg from '../../../assets/png/paw_black.png';
import starImg from '../../../assets/png/star.png';
import avatar from '../../../assets/png/avatar.jpg'
import ElementList from "./ElementList";
import DropMenu from "./DropMenu";

const NavHome = () => {

    return (
        <div className={`${style.mainGreenBack} col-2 mt-3`}>
            <nav className={'d-flex flex-column'}>
                <ElementList img={homeImg} name='Home'/>
                <ElementList img={lostImg} name='Lost'/>
                <ElementList img={foundImg} name='Found'/>
                <DropMenu/>
                <ElementList img={starImg} name='Favorites'/>
            </nav>

            <div>
                <div className={`${style.gorizontLine} mb-3`}/>
                <div className={`d-flex align-items-center mb-5`}>
                    <div className={`${style.imgUser} me-2`}><img src={avatar}/></div>
                    <div className={`d-flex flex-wrap w-25`}>
                        <a className={`${style.aColor} m-0`}>Anton Golub</a>
                    </div>
                </div>
                <a className={`${style.btnLogout} col-4 mb-3`}>logout</a>
                <div className={`${style.gorizontLine}`}/>
            </div>
        </div>
    );
};

export default NavHome;