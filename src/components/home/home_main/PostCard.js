import React from 'react';
import style from '../../../css_moduls/home_css/home.module.css';
import dog_avatar from '../../../assets/png/dog_avatar_small.png';
import dog from '../../../assets/png/gold_dog.png';
import star from '../../../assets/png/star.png';

const PostCard = () => {
    return (
        <>
            <div className={`${style.postCard} row d-flex`}>
                <div className={`col-1`}>
                    <img className={`${style.avatarImg}`} src={dog_avatar} alt={'dog'}/>
                </div>
                <div className={`col-10`}>
                    <h3 className={`${style.titleSemiBold}`}>Jonh Goodboi</h3>
                    <p className={`${style.smallerText}`}>2 h</p>
                    <img className={'mb-2 mt-1'} src={dog} alt={'dog'}/>
                    <p className={`${style.smallerTextBlack}`}>Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
                        vixens jump; dozy fowl quack <a className={`${style.greenLink}`} href={'#'}>…more</a></p>
                </div>
                <div className={`col-1 d-flex flex-column justify-content-between pb-3`}>
                    <a href={'#'}>...</a>
                    <a href={'#'}><img className={`${style.starBtn}`} src={star} alt={'star'}/></a>
                </div>
            </div>
        </>
    );
};

export default PostCard;