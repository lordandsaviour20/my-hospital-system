import React from 'react';
import campusArchivalImg from './patientCare.webp'; 

function AboutFooterBanner() {
  return (
    <section className="sjgh-footer-banner">
      <div className="banner-asymmetric-canvas">
        
        {/* ==========================================================================
           🔗 LEFT WING: THE SOVEREIGN QUICK-LINK NODE
           ========================================================================== */}
        <div className="banner-left-panel">
          <div className="utility-action-spine">
            <a href="tel:+94112778610" className="spine-utility-link" title="Emergency Hotline">
              <span className="utility-label">TEL</span>
            </a>
            <a href="#portal" className="spine-utility-link" title="Patient Portal">
              <span className="utility-label">E-DOC</span>
            </a>
            <a href="#directions" className="spine-utility-link" title="Campus Map">
              <span className="utility-label">NAV</span>
            </a>
          </div>

          <div className="banner-brand-content">
            <div className="banner-badge-group">
              <span className="banner-badge-tag">Sri Jayewardenepura General Hospital</span>
            </div>
            <h2 className="banner-display-title">
              A Living Monument of <br />
              <span className="banner-highlight">Diplomatic Gratitude.</span>
            </h2>
            
            <div className="banner-breadcrumbs">
              <span className="crumb">Home</span>
              <span className="crumb-separator">/</span>
              <span className="crumb">Historical Legacy</span>
              <span className="crumb-separator">/</span>
              <span className="crumb active">About Us</span>
            </div>
          </div>
        </div>

        {/* ==========================================================================
           📸 RIGHT WING: THE ARCHITECTURAL CANVAS (Asymmetric Cutout)
           ========================================================================== */}
        <div className="banner-right-panel">
          <div className="asymmetric-fluid-curve">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="curve-svg">
              <path d="M100,0 C40,0 60,100 0,100 L100,100 Z" fill="#060e1f" />
            </svg>
          </div>
          <div className="banner-image-wrapper">
            <img 
              src={campusArchivalImg} 
              alt="Sri Jayewardenepura Hospital Healing Campus" 
              className="banner-bg-photo"
            />
            <div className="banner-image-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutFooterBanner;