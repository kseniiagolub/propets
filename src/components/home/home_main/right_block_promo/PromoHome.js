import React, {useCallback, useEffect, useState} from 'react';
import style from '../../../../css_moduls/home_css/home.module.css';
import img_dental_care from '../../../../assets/png/dental_care.png';
import img_pet_hotel from '../../../../assets/png/pet_hotel.png';
import img_pet_hotel_2 from '../../../../assets/png/pet_hotel_2.png';
import {useSelector} from "react-redux";
import {defaultCenter, getBrowserLocation} from "../../../../geolocation";
import {useJsApiLoader} from "@react-google-maps/api";
import {googleConfig} from "../../../../google";
import Map from "../../../../Map";

const PromoHome = () => {

    const [center, setCenter] = useState(defaultCenter)

    const libraries = ['places']

    const {isLoaded} = useJsApiLoader({
        id: 'google-Map-script',
        googleMapsApiKey: googleConfig,
        libraries
    })

    const onPlaceSelect = useCallback((coordinates) => {
        setCenter(coordinates)
    }, [])

    useEffect(() => {
        getBrowserLocation()
            .then((curLoc) => {
                setCenter(curLoc)
            })
            .catch((defaultLocation) => {
                setCenter(defaultLocation)
            })
    }, [])

    const map = useSelector(state => state.map)

    if(map.map === false) {
        return (
            <div className={`${style.mainGreenBack} d-flex flex-column col-3 justify-content-start pb-2 pt-2 align-items-end`}>
                <img className={`m-auto`} src={img_dental_care} alt={'dental_care'}/>
                <img className={`m-auto`} src={img_pet_hotel} alt={'pet_hotel'}/>
                <img className={`m-auto`} src={img_pet_hotel_2} alt={'pet_hotel_2'}/>
            </div>
        );
    } else {
        return (
            <div className={`${style.mainWhiteBack} d-flex flex-column col-3 justify-content-start pb-2 pt-2 align-items-end`}>
                {isLoaded ? <Map center={center}/> : <h1>Loading</h1>}
            </div>
        )
    }
};

export default PromoHome;