import React, {useEffect, useState} from 'react';
import {storage} from '../../firebase';
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import style from "../../css_moduls/home_css/home.module.css";
import arrowUp from "../../assets/png/arrow-up.png";
import {useDispatch} from "react-redux";

const AddImages = () => {

    const dispatch = useDispatch()

    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target.files
        uploadFiles(file)
    }

    const uploadFiles = (file) => {
        for (let i = 0; i < file.length; i++) {
            if (!file[i]) return
            const storageRef = ref(storage, `/images/${uuidv4()}`)
            const uploadTask = uploadBytesResumable(storageRef, file[i])

            uploadTask.on('state_changed', (snapshot) => {},
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(url => dispatch({type: 'SET_ANKETA_IMG', payload: url}))
                })
        }
    }

    return (
        <div className={`d-flex row mt-5`}>
            <div className={`col-6 text-center`}>
                <img className={`${style.addFileIcon}`} src={arrowUp} alt={''}/>
                <p className={`${style.smallerTextBlack}`}>Drag and drop photos or</p>
                <label className={`${style.addFileLabel}`} htmlFor={'fileInput'}>Browse</label>
            </div>
            <div className={`${style.divInput} col-6 mb-3`}>
                <input className={`${style.addFileInput}`} onChange={formHandler} type={'file'} id={'fileInput'}
                       name={'fileInput'} multiple accept={'image/*, image/jpeg'}/>
            </div>
        </div>
    );
};

export default AddImages;