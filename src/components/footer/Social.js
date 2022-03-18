import React from 'react';
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";


const Social = () => {
    return (
        <div>
            <div>
                <img src={facebook} alt='facebook'/>
                <img src={instagram} alt='instagram'/>
            </div>
            <div>
                <p>1600 Amphitheatre Pkwy</p>
                <p>Mountain View, CA 94043, USA</p>
            </div>
        </div>
    );
};

export default Social;