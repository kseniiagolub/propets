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
import avatar from '../../../assets/png/avatar.jpg'

const NavHome = () => {

    const [dropdown, setDropdown] = useState(false)
    let disp = dropdown ? 'd-block' : 'd-none'

    return (
        <div className={`${style.mainGreenBack} col-2 mt-3`}>
            <nav className={'d-flex flex-column'}>
                <button className={`${style.navBtn} d-flex mb-2`}>
                    <div>
                        <img className={`${style.iconBtn} me-2`} src={homeImg} alt={'Home'}/>
                        <span>Home</span>
                    </div>
                </button>
                <button className={`${style.navBtn} d-flex mb-2`}>
                    <div>
                        <img className={`${style.iconBtn} me-2`} src={lostImg} alt={'Lost'}/>
                        <span>Lost</span>
                    </div>
                </button>
                <button className={`${style.navBtn} d-flex mb-2`}>
                    <div>
                        <img className={`${style.iconBtn} me-2`} src={foundImg} alt={'Found'}/>
                        <span>Found</span>
                    </div>
                </button>
                <button className={`${style.navBtn} d-flex mb-2`} onClick={() => setDropdown(!dropdown)}>
                    <div>
                        <img className={`${style.iconBtn} me-2`} src={megafonImg} alt={'Services'}/>
                        <span>Services</span>
                    </div>
                </button>
                <div className={`${style.dropdownContainer} ${disp} d-flex flex-column`}>
                    <button className={`${style.navBtn} d-flex mb-2`}>
                        <div className={`d-flex`}>
                            <div className={`${style.widthImg} me-2`}>
                                <img src={hotelsImg} alt={'Hotels'}/>
                            </div>
                            <span>Hotels</span>
                        </div>
                    </button>
                    <button className={`${style.navBtn} d-flex mb-2`}>
                        <div className={`d-flex`}>
                            <div className={`${style.widthImg} me-2`}>
                                <img src={walkingImg} alt={'Walking'}/>
                            </div>
                            <span>Walking</span>
                        </div>
                    </button>
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
                <button className={`${style.navBtn} d-flex`}>
                    <div>
                        <img className={`${style.iconBtn} me-2`} src={starImg} alt={'Favorites'}/>
                        <span>Favorites</span>
                    </div>
                </button>
            </nav>

            <div>
                <div className={`${style.gorizontLine} mb-3`}/>
                <div className={`d-flex align-items-center mb-5`}>
                    <div className={`${style.imgUser} me-2`}><img src={avatar}/></div>
                    <div className={`d-flex flex-wrap w-75`}>
                        <a className={`${style.aColor} m-0`}>Aleksandr Golub</a>
                    </div>
                </div>
                <a className={`${style.btnLogout} col-4 mb-3`}>logout</a>
                <div className={`${style.gorizontLine}`}/>
            </div>
        </div>
    );
};

export default NavHome;