import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';

import SJGHImage1 from './IMG1.png';
import SJGHImage2 from './IMG2.png';
import SJGHImage3 from './IMG3.png';
import SJGHImage4 from './IMG4.png';
import SJGHImage5 from './IMG5.png';
import SJGHImage6 from './IMG6.png';
import SJGHImage7 from './IMG7.png';

import SJGHLogo from './images/LogoSJGH.png';
import EOSL from './images/Emblem_of_Sri_Lanka.png'

function Header(){

    const images = [SJGHImage1,SJGHImage2,SJGHImage3,SJGHImage4,SJGHImage5,SJGHImage6,SJGHImage7];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return(
        <header id="headerId">
            <div id="header-main">
                {images.map((imgUrl, index) => (
                    <img 
                        key={index}
                        className={`headerImage ${index === currentImageIndex ? 'active' : ''}`} 
                        src={imgUrl} 
                        alt={`Hospital View Slideshow ${index + 1}`}
                    />
                ))}
                
                    <img className='SJGHLogo' src={SJGHLogo} alt="SJGHLogo"/>
                    <img className='EOSL' src={EOSL} alt="EOSL"/>
                    <h1>SRI JAYAWARDHANAPURA GENERAL HOSPITAL</h1>
            </div>

            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>

                    
                    <li className="has-dropdown">
                        <span className="dropdown-trigger">Booking</span>
                        <ul className="dropdown-submenu">
                            <li><Link to="/booking">Doctor Channelling</Link></li>
                            <li><Link to="/checkup-booking">Medical Checkup</Link></li>
                            <li><Link to="/visiting-pass">Visitor Pass</Link></li>
                        </ul>
                    </li>
                    
                    <li><Link to="/contactus">Contact</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul> 
            </nav>
        </header>
    );
};
export default Header;