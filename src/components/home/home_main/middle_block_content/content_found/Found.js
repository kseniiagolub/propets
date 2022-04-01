import React, {useEffect, useState} from 'react';
import style from "../../../../../css_moduls/home_css/home.module.css";
import {useDispatch} from "react-redux";
import {collection, getDocs, where, query} from "firebase/firestore";
import {db} from "../../../../../firebase";

const Found = () => {

    const [base, setBase] = useState([])
    const dispatch = useDispatch()
    const baseCollectionRefTree = query(collection(db, "found"), where("found", "==", true));

    function sortObject(field) {
        return (a, b) => a[field] < b[field] ? 1 : -1;
    }

    useEffect(() => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: true, header: false}})
        const getBase = async () => {
            const data = await getDocs(baseCollectionRefTree)
            setBase(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('data')));
        }
        getBase()
    }, [])

    return (
        <div className={`${style.mainWhiteBack} pb-2 pt-2 d-flex flex-column col-6 align-items-center`}>
            <div className={`${style.blockBtns} d-flex flex-row justify-content-evenly`}>
                <button className={`${style.searchBtn} ${style.smallBtn}`}>Type</button>
                <button className={`${style.searchBtn} ${style.smallBtn}`}>Breed</button>
                <button className={`${style.searchBtn} ${style.bigBtn}`}>Additional features</button>
            </div>
            <div className={`${style.blockWall} overflow-auto`}>
                {base.map((user, index) => {
                    return <div key={index}>
                        <img src={user.Images[0]}/>
                        <h1>Type: {user.Type}</h1>
                        <h2>Sex: {user.Sex}</h2>
                        <h2>Height: {user.Height}</h2>
                        <h2>Features: {user.Features}</h2>
                        <h2>Description: {user.Description}</h2>
                        <h2>Breed: {user.Breed}</h2>
                        <h2>Color: {user.Color}</h2>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Found;