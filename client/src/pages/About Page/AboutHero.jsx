import React from 'react';
import JRJayawardheneImg from './JR Jayawardhene.png';

function AboutHero() {
  return (
    <section className="sjgh-historical-hero">
      {/* Premium Ambient Architecture Elements */}
      <div className="mesh-ambient-canvas"></div>
      <div className="aurora-glow-focal"></div>

      <div className="hero-uncluttered-canvas">
        
        {/* ==========================================================================
            LEFT PANEL: EDITORIAL LAYOUT STREAM
           ========================================================================== */}
        <div className="historical-text-column">
          <div className="diplomatic-tribute-badge">
            <span className="tribute-label">1951 - San Francisco Alliance</span>
          </div>

          <h1 className="historical-main-title">
            The Gift of an Empire, <br />
            <span className="unique-gradient-span">Built on Gratitude.</span>
          </h1>

          <p className="historical-prose-summary">
            Commissioned via Parliamentary Act No. 54 of 1983, SJGH stands as a magnificent monument of international friendship. Following late President J.R. Jayawardene’s historic defense of Japan at the 1951 San Francisco Peace Conference—where he waived all war reparations—the Japanese people gifted this premier 30-acre healing ecosystem to Sri Lanka.
          </p>

          <div className="historical-action-bar">
            <a href="#history" className="history-pill-btn">
              <span>Explore Our History</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Inline Philosophy Metrics Pipeline */}
          <div className="inline-philosophy-row">
            <div className="philosophy-item">
              <h4>Our Vision</h4>
              <p>To be the premier, highly trusted benchmark for tertiary healthcare across South Asia by 2030.</p>
            </div>
            <div className="philosophy-item vertical-accent-divider">
              <h4>Our Mission</h4>
              <p>Upholding safe, world-class clinical protocols while providing affordable, high-technology medical platforms.</p>
            </div>
          </div>
        </div>

        {/* ==========================================================================
           📸 RIGHT PANEL: THE FLUID HISTORICAL PORTRAIT FRAME
           ========================================================================== */}
        <div className="historical-portrait-column">
          <div className="archival-portrait-frame">
            <div className="frame-geometric-border"></div>
            
            <img 
              src={JRJayawardheneImg} 
              alt="His Excellency J.R. Jayawardene" 
              className="archival-image"
            />

            {/* Non-Bleeding Floating Caption Card */}
            <div className="portrait-caption-card">
              <div className="caption-glow-layer"></div>
              <div className="caption-inner-content">
                <h5>His Excellency J.R. Jayawardene</h5>
                <p>First Executive President of Sri Lanka</p>
                <span className="quote-tribute-text">
                  "Hatred ceases not by hatred, but by love." — Defending a sovereign Japan at San Francisco, 1951.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutHero;