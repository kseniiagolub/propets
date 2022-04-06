import React, {useEffect, useState} from 'react';
import HomeHeader from "../components/home/home_header/HomeHeader";
import MainHome from "../components/home/home_main/middle_block_content/content_home/MainHome";
import {getAuth, onAuthStateChanged, updateProfile} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";

const HomePage = () => {

    const auth = getAuth();
    const dispatch = useDispatch()
    const user = useSelector(state => state.registration)

    const update = () => {
        if (user.name !== null) {
            updateProfile(auth.currentUser, {
                displayName: user.name
            })
                .then()
                .catch((error) => {
                    console.log(error)
                });
            onAuthStateChanged(auth, (user) => {
                dispatch({type: 'SET_INFO_USER', payload: {name: user.name, id: user.uid}})
            })
        } else {
            onAuthStateChanged(auth, (user) => {
                dispatch({type: 'SET_INFO_USER', payload: {name: user.displayName, id: user.uid}})
            })
        }
    }

    useEffect(() => {
        update()
    }, [])

    return (
        <>
            <HomeHeader/>
            <MainHome/>
        </>
    )
}

export default HomePage;