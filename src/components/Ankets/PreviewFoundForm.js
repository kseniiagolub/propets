import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "../../css_moduls/home_css/home.module.css";

import src from '../../assets/png/preview.png'

const PreviewFoundForm = () => {

    const dispatch = useDispatch()
    const anket = useSelector(state => state.anketa)

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto mt-3`}>
            <h1 className={`${style.titleSemiBold} col-10`}><span className={`${style.titleBold}`}>Preview and Publish. </span>Please share the post to your FB to be more effective</h1>
            <div className={`${style.postCard} d-flex`}>
                <div className={`col-5`}>
                    <img className={`${style.imgPreview}`} src={src}/>
                </div>
                <div className={`col-7 ps-3 pe-3`}>
                    <span className={`${style.titleBigBold}`}>Dog, Golden Retriever</span>
                    <div>
                        <div>
                            <h2>Color: <span>golden</span></h2>
                            <h2>Sex: <span>male</span></h2>
                            <h2>Height: <span>45 cm</span></h2>
                        </div>
                        <div>
                            <h2>Distinnctive features <span>golden</span></h2>
                        </div>
                    </div>
                    <div>
                        <h2>Description: <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad adipisci, aliquid amet corporis delectus dolorum error esse et explicabo fuga harum hic impedit ipsa iusto magnam maiores quae quam qui quidem quod, quos recusandae sint, soluta temporibus totam veniam! Eligendi harum ipsa laudantium magni minus suscipit! Esse, explicabo.</span></h2>
                    </div>
                    <hr/>
                    <div>
                        <span>Florentin, 27, Tel Aviv</span>
                    </div>
                    <div>
                        <div>
                            <img/>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => dispatch({type: 'SET_ANKET', payload: {finish: false, edit: false}})}>btn</button>
        </div>
    );
};

export default PreviewFoundForm;