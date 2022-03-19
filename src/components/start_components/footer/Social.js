import React from 'react';
import facebook from "../../../assets/svg/facebook.svg";
import instagram from "../../../assets/svg/instagram.svg";
import style from "../../../css_moduls/start_css/footer.module.css"


const Social = () => {
    return (
        <div className={`${style.widthSocial}`}>
            <div className={`mb-3`}>
                <img className={`m-2`} src={facebook} alt='facebook'/>
                <img className={`m-2`} src={instagram} alt='instagram'/>
            </div>
            <div>
                <p>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</p>
            </div>
        </div>
    );
};

export default Social;