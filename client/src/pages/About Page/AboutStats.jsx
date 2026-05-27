import React from 'react';

function AboutStats() {
  return (
    <section className="sjgh-dashboard-stats">
      <div className="stats-metric-container">
        
        {/* ==========================================================================
           1. LEAD HERO DATA CARD (Strategic Historic Baseline)
           ========================================================================== */}
        <div className="metric-card metric-card-headline">
          <div className="card-ambient-glow"></div>
          <div className="metric-content">
            <span className="metric-tag">National Infrastructure</span>
            <h2 className="metric-value">40+ <span className="value-unit">Years</span></h2>
            <h3 className="metric-title">Clinical Excellence & Sovereign Alliance</h3>
            <p className="metric-prose">
              Established as an enduring emblem of diplomacy following the 1951 San Francisco treaty, sustaining uninterrupted premium healthcare delivery since 1983.
            </p>
          </div>
          <div className="metric-visual-pipeline">
            <div className="pipeline-bar bar-active"></div>
            <div className="pipeline-bar"></div>
            <div className="pipeline-bar"></div>
          </div>
        </div>

        {/* ==========================================================================
           2. BED CAPACITY METRIC (Clean Typography Only)
           ========================================================================== */}
        <div className="metric-card">
          <div className="metric-content">
            <span className="metric-tag">Institutional Scale</span>
            <h2 className="metric-value">1,100+</h2>
            <h3 className="metric-title">Inpatient Beds</h3>
            <p className="metric-prose">Fully integrated intensive care units, specialized surgical blocks, and premium recovery wards.</p>
          </div>
        </div>

        {/* ==========================================================================
           3. CLINICAL STAFF DENSITY METRIC
           ========================================================================== */}
        <div className="metric-card">
          <div className="metric-content">
            <span className="metric-tag">Expertise Density</span>
            <h2 className="metric-value">450+</h2>
            <h3 className="metric-title">Medical Specialists</h3>
            <p className="metric-prose">Leading postgraduate researchers, consultants, and board-certified clinicians managing complex tertiary diagnostics.</p>
          </div>
        </div>

        {/* ==========================================================================
           4. HOURLY EMERGENCY RESPONSE METRIC
           ========================================================================== */}
        <div className="metric-card">
          <div className="metric-content">
            <span className="metric-tag">Operational Window</span>
            <h2 className="metric-value">24 / 7</h2>
            <h3 className="metric-title">Trauma Care Center</h3>
            <p className="metric-prose">Equipped with zero-delay operational infrastructure for acute medical emergencies and neural trauma.</p>
          </div>
          <div className="metric-sparkline">
            <svg viewBox="0 0 100 30" className="sparkline-svg">
              <path d="M0,25 Q15,5 30,20 T60,10 T90,22 T100,5" fill="none" stroke="#2ec4b6" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>

        {/* ==========================================================================
           5. CAMPUS SCALE METRIC
           ========================================================================== */}
        <div className="metric-card">
          <div className="metric-content">
            <span className="metric-tag">Healing Environment</span>
            <h2 className="metric-value">30 <span className="value-unit">Acres</span></h2>
            <h3 className="metric-title">Healing Ecosystem</h3>
            <p className="metric-prose">Architecturally engineered green spaces calculated to suppress patient stress levels and accelerate recovery windows.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutStats;