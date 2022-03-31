import React, {useState} from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css'
import avatar from '../../../../../assets/png/avatar.jpg'
import dog from '../../../../../assets/png/gold_dog.png'
import star_empty from '../../../../../assets/png/star_empty.png';
import star_full from '../../../../../assets/png/star_full.png';
import dots from '../../../../../assets/png/dots_three.png';
import hide from "../../../../../assets/png/hide.png";
import close from "../../../../../assets/png/close.png";
import {useDispatch} from "react-redux";
import {getAuth} from "firebase/auth";

const PostCard = () => {

    const [dropdown, setDropdown] = useState(false)
    let disp = dropdown ? 'd-block' : 'd-none'
    const [isOpen, setOpen] = useState(false)

    const [isFavorite, setFavorite] = useState(true)
    const dispatch = useDispatch()
    const auth = getAuth()

    const changeFavorites = () => {
        setFavorite(!isFavorite)
        dispatch({type: 'SET_FAVORITE', payload: {isFavorite: isFavorite, userID: auth.currentUser.uid}})
    }

    return (
        <div className={`${style.postCard} row d-flex`}>
            <div className={`${style.avatarImg} col-1`}>
                <img src={avatar} alt={''}/>
            </div>
            <div className={`col-10 d-flex flex-column`}>
                <h3 className={`${style.titleSemiBold}`}>Jonh Goodboi</h3>
                <p className={`${style.smallerText}`}>2 h</p>
                <div className={`${style.picturePost} mb-2 mt-1 text-center`}><img src={dog} alt={''}/></div>
                <p className={`${style.textPost} ${isOpen ? `${style.textPostOpen}` : ''}`}>Fox nymphs grab
                    quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae cupiditate, dicta eius
                    exercitationem facilis ipsum magni
                    modi, natus necessitatibus, nemo nobis numquam obcaecati officia quam quibusdam ullam ut velit.
                </p>
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

                <img onClick={changeFavorites} className={`${style.starBtn} mb-1`}
                     src={isFavorite ? star_empty : star_full} alt={'star'}/>
            </div>
        </div>
    );
};

export default PostCard;