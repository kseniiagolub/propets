import React from 'react';
import style from '../../../../css_moduls/home_css/home.module.css';
import img_dental_care from '../../../../assets/png/dental_care.png';
import img_pet_hotel from '../../../../assets/png/pet_hotel.png';
import img_pet_hotel_2 from '../../../../assets/png/pet_hotel_2.png';
import {useSelector} from "react-redux";

const PromoHome = () => {

    const map = useSelector(state => state.map)

    if(map.map === false) {
        return (
            <div className={`${style.mainGreenBack} d-flex flex-column col-3 justify-content-start pb-2 pt-2 align-items-end`}>
                <img className={`m-2`} src={img_dental_care} alt={'dental_care'}/>
                <img className={`m-2`} src={img_pet_hotel} alt={'pet_hotel'}/>
                <img className={`m-2`} src={img_pet_hotel_2} alt={'pet_hotel_2'}/>
            </div>
        );
    } else {
        return (
            <h1>Welcome</h1>
        )
    }
};

export default PromoHome;