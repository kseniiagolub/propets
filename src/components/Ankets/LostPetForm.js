import React from 'react';
import style from '../../css_moduls/home_css/home.module.css';
import anketa from '../../assets/png/anketa.png';

const LostPetForm = () => {
    return (
        <>
            <div className={`${style.lostFoundForm} row d-flex`}>
                <form className={`row`} name={'lostForm'} action={'#'}>
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
                            <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="height">Height:</label>
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
                            <textarea className={`ms-2 ${style.smallerTextBlack} ${style.smallTextarea}`} cols={'17'} rows={'3'} name={'features'}
                                      placeholder={'blue collar with stars, no left ear, damaged tail.'}/>
                        </div>
                        <div className={`d-flex mb-1`}>
                            <div className={`${style.smallerTextBlack} col-3 text-end`}>
                                <label htmlFor="description">Description:</label>
                                <p className={`${style.littleGreenText}`}>up to 150 char</p>
                            </div>
                            <textarea className={`ms-2 ${style.smallerTextBlack} ${style.bigTextarea}`} cols={'17'} rows={'6'} name={'description'}
                                      placeholder={'brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.'}/>
                        </div>
                        <div className={`d-flex mb-1`}>
                            <label className={`${style.smallerTextBlack} col-3 text-end`} htmlFor="location">Location:</label>
                            <textarea className={`ms-2 ${style.smallerTextBlack} ${style.middleTextarea}`} cols={'17'} rows={'2'} placeholder="Florentin Street, Tel Aviv" name="location"/>
                        </div>
                    </div>
                    <div className={'col-6'}>
                        <img className={`${style.anketImg}`} src={anketa} alt={''}/>
                        <hr/>
                        <div>
                            <p>picture</p>
                            <p>Drag and drop photos or</p>
                            <button>Browse</button>
                            <textarea placeholder={'img1.jpg\n img1.jpg\n img1.jpg\n'}/>
                        </div>
                    </div>
                    <div>contacts</div>
                </form>
                <div>footer with name and button</div>
            </div>
        </>
    );
};

export default LostPetForm;