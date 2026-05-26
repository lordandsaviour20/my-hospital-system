import React from 'react';

function Section6() {
  const handleNavigation = () => {
    // Smoothly scan and scroll directly to your Section 5 / Channeling widget area
    const channelSection = document.querySelector('.feedback-master-section');
    if (channelSection) {
      channelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="medical-hero-wrapper">
      {/* Structural Decorative Elements */}
      <div className="parallax-dark-overlay-for-hero-wrapper"></div>
      <div className="hero-abstract-glow"></div>

      <div className="hero-central-container">
        
        {/* Left Side: Editorial Value Proposition Messaging */}
        <div className="hero-editorial-block">
          <div className="hero-mini-badge">
            <span className="pulse-dot"></span>
            Next-Generation Healthcare Portal
          </div>
          
          <h1>
            Your Health Journey, <br />
            <span className="teal-gradient-text">Streamlined & Simplified.</span>
          </h1>
          
          <p className="hero-subsidiary-text">
            Skip the waiting lines. Connect instantly with leading global consultants, manage digital laboratory results, and secure medical channeling appointments from any device.
          </p>

          <div className="hero-action-dock">
            <button className="premium-hero-btn" onClick={handleNavigation}>
              <span className="btn-label">Make An Appointment</span>
              <span className="btn-arrow-icon">→</span>
            </button>
            <div className="hero-support-tag">
              <strong>⚡ Live Triage</strong>
              <span>Average response under 4 mins</span>
            </div>
          </div>
        </div>

        {/* Right Side: Modern Minimalist Micro-Metric Cards Asset */}
        <div className="hero-visual-stage">
          <div className="floating-metric-pill metric-one">
            <div className="pill-icon">🔬</div>
            <div className="pill-info">
              <h4>Digital Labs</h4>
              <p>Instant Smartphone Reports</p>
            </div>
          </div>

          <div className="floating-metric-pill metric-two">
            <div className="pill-icon">🏥</div>
            <div className="pill-info">
              <h4>800+ Beds</h4>
              <p>Advanced Clinical Capacity</p>
            </div>
          </div>

          <div className="hero-main-card-asset">
            <div className="inner-card-header">
              <span className="status-indicator">Online</span>
              <h3>Consultant Channeling</h3>
            </div>
            <p>Select your specialist, map live calendar slots, and pay securely via our global gateway interface.</p>
            <div className="card-mock-graph">
              <span className="graph-bar" style={{height: '40%'}}></span>
              <span className="graph-bar" style={{height: '75%'}}></span>
              <span className="graph-bar" style={{height: '55%'}}></span>
              <span className="graph-bar" style={{height: '120%'}}></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Section6;