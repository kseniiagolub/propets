import React from 'react';
import style from '../../css_moduls/home_css/home.module.css';
import anketa from '../../assets/png/anketa.png';
import avatar from "../../assets/png/avatar.jpg";
import paw from '../../assets/png/paw.png';
import AddImages from "./AddImages";

const LostForm = () => {
    return (
        <>
            <div className={`${style.lostFoundForm} row d-flex`}>
                    <div className={'col-6 d-flex flex-column'}>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="type">Type:</label>
                            <select className={`${style.select} ms-2`} name={"type"}>
                                <option defaultValue={'selected'} value={'Dog'}>Dog</option>
                                <option value={'Cat'}>Cat</option>
                                <option value={'Rabbit'}>Rabbit</option>
                                <option value={'Parrot'}>Parrot</option>
                            </select>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="sex">Sex:</label>
                            <select className={`${style.select} ms-2`} name={"sex"}>
                                <option defaultValue={'selected'} value={'Male'}>Male</option>
                                <option value={'Female'}>Female</option>
                            </select>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="breed">Breed:</label>
                            <input className={'col-7'} type="text" placeholder="Golden Retriever" name="breed"/>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="color">Color:</label>
                            <input className={'col-7'} type="text" placeholder="Beige" name="color"/>
                        </div>
                        <div className={`mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`}
                                   htmlFor="height">Height:</label>
                            <select className={`${style.select} ms-2`} name={"height"}>
                                <option defaultValue={'selected'} value={'45-70 cm'}>45-70 cm</option>
                                <option value={'20-45 cm'}>20-45 cm</option>
                                <option value={'0-20 cm'}>0-20 cm</option>
                            </select>
                        </div>
                        <div className={`d-flex mb-1`}>
                            <div className={`${style.smallerTextBlack} col-3 text-end`}>
                                <label htmlFor="features">Distinktive features:</label>
                                <p className={`${style.littleGreenText}`}>up to 60 char</p>
                            </div>
                            <textarea className={`ms-2 ${style.smallerTextBlack} ${style.smallTextarea}`} cols={'17'}
                                      rows={'3'} name={'features'}
                                      placeholder={'blue collar with stars, no left ear, damaged tail.'}/>
                        </div>
                        <div className={`d-flex mb-1`}>
                            <div className={`${style.smallerTextBlack} col-3 text-end`}>
                                <label htmlFor="description">Description:</label>
                                <p className={`${style.littleGreenText}`}>up to 150 char</p>
                            </div>
                            <textarea className={`ms-2 ${style.smallerTextBlack} ${style.bigTextarea}`} cols={'17'}
                                      rows={'6'} name={'description'}
                                      placeholder={'brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'}/>
                        </div>
                        <div className={`d-flex mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`}
                                   htmlFor="location">Location:</label>
                            <textarea className={`ms-2 ${style.smallerTextBlack} ${style.middleTextarea}`} cols={'17'}
                                      rows={'2'} placeholder="Florentin Street, Tel Aviv" name="location"/>
                        </div>
                    </div>
                    <div className={'col-6 text-center'}>
                        <img className={`${style.anketImg}`} src={anketa} alt={''}/>
                        <hr className={`${style.hrLine}`}/>
                        <AddImages/>
                    </div>
                    <hr className={`${style.hrLine}`}/>
                    <div className={`mb-3`}>
                        <div className={`mb-1 row `}>
                            <label className={`${style.smallerTextBlack} col-2 text-end`}
                                   htmlFor="contacts">Contacts:</label>
                            <input className={`col-3`} type="tel" placeholder="Phone"/>
                            <input className={`col-3`} type="email" placeholder="Email"/>
                            <input className={`col-3`} type="text" placeholder="Facebook profile"/>
                        </div>
                    </div>
                <div className={`row d-flex align-items-center mb-1 mt-1`}>
                    <div className={`col-1`}>
                        <img className={`${style.avatarImg}`} src={avatar} alt={'dog'}/>
                    </div>
                    <div className={`col-8 ps-2`}>
                        <h3 className={`${style.titleSemiBoldGreen}`}>test</h3>
                    </div>
                    <div className={`col-3`}>
                        <button className={`${style.btnHeader}`}>
                            <img className={`${style.iconBtnBlack}`} src={paw} alt={''}/>
                            <span className={'m-auto'}>Publish</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LostForm;