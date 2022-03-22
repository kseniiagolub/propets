import React, {useState} from 'react';
import style from '../../../css_moduls/home_css/home.module.css';
import homeImg from '../../../assets/png/home.png';
import lostImg from '../../../assets/png/lost_black.png';
import foundImg from '../../../assets/png/paw_black.png';
import megafonImg from '../../../assets/png/megafon.png';
import starImg from '../../../assets/png/star.png';
import hotelsImg from '../../../assets/png/hotels.png';
import walkingImg from '../../../assets/png/walking.png';
import fosteringImg from '../../../assets/png/fostering.png';
import vetHelpImg from '../../../assets/png/vetHelp.png';

const NavHome = () => {

    const [dropdown, setDropdown] = useState(false)
    let disp
    disp = dropdown ? 'd-block' : 'd-none'

    return (
        <div className={`${style.mainGreenBack} d-flex flex-column col-2 align-items-center pb-2 pt-2`}>
            <nav className={'d-flex flex-column justify-content-end'}>
                <button className={`${style.navBtn}`}>
                    <div>
                        <img className={`${style.iconBtn}`} src={homeImg} alt={'Home'}/>
                        <span>Home</span>
                    </div>
                </button>
                <button className={`${style.navBtn}`}>
                    <div>
                        <img className={`${style.iconBtn}`} src={lostImg} alt={'Lost'}/>
                        <span>Lost</span>
                    </div>
                </button>
                <button className={`${style.navBtn}`}>
                    <div>
                        <img className={`${style.iconBtn}`} src={foundImg} alt={'Found'}/>
                        <span>Found</span>
                    </div>
                </button>
                <button className={`${style.navBtn}`} onClick={() => setDropdown(!dropdown)}>
                    <div>
                        <img className={`${style.iconBtn}`} src={megafonImg} alt={'Services'}/>
                        <span>Services</span>
                    </div>
                </button>
                <div className={`${style.dropdownContainer} ${disp} d-flex flex-column`}>
                    <button>
                        <div>
                            <img src={hotelsImg} alt={'Hotels'}/>
                            <span>Hotels</span>
                        </div>
                    </button>
                    <button>
                        <div>
                            <img src={walkingImg} alt={'Walking'}/>
                            <span>Walking</span>
                        </div>
                    </button>
                    <button>
                        <div>
                            <img src={fosteringImg} alt={'Fostering'}/>
                            <span>Fostering</span>
                        </div>
                    </button>
                    <button>
                        <div>
                            <img src={vetHelpImg} alt={'VetHelp'}/>
                            <span>VetHelp</span>
                        </div>
                    </button>
                </div>
                <button className={`${style.navBtn}`}>
                    <div>
                        <img className={`${style.iconBtn}`} src={starImg} alt={'Favorites'}/>
                        <span>Favorites</span>
                    </div>
                </button>
            </nav>

            <hr/>
            <div>photo + name</div>
            <button>logout</button>
            <hr/>
        </div>
    );
};

export default NavHome;