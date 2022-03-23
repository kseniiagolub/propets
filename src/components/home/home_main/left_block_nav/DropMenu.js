import React, {useState} from 'react';
import style from "../../../../css_moduls/home_css/home.module.css";
import megafonImg from "../../../../assets/png/megafon.png";
import hotelsImg from "../../../../assets/png/hotels.png";
import walkingImg from "../../../../assets/png/walking.png";
import fosteringImg from "../../../../assets/png/fostering.png";
import vetHelpImg from "../../../../assets/png/vetHelp.png";
import {NavLink} from "react-router-dom";

const DropMenu = () => {

    const [dropdown, setDropdown] = useState(false)
    let disp = dropdown ? 'd-block' : 'd-none'

    return (
        <>
            <button className={`${style.navBtn} d-flex mb-2 p-0`} onClick={() => setDropdown(!dropdown)}>
                <div>
                    <img className={`${style.iconBtn} me-2`} src={megafonImg} alt={'Services'}/>
                    <span>Services</span>
                </div>
            </button>
            <div className={`${style.dropdownContainer} ${disp} d-flex flex-column`}>
                <NavLink className={`${style.navBtn} d-flex mb-2`} to='/main/hotels'>
                        <div className={`d-flex`}>
                            <div className={`${style.widthImg} me-2`}>
                                <img src={hotelsImg} alt={'Hotels'}/>
                            </div>
                            <span>Hotels</span>
                        </div>
                </NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2`} to='/main/walking'>
                        <div className={`d-flex`}>
                            <div className={`${style.widthImg} me-2`}>
                                <img src={walkingImg} alt={'Walking'}/>
                            </div>
                            <span>Walking</span>
                        </div>
                </NavLink>
                <button className={`${style.navBtn} d-flex mb-2`}>
                    <div className={`d-flex`}>
                        <div className={`${style.widthImg} me-2`}>
                            <img src={fosteringImg} alt={'Fostering'}/>
                        </div>
                        <span>Fostering</span>
                    </div>
                </button>
                <button className={`${style.navBtn} d-flex mb-2`}>
                    <div className={`d-flex`}>
                        <div className={`${style.widthImg} me-2`}>
                            <img src={vetHelpImg} alt={'VetHelp'}/>
                        </div>
                        <span>VetHelp</span>
                    </div>
                </button>
            </div>
        </>
    );
};

export default DropMenu;