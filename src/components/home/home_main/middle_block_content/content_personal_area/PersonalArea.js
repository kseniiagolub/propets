import React, {useEffect, useState} from 'react';
import style from "../../../../../css_moduls/home_css/home.module.css";
import avatar from "../../../../../assets/png/avatar.jpg";
import save from '../../../../../assets/png/save.png';
import pencil from '../../../../../assets/png/pencil.png';
import camera from '../../../../../assets/png/camera.png';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

const PersonalArea = () => {

    let user = localStorage.getItem('user')
    let initial = JSON.parse(user)
    const [state, setState] = useState(true)
    const [userName, setUserName] = useState(initial.displayName)
    const dispatch = useDispatch()

    console.log(initial)

    useEffect(() => {
        dispatch({type: 'CHANGE_NAME', payload: {name: userName}})
    }, [userName])

    console.log(user)

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold}`}><span className={`${style.titleBold}`}>Your profile. </span>Change,
                edit and manage your data.</h1>
            <div className={`${style.buttonsStyle} mt-4 p-0 row d-flex align-items-center`}>
                <button className={`${state ? `${style.active}` : ``} col-6`} onClick={() => setState(true)}>My
                    profile
                </button>
                <button className={`${state ? `` : `${style.active}`} col-6`}
                        onClick={() => setState(false)}>Activities
                </button>
            </div>
            {state ?
                <>
                    <div className={`${style.postCard} mt-0 row d-flex align-items-center`}>
                        <div className={`row d-flex align-items-center mt-3 ms-1 position-relative`}>
                            <div className={`${style.cameraDiv} position-absolute`}>
                                <img className={`${style.cameraImg}`} src={camera} alt={''}/>
                            </div>
                            <div className={`${style.avatarImg} col-1 `}>
                                <img src={avatar} alt={''}/>
                            </div>
                            <div className={`col-10 d-flex flex-row`}>
                                <input className={`${style.inputEditName} me-2`} type={'text'} name={'userName'}
                                       value={initial.displayName || ''}
                                       onChange={e => setUserName(e.target.value)}/>
                                <img className={`${style.iconEditName}`} src={pencil} alt={''}/>
                            </div>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-2 text-end`} htmlFor="email">Email:</label>
                            <input className={'col-6'} type="email" placeholder="helenjohnson@gmail.com" name="email"/>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-2 text-end`} htmlFor="phone">Phone:</label>
                            <input className={'col-6'} type="text" placeholder="000-000-00-00" name="phone"/>
                        </div>
                        <div className={`mb-5`}>
                            <label className={`${style.smallerTextBlack} col-2 text-end`} htmlFor="fbLink">FB
                                link:</label>
                            <input className={'col-6'} type="text" placeholder="https://www.facebook.com/helenjohnson"
                                   name="fbLink"/>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-end ${style.postCardTitle}`}>
                        <NavLink to='/home' className={`${style.btnEdit} me-2`}>
                            <span className={'m-auto'}>Cancel</span>
                        </NavLink>
                        <NavLink to='/home' className={`${style.btnHeader}`}>
                            <img className={`${style.iconBtn}`} src={save} alt={''}/>
                            <span className={'m-auto'}>Save changes</span>
                        </NavLink>
                    </div>
                </>
                :
                <div>activities</div>}


        </div>
    );
};

export default PersonalArea;