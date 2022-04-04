import React, {useEffect, useState} from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css';
import {useDispatch} from "react-redux";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../../../../utils/firebase";
import avatar from "../../../../../assets/png/avatar.jpg";
import map_marker from "../../../../../assets/png/map-marker.png";
import phone from '../../../../../assets/png/phone.png';
import fb from '../../../../../assets/png/facebook.png';
import email from '../../../../../assets/png/email.png';

const Lost = () => {

    const dispatch = useDispatch()
    const [base, setBase] = useState([])
    const baseCollectionRefTree = query(collection(db, "lost"), where("found", "==", false));

    function sortObject(field) {
        return (a, b) => a[field] < b[field] ? 1 : -1;
    }

    const getBase = async () => {
        const data = await getDocs(baseCollectionRefTree)
        setBase(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('data')));
    }

    useEffect(() => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: true, header: false}})
        getBase()
    }, [])

    const timePost = () => {
        const date = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return date.toLocaleString("en-US", options)
    }


    return (
        <div className={`${style.mainWhiteBack} pb-2 pt-2 d-flex flex-column col-6 align-items-center overflow-auto`}>
            <div className={`${style.blockBtns} d-flex flex-row justify-content-evenly`}>
                <button className={`${style.searchBtn} ${style.smallBtn}`}>Type</button>
                <button className={`${style.searchBtn} ${style.smallBtn}`}>Breed</button>
                <button className={`${style.searchBtn} ${style.bigBtn}`}>Additional features</button>
            </div>
            <div className={`${style.blockWall} overflow-auto`}>
                {base.map((user, index) => {
                    return <div className={`${style.postCard} d-flex`} key={index}>
                        <div className={`col-5`}>
                            <img className={`${style.imgPreview}`} src={user.Images[0]} alt={user.Type}/>
                        </div>
                        <div className={`col-7 ps-3 pe-3`}>
                            <span className={`${style.titleBigBold}`}>{user.Type}, {user.Breed}</span>
                            <div className={`d-flex`}>
                                <div className={`col-6`}>
                                    <h2 className={`${style.smallerTextGreen}`}>Color: <span
                                        className={`${style.smallerTextBlack}`}>{user.Color}</span></h2>
                                    <h2 className={`${style.smallerTextGreen}`}>Sex: <span
                                        className={`${style.smallerTextBlack}`}>{user.Sex}</span></h2>
                                    <h2 className={`${style.smallerTextGreen}`}>Height: <span
                                        className={`${style.smallerTextBlack}`}>{user.Height}</span></h2>
                                </div>
                                <div className={`col-6`}>
                                    <h2 className={`${style.smallerTextGreen}`}>Distinctive features <span
                                        className={`${style.smallerTextBlack}`}>{user.Features}</span></h2>
                                </div>
                            </div>
                            <div>
                                <h2 className={`${style.smallerTextGreen}`}>Description: <span
                                    className={`${style.smallerTextBlack}`}>{user.Description}</span></h2>
                            </div>
                            <hr className={`mt-3 mb-0`}/>
                            <div className={`mb-2`}>
                                <img className={`${style.mapMarker}`} src={map_marker} alt={''}/>
                                <span className={`${style.smallerTextBlack}`}>{user.Location}</span>
                            </div>
                            <div className={`d-flex`}>
                                <div className={`${style.avatarImg} col-1`}>
                                    <img src={avatar} alt={''}/>
                                </div>
                                <div className={`d-flex flex-column col-7 ps-3`}>
                                    <div>
                                        <span className={`${style.titleSemiBoldGreen}`}>{user.Name}</span>
                                    </div>
                                    <div>
                                        <span className={`${style.smallerTextBlack}`}>{user.dateString}</span>
                                    </div>
                                </div>
                                <div className={`col-4 d-flex justify-content-evenly align-items-center`}>
                                    <a href={`tel: ${user.Contacts[0]}`}><img className={`${style.contactsBtn}`} src={phone} alt={''}/></a>
                                    <a href={`https://${user.Contacts[2]}`} target={'_blank'}><img className={`${style.contactsBtnFb}`} src={fb} alt={''}/></a>
                                    <a href={`mailto: ${user.Contacts[1]}`}><img className={`${style.contactsBtn} mt-1`} src={email} alt={''}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Lost;