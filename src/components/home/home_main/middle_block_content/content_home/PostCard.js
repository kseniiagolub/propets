import React, {useState} from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css'
import avatar from '../../../../../assets/png/avatar.jpg';
import star_empty from '../../../../../assets/png/star_empty.png';
import star_full from '../../../../../assets/png/star_full.png';
import dots from '../../../../../assets/png/dots_three.png';
import hide from "../../../../../assets/png/hide.png";
import close from "../../../../../assets/png/close.png";
import {useDispatch} from "react-redux";
import {getAuth} from "firebase/auth";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../../../utils/firebase";

const PostCard = (props) => {

    const [dropdown, setDropdown] = useState(false)
    let disp = dropdown ? 'd-block' : 'd-none'
    const [isOpen, setOpen] = useState(true)

    const [isFavorite, setFavorite] = useState(true)
    const dispatch = useDispatch()
    const auth = getAuth()

    const changeFavorites = () => {
        setFavorite(!isFavorite)
        dispatch({type: 'SET_FAVORITE', payload: {isFavorite: isFavorite, userID: auth.currentUser.uid}})
    }

    const getImg = (item) => {
        if (item.length === 1) {
            return <img src={item} alt={"user's photo"}/>
        } else {
            return item.map((item, index) => <img key={index} src={item} alt={"user's photo"}/>)
        }
    }

    const addPostFavorites = () => {
        try {
            const docRef = addDoc(collection(db, auth.currentUser.uid), {
                posts: props.user.id
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const getDate = (time) => {
        const options = {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        time = new Date(time)
        return time.toLocaleString("en-US", options)
    }

    return (
        <div className={`${style.postCard} row d-flex`}>
            <div className={`${style.avatarImg} col-1`}>
                <img src={avatar} alt={''}/>
            </div>
            <div className={`col-10 d-flex flex-column`}>
                <h3 className={`${style.titleSemiBold}`}>{props.user.Name}</h3>
                <p className={`${style.smallerText}`}>{getDate(props.user.Date)}</p>
                <div className={`row mb-2 mt-1 text-center`}>
                    <div className={`${style.picturePost} d-flex flex-row flex-wrap justify-content-center`}>
                        {getImg(props.user.Images.images)}
                    </div>
                </div>
                <p className={`${style.textPost} ${isOpen ? '' : `${style.textPostOpen}`}`}>{props.user.Text}</p>
                <button onClick={() => setOpen(!isOpen)} className={`${style.greenLink} text-end`}>Show more</button>
            </div>
            <div className={`col-1 d-flex flex-column justify-content-between align-items-center me-0`}>
                <img className={`${style.dotsBtn}`} src={dots} alt={'dots'}
                     onClick={() => setDropdown(!dropdown)}/>

                <div className={`${style.dropdownContentGreen} ${disp} d-flex flex-column`}>
                    <button className={`${style.navBtn} d-flex mb-2`}>
                        <img className={`${style.iconBtnBlack}`} src={hide} alt={'hide'}/>
                        <span className={`${style.smallerTextBlack}`}>Hide from feed</span>
                    </button>
                    <button className={`${style.navBtn} d-flex mb-2`}>
                        <img className={`${style.iconBtnBlack}`} src={close} alt={'unfollow'}/>
                        <span className={`${style.smallerTextBlack}`}>Unfollow</span>
                    </button>
                </div>

                <img onClick={addPostFavorites} className={`${style.starBtn} mb-1`}
                     src={isFavorite ? star_empty : star_full} alt={'star'}/>
            </div>
        </div>
    );
};

export default PostCard;