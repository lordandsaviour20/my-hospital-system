import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SJGHImage1 from './images/HeaderImages/IMG1.png';
import SJGHImage2 from './images/HeaderImages/IMG2.png';
import SJGHImage3 from './images/HeaderImages/IMG3.png';
import SJGHImage4 from './images/HeaderImages/IMG4.png';
import SJGHImage5 from './images/HeaderImages/IMG5.png';
import SJGHImage6 from './images/HeaderImages/IMG6.png';
import SJGHImage7 from './images/HeaderImages/IMG7.png';

import SJGHLogo from './images/HeaderImages/LogoSJGH.png';
import EOSL from './images/HeaderImages/Emblem_of_Sri_Lanka.png';

function Header() {
  const images = [SJGHImage1, SJGHImage2, SJGHImage3, SJGHImage4, SJGHImage5, SJGHImage6, SJGHImage7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);



// Updated structural grouping inside Header.jsx
return (
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

      {/* Badges and Main Headings */}
      <img className="SJGHLogo" src={SJGHLogo} alt="SJGH Logo Badge" />
      <img className="EOSL" src={EOSL} alt="Emblem of Sri Lanka" />
      <h1>SRI JAYAWARDHANAPURA GENERAL HOSPITAL</h1>

      {/* Put the Navbar inside here so background images run underneath its glass panels */}
      <nav className="navbar">
        <ul>
          <div className="navbarIcons">          
            <li><Link to="/">Home</Link></li>
          </div>

          <div className="navbarIcons">
            <li><Link to="/about">About Us</Link></li>
          </div>

          <div className="navbarIcons">
          <li className="has-dropdown">
            <span className="dropdown-trigger">Booking</span>
            <ul className="dropdown-submenu">
              <li><Link to="/booking">Doctor Channelling</Link></li>
              <li><Link to="/checkup-booking">Medical Checkup</Link></li>
              <li><Link to="/visiting-pass">Visitor Pass</Link></li>
            </ul>
          </li>
          </div>

          <div className="navbarIcons">
            <li><Link to="/contactus">Contact</Link></li>
          </div>
          
          <div className="navbarIcons">
            <li><Link to="/services">Services</Link></li>
          </div>
        </ul>
      </nav>
    </div>
  </header>
  );
}

export default Header;