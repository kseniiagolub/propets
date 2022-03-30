import React, {useState} from 'react';
import style from '../../../../../css_moduls/home_css/home.module.css'
import avatar from '../../../../../assets/png/avatar.jpg';
import star from '../../../../../assets/png/star.png';
import dots from '../../../../../assets/png/dots_three.png';
import hide from "../../../../../assets/png/hide.png";
import close from "../../../../../assets/png/close.png";

const PostCard = () => {

    const [dropdown, setDropdown] = useState(false)
    let disp = dropdown ? 'd-block' : 'd-none'

    return (
        <>
            <div className={`${style.postCard} row d-flex`}>
                <div className={`${style.avatarImg} col-1`}>
                    <img src={avatar} alt={''}/>
                </div>
                <div className={`col-10`}>
                    <h3 className={`${style.titleSemiBold}`}>Jonh Goodboi</h3>
                    <p className={`${style.smallerText}`}>2 h</p>
                    <div className={`${style.picturePost} mb-2 mt-1 text-center`}><img src={avatar} alt={''}/></div>
                    <p className={`${style.smallerTextBlack} ${style.textPost}`}>Fox nymphs grab
                        quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Asperiores beatae cupiditate, dicta eius exercitationem facilis ipsum magni
                        modi, natus necessitatibus, nemo nobis numquam obcaecati officia quam quibusdam ullam ut velit.
                        <a className={`${style.greenLink}`} href={'#'}>…more</a></p>
                </div>
                <div className={`col-1 d-flex flex-column justify-content-between pb-3`}>
                    <a href={'#'}><img className={`${style.dotsBtn}`} src={dots} alt={'dots'}
                                       onClick={() => setDropdown(!dropdown)}/></a>

                    <div className={`${style.dropdownContentGreen} ${disp} d-flex flex-column`}>
                        <button className={`${style.navBtn} d-flex mb-2`}>
                            <div className={`d-flex`}>
                                <img className={`${style.iconBtnBlack}`} src={hide} alt={'hide'}/>
                                <span className={`${style.smallerTextBlack}`}>Hide from feed</span>
                            </div>
                        </button>
                        <button className={`${style.navBtn} d-flex mb-2`}>
                            <div className={`d-flex`}>
                                <img className={`${style.iconBtnBlack}`} src={close} alt={'unfollow'}/>
                                <span className={`${style.smallerTextBlack}`}>Unfollow</span>
                            </div>
                        </button>
                    </div>

                    <a href={'#'}><img className={`${style.starBtn}`} src={star} alt={'star'}/></a>
                </div>
            </div>
        </>
    );
};

export default PostCard;