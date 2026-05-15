import React from 'react';
import { Link } from 'react-router-dom';
import SJGHImage from './images/1643347957972.jpg';
import SJGHLogo from './images/LogoSJGH.png';
import EOSL from './images/Emblem_of_Sri_Lanka.png'

function Header(){
    return(
        <header id="headerId">
            <div id="header-main">
                <img class='SJGHLogo' src={SJGHLogo} alt="SJGHLogo"/>
                <img class='headerImage' src={SJGHImage} alt="SJGHImage"/>
                <img class='EOSL' src={EOSL} alt="EOSL"/>
                <h1>SRI JAYAWARDHANAPURA GENERAL HOSPITAL</h1>
            </div>

            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><Link to="/contactUs">Contact</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul> 
            </nav>
        </header>
    );
};
export default Header;