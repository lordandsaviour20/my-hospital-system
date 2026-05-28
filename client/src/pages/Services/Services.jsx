import React from 'react';

function Services() {
  return (
    <div className="sjgh-services-page">
      <div className="services-master-container">
        

        <section className="services-editorial-header">
          <div className="services-header-left">
            <span className="services-mini-tag">Tertiary Care Framework</span>
            <h1 className="services-main-title">Clinical Care & <br />Specialized Excellence</h1>
          </div>
          <div className="services-header-right">
            <p className="services-subtitle">
              Explore the comprehensive medical ecosystems across our 30-acre campus, combining advanced specialized surgical departments with state-of-the-art diagnostic operations.
            </p>
          </div>
        </section>


        <section className="services-section-wrapper">
          <div className="section-meta">
            <span className="section-number">01</span>
            <h2 className="section-heading">Core Medical & <br />Surgical Specialities</h2>
          </div>
          
          <div className="services-grid">
            <div className="service-card accent-left">
              <h3>Cardiology & Cardiothoracic Surgery</h3>
              <p>Equipped with state-of-the-art catheterization labs for interventional procedures, coronary bypass grafting, and advanced cardiac pacing management.</p>
              <span className="service-badge">Apex Unit</span>
            </div>

            <div className="service-card">
              <h3>Nephrology & Renal Transplant</h3>
              <p>A premier center for continuous renal replacement therapy, chronic kidney disease management, and highly successful live/cadaveric kidney transplant operations.</p>
              <span className="service-badge">Specialist Hub</span>
            </div>

            <div className="service-card">
              <h3>General & Laparoscopic Surgery</h3>
              <p>Advanced minimally invasive surgical options spanning oncology resections, gastrointestinal pathways, and complex trauma reconstruction.</p>
            </div>

            <div className="service-card">
              <h3>Neurology & Neurosurgery</h3>
              <p>Comprehensive neurological mapping, stroke management pipelines, and intricate microscopic surgeries for brain and spinal cord trauma.</p>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section className="services-section-wrapper">
          <div className="section-meta">
            <span className="section-number">02</span>
            <h2 className="section-heading">Diagnostic & <br />Outpatient Operations</h2>
          </div>
          
          <div className="services-grid alternative-style">
            <div className="service-card text-block">
              <span className="card-mini-label">24/7 Diagnostics</span>
              <h3>Advanced Radiology & Imaging</h3>
              <p>High-resolution Multi-slice CT scanning, modern MRI telemetry, digital mammography, and ultrasound-guided intervention diagnostics.</p>
            </div>

            <div className="service-card text-block">
              <span className="card-mini-label">Fully Automated Lab</span>
              <h3>Pathology & Histology Services</h3>
              <p>Comprehensive hematology, clinical chemistry, and tissue profiling with direct electronic linkage to your digital patient profiles.</p>
            </div>

            <div className="service-card text-block">
              <span className="card-mini-label">Preventative Care</span>
              <h3>Executive Health Screenings</h3>
              <p>Tailored wellness panels, occupational health checkups, and early-detection medical packages engineered for proactive health tracking.</p>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section className="services-emergency-strip">
          <div className="emergency-strip-content">
            <span className="emergency-tag">Critical Infrastructure</span>
            <h2 className="emergency-title">Trauma Center & Acute Critical Care Bypass</h2>
            <p className="emergency-prose">
              Our 24-hour emergency department manages acute medical crises, major poly-trauma admissions, and sudden cardiac emergencies with dedicated triage and real-time surgical bypass pathways.
            </p>
          </div>
          <div className="emergency-action-block">
            <span className="emergency-phone-label">Direct Triage Dispatch</span>
            <a href="tel:+94112778650" className="emergency-phone-btn">+94 11 2778650</a>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Services;