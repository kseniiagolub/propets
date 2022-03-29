import React from 'react';
import HomeHeader from "../components/home/home_header/HomeHeader";
import MainHome from "../components/home/home_main/middle_block_content/content_home/MainHome";
import {getAuth, updateProfile} from "firebase/auth";
import {useSelector} from "react-redux";

const HomePage = () => {

    const auth = getAuth()
    const name = useSelector(state => state.registration)

    const update = () => {
        if (name.name !== null) {
            updateProfile(auth.currentUser, {
                displayName: name.name
            })
                .then()
                .catch((error) => {
                    console.log(error)
                });
        }
    }

    update()

    return (
        <>
            <HomeHeader/>
            <MainHome/>
        </>
    )
}

export default HomePage;


// if (name.name !== null) {
//     updateProfile(auth.currentUser, {
//         displayName: name.name
//     })
//         .then()
//         .catch((error) => {
//             console.log(error)
//         });
//     return (
//         <>
//             <HomeHeader/>
//             <MainHome name={name.name}/>
//         </>
//     )
// } else {
//     return (
//         <>
//             <HomeHeader/>
//             <MainHome name={auth.currentUser.displayName}/>
//         </>
//     )
// }