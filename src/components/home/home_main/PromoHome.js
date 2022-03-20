import React from 'react';
import style from '../../../css_moduls/home_css/home.module.css';
import img_dental_care from '../../../assets/png/dental_care.png';
import img_pet_hotel from '../../../assets/png/pet_hotel.png';
import img_pet_hotel_2 from '../../../assets/png/pet_hotel_2.png';

const PromoHome = () => {
    return (
        <div className={`${style.mainGreenBack} d-flex flex-column col-3 justify-content-start pb-2 pt-2`}>
            <img className={`${style.promoImg}`} src={img_dental_care} alt={'dental_care'}/>
            <img className={`${style.promoImg}`} src={img_pet_hotel} alt={'pet_hotel'}/>
            <img className={`${style.promoImgSmall}`} src={img_pet_hotel_2} alt={'pet_hotel_2'}/>
        </div>
    );
};

export default PromoHome;