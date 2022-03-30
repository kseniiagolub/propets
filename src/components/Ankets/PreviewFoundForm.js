import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "../../css_moduls/home_css/home.module.css";
import avatar from "../../assets/png/avatar.jpg";

const PreviewFoundForm = () => {

    const dispatch = useDispatch()
    const anket = useSelector(state => state.anketa)

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
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold} ${style.postCardTitle}`}><span className={`${style.titleBold}`}>Preview and Publish. </span>Please share the post to your FB to be more effective</h1>
            <div className={`${style.postCard} d-flex`}>
                <div className={`col-5`}>
                    <img className={`${style.imgPreview}`} src={anket.images[0]}/>
                </div>
                <div className={`col-7 ps-3 pe-3`}>
                    <span className={`${style.titleBigBold}`}>{anket.type}, {anket.breed}</span>
                    <div className={`d-flex`}>
                        <div className={`col-6`}>
                            <h2 className={`${style.smallerTextGreen}`}>Color: <span className={`${style.smallerTextBlack}`}>{anket.color}</span></h2>
                            <h2 className={`${style.smallerTextGreen}`}>Sex: <span className={`${style.smallerTextBlack}`}>{anket.sex}</span></h2>
                            <h2 className={`${style.smallerTextGreen}`}>Height: <span className={`${style.smallerTextBlack}`}>{anket.height}</span></h2>
                        </div>
                        <div className={`col-6`}>
                            <h2 className={`${style.smallerTextGreen}`}>Distinnctive features <span className={`${style.smallerTextBlack}`}>{anket.features}</span></h2>
                        </div>
                    </div>
                    <div>
                        <h2 className={`${style.smallerTextGreen}`}>Description: <span className={`${style.smallerTextBlack}`}>{anket.description}</span></h2>
                    </div>
                    <hr className={`mt-3 mb-0`}/>
                    <div className={`mb-2`}>
                        <span className={`${style.smallerTextBlack}`}>{anket.location}</span>
                    </div>
                    <div className={`d-flex`}>
                        <div className={`${style.avatarImg} col-1`}>
                            <img src={avatar} alt={''}/>
                        </div>
                        <div className={`d-flex flex-column col-7 ps-3`}>
                            <div>
                                <span className={`${style.titleSemiBoldGreen}`}>test</span>
                            </div>
                            <div>
                                <span className={`${style.smallerTextBlack}`}>{timePost()}</span>
                            </div>
                        </div>
                        <div className={`col-4`}>
                            <span className={`${style.smallerTextBlack}`}>icons</span>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => dispatch({type: 'SET_ANKET', payload: {finish: false, edit: false}})}>btn</button>
        </div>
    );
};

export default PreviewFoundForm;