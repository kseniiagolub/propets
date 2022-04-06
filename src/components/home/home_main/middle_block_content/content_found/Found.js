import React, {useEffect, useState} from 'react';
import style from "../../../../../css_moduls/home_css/home.module.css";
import {useDispatch} from "react-redux";
import {collection, getDocs, where, query} from "firebase/firestore";
import {db} from "../../../../../utils/firebase";
import avatar from "../../../../../assets/png/avatar.jpg";
import map_marker from '../../../../../assets/png/map-marker.png';
import phone from "../../../../../assets/png/phone.png";
import fb from "../../../../../assets/png/facebook.png";
import email from "../../../../../assets/png/email.png";
import {sortObject} from "../../../../../utils/utils";

const Found = () => {

    const [base, setBase] = useState([])
    const [type, setType] = useState('')
    const [breed, setBreed] = useState('')
    const [sex, setSex] = useState('')

    const dispatch = useDispatch()
    const baseCollectionRefTree = query(collection(db, "found"), where("found", "==", true));
    const baseCollectionTypeRef = query(collection(db, "found"), where("Type", "==", type));
    const baseCollectionBreedRef = query(collection(db, "found"), where("Breed", "==", breed));
    const baseCollectionFeaturesRef = query(collection(db, "found"), where("Sex", "==", sex));

    const getBaseFound = async () => {
        const data = await getDocs(baseCollectionRefTree)
        setBase(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('data')));
    }

    const getBaseType = async () => {
        const data = await getDocs(baseCollectionTypeRef)
        setBase(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('data')));
    }

    const getBaseBreed = async () => {
        const data = await getDocs(baseCollectionBreedRef)
        setBase(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('data')));
    }

    const getBaseFeatures = async () => {
        const data = await getDocs(baseCollectionFeaturesRef)
        setBase(data.docs.map(doc => ({...doc.data(), id: doc.id})).sort(sortObject('data')));
    }

    useEffect(() => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: true, header: false}})
        if (type !== '') {
            getBaseType()
        } else if (breed !== '') {
            getBaseBreed()
        } else if (sex !== '') {
            getBaseFeatures()
        } else {
            getBaseFound()
        }
    }, [type, breed, sex])


    return (
        <div className={`${style.mainWhiteBack} pb-2 pt-2 d-flex flex-column col-6 align-items-center`}>
            <div className={`${style.blockBtns} d-flex flex-row justify-content-evenly`}>
                <input placeholder='Type' className={`${style.searchBtn} ${style.smallBtn}`}
                       onChange={e => setType(e.target.value)}/>
                <input placeholder='Breed' className={`${style.searchBtn} ${style.smallBtn}`}
                       onChange={e => setBreed(e.target.value)}/>
                <input placeholder='Sex' className={`${style.searchBtn} ${style.bigBtn}`}
                       onChange={e => setSex(e.target.value)}/>
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
                                    <a href={`tel: ${user.Contacts[0]}`}><img className={`${style.contactsBtn}`}
                                                                              src={phone} alt={''}/></a>
                                    <a href={`https://${user.Contacts[2]}`} target={'_blank'}><img
                                        className={`${style.contactsBtnFb}`} src={fb} alt={''}/></a>
                                    <a href={`mailto: ${user.Contacts[1]}`}><img className={`${style.contactsBtn} mt-1`}
                                                                                 src={email} alt={''}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Found;