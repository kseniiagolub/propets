import React, {useState} from 'react';
import style from '../../../css_moduls/home_css/home.module.css';

const NavHome = () => {

   const [dropdown, setDropdown] = useState(false)
    let disp = '';
    if (!dropdown) {
        disp = 'd-none'
    } else
        disp = 'd-block'

    return (
        <nav className={`${style.mainGreenBack} d-flex flex-column col-3 align-items-center pb-2 pt-2`}>
            <div>
                <p><a href={'#'}>Home</a></p>
                <p><a href={'#'}>Lost</a></p>
                <p><a href={'#'}>Found</a></p>
                {/*<a href={'#'}>Services</a>*/}
                <button className={`${style.dropdownBtn}`} onClick={()=>setDropdown(!dropdown)}>Services</button>
                <div className={`${style.dropdownContainer} ${disp}`}>
                    <p><a href={'#'}>Hotels</a></p>
                    <p><a href={'#'}>Walking</a></p>
                    <p><a href={'#'}>Fostering</a></p>
                    <p><a href={'#'}>VetHelp</a></p>
                </div>
                <p><a href={'#'}>Favorites</a></p>
            </div>

            <hr/>
            <div>photo + name</div>
            <button>logout</button>
            <hr/>
        </nav>
    );
};

export default NavHome;