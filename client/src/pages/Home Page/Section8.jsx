import React from 'react';


function SjghNetwork() {
  return (
    <section className="sjgh-network-section">
      {/* Interactive Dot Matrix Background Layer */}
      <div className="sjgh-matrix-overlay">
        {[...Array(48)].map((_, i) => (
          <div key={i} className="matrix-dot" style={{ '--delay': `${i * 0.1}s` }}></div>
        ))}
      </div>

      <div className="sjgh-bounded-container">
        
        {/* ℹ TOP ROW: BRAND IDENTITY & INSTITUTIONAL SUMMARY*/}
        <div className="sjgh-info-row">
          <div className="sjgh-title-block">
            <span className="sjgh-mini-badge">NATIONAL HEALTH NETWORK</span>
            <h2>Sri Jayawardhanapura General Hospital</h2>
            <p className="sjgh-narrative-prose">
              As a premier multi-specialty tertiary care institution in Sri Lanka, we combine state-of-the-art medical equipment with eminent medical expertise to deliver affordable, high-quality clinical outcomes for all citizens.
            </p>
          </div>
        </div>

        {/* MIDDLE ROW: KEY DIVISIONS & MEDICAL LOGOS */}
        <div className="sjgh-logos-grid">
          {/* Division 1 */}
          <div className="sjgh-logo-card">
            <div className="card-pulse-glow"></div>
            <div className="logo-emblem-wrapper">
              <span className="emblem-crest">SJGH</span>
              <div className="emblem-ring-accent"></div>
            </div>
            <div className="logo-card-meta">
              <h4>Clinical Excellence</h4>
              <span className="logo-sub-tag">Tertiary Care Complex</span>
            </div>
          </div>

          {/* Division 2 */}
          <div className="sjgh-logo-card highlighted-center-card">
            <div className="card-pulse-glow"></div>
            <div className="logo-emblem-wrapper">
              <span className="emblem-crest text-teal" style={{color:'red'}}>ICU</span>
              <div className="emblem-ring-accent-ICU pulsing-ring"></div>
            </div>
            <div className="logo-card-meta">
              <h4>Critical Care Network</h4>
              <span className="logo-sub-tag">24/7 Advanced Emergency</span>
            </div>
          </div>

          {/* Division 3 */}
          <div className="sjgh-logo-card">
            <div className="card-pulse-glow"></div>
            <div className="logo-emblem-wrapper">
              <span className="emblem-crest">LABS</span>
              <div className="emblem-ring-accent"></div>
            </div>
            <div className="logo-card-meta">
              <h4>Diagnostic Services</h4>
              <span className="logo-sub-tag">Fully Automated Labs</span>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: ACCREDITATIONS & QUALITY ASSURANCE*/}
        <div className="sjgh-accreditations-row">
          <div className="accreditations-content-dock">
            <h3>Our Accreditations & Standards</h3>
            <p>
              Our continuous commitment to clinical safety, patient welfare, and comprehensive healthcare management is reinforced by local and international operational excellence awards.
            </p>
          </div>
          <div className="accreditations-action-dock">
            <button className="sjgh-interactive-btn" aria-label="Read More About SJGH Accreditations">
              <span>View Certifications</span>
              <svg className="btn-chevron-svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SjghNetwork;