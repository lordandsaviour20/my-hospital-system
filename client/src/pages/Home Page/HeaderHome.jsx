import React, { useState, useEffect } from 'react';

import SJGHImage1 from './HeaderImages/IMG1.png';
import SJGHImage2 from './HeaderImages/IMG2.png';
import SJGHImage3 from './HeaderImages/IMG3.png';
import SJGHImage4 from './HeaderImages/IMG4.png';
import SJGHImage5 from './HeaderImages/IMG5.png';
import SJGHImage6 from './HeaderImages/IMG6.png';
import SJGHImage7 from './HeaderImages/IMG7.png';

import SJGHLogo from './HeaderImages/LogoSJGH.png';
import EOSL from './HeaderImages/Emblem_of_Sri_Lanka.png';

function HeaderHome() {
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

      
    </div>
  </header>
  );
}

export default HeaderHome;