import React, {useEffect} from 'react';
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
                displayName: user.name,
                photoURL: 'https://firebasestorage.googleapis.com/v0/b/propets-f5334.appspot.com/o/avatar%2F715417e4-4e05-42d4-9ded-ce4429c93739?alt=media&token=6d173635-a4fb-46fe-ba3d-6036ab68e79e'
            })
                .then()
                .catch((error) => {
                    console.log(error)
                });
            onAuthStateChanged(auth, (user) => {
                dispatch({type: 'SET_INFO_USER', payload: {name: user.name, id: user.uid}})
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