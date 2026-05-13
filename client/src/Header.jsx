import React from 'react';
import SJGHImage from './1643347957972.jpg';
import SJGHLogo from './LogoSJGH.png';
import EOSL from './Emblem_of_Sri_Lanka.png'

function Header(){
    return(
        <header id="headerId">
            <img class='SJGHLogo' src={SJGHLogo} alt="SJGHLogo"/>
            <img class='headerImage' src={SJGHImage} alt="SJGHImage"/>
            <img class='EOSL' src={EOSL} alt="EOSL"/>
            <h1>SRI JAYAWARDHANAPURA GENERAL HOSPITAL</h1>
        </header>
    );
};
export default Header;