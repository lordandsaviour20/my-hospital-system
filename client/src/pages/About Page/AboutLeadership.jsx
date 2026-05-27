import React from 'react';
import DirectorImg from './Director.png'
import StaffImg from './SJGHStaff.jpg'

function AboutLeadership() {
  return (
    <section className="sjgh-leadership-section">
      <div className="leadership-container">
        
        {/* Section Header */}
        <div className="leadership-header">
          <span className="leadership-mini-tag">HOSPITAL LEADERSHIP</span>
          <h2>Our Management & Clinical Staff</h2>
          <p>
            Guided by distinguished medical administrators and a compassionate elite team of clinicians, nursing officers, and healthcare professionals committed to the nation.
          </p>
        </div>

        {/* Layout Split Grid */}
        <div className="leadership-split-grid">
          
          {/* ==========================================================================
             👤 SECTION A: THE HOSPITAL DIRECTOR CARD
             ========================================================================== */}
          <div className="director-profile-card">
            <div className="profile-image-frame">
              {/* 📸 USER INSTRUCTION: REPLACE THE URL PROPS BELOW WITH YOUR DIRECTORY PHOTO PATH */}
              <img 
                src={DirectorImg} 
                alt="Director of Sri Jayawardhanapura General Hospital" 
                className="leader-photo"
              />
              <div className="frame-clinical-overlay">
                <span className="credential-pill">Director / Chief Executive</span>
              </div>
            </div>
            
            <div className="profile-details-box">
              <h3>Dr. Ratnasiri A. Hewage</h3>
              <p className="leader-qualification">MBBS, MSc, MD (Medical Administration)</p>
              <hr className="profile-accent-line" />
              <p className="leader-message">
                "Our objective remains steadfast: delivering supreme medical care utilizing state-of-the-art facilities while preserving our non-profit, semi-autonomous status to serve the citizens of Sri Lanka with transparency, absolute integrity, and clinical distinction."
              </p>
            </div>
          </div>

          {/* ==========================================================================
             👥 SECTION B: THE MEDICAL & NURSING STAFF CARD
             ========================================================================== */}
          <div className="staff-overview-card">
            <div className="profile-image-frame">
              {/* 📸 USER INSTRUCTION: REPLACE THE URL PROPS BELOW WITH YOUR COMPREHENSIVE STAFF GROUP PHOTO PATH */}
              <img  
                src={StaffImg} 
                alt="Medical and Nursing Staff Team of SJGH" 
                className="leader-photo"
              />
              <div className="frame-clinical-overlay">
                <span className="credential-pill clinical-teal-pill">Clinical Workforce</span>
              </div>
            </div>

            <div className="profile-details-box">
              <h3>Our Healthcare Professionals</h3>
              <p className="leader-qualification">Consultants, Medical Officers, Matrons & Nursing Professionals</p>
              <hr className="profile-accent-line" />
              <p className="leader-message">
                Backed by a dedicated staff network spanning over 37 medical and surgical departments, our nursing division, laboratory technicians, and paramedics provide round-the-clock emergency assistance and inpatient care across our 1,300+ bed facility.
              </p>
              
              {/* Inner Staff Metrics Grid */}
              <div className="staff-sub-metrics">
                <div className="metric-badge">
                  <strong>80+</strong> <span>Consultants</span>
                </div>
                <div className="metric-badge">
                  <strong>450+</strong> <span>Nursing Staff</span>
                </div>
                <div className="metric-badge">
                  <strong>24/7</strong> <span>Care Coverage</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutLeadership;