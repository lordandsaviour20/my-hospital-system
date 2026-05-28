import React from 'react';


function Contact() {
  return (
    <div className="sjgh-contact-page">
      <div className="contact-master-container">
        
 
        <section className="contact-editorial-header">
          <div className="header-left">
            <span className="contact-mini-tag">Sovereign Communication Hub</span>
            <h1 className="contact-main-title">Connect with the <br />Healing Ecosystem</h1>
          </div>
          <div className="header-right">
            <p className="contact-subtitle">
              Access immediate medical channels, directory extensions, and administrative desks at our central 30-acre Sri Jayewardenepura campus.
            </p>
          </div>
        </section>


        <section className="contact-matrix-grid">
          
          {/* Main Hotlines (Spans 2 columns for layout variance) */}
          <div className="matrix-block block-headline">
            <span className="block-tag">24/7 Primary Response</span>
            <h3 className="block-title">General Campus Exchange</h3>
            <div className="phone-stack">
              <a href="tel:+94112778610" className="matrix-phone-link">+94 11 2778610</a>
              <a href="tel:+94112778611" className="matrix-phone-link">+94 11 2778611</a>
              <a href="tel:+94112778615" className="matrix-phone-link">+94 11 2778615</a>
            </div>
            <p className="block-prose">
              Our central exchange connects directly to clinical paging, ward desks, and residential specialist offices.
            </p>
          </div>

          {/* Emergency Trauma Node */}
          <div className="matrix-block block-accent">
            <span className="block-tag">Critical Care Priority</span>
            <h3 className="block-title">Trauma & Accident Service</h3>
            <a href="tel:+94112778650" className="matrix-phone-link emergency-text">+94 11 2778650</a>
            <p className="block-prose">
              Direct telemetry bypass line dedicated strictly to ambulance coordination and acute cardiac/neural trauma intake.
            </p>
          </div>

          {/* Electronic Channeling & Booking */}
          <div className="matrix-block">
            <span className="block-tag">Outpatient Access</span>
            <h3 className="block-title">Channelling & Checkups</h3>
            <span className="matrix-detail-label">Extension: 415 / 416</span>
            <p className="block-prose">
              Inquiries regarding digital tokens, specialist availability windows, and health screening packages.
            </p>
          </div>

          {/* Blood Bank & Lab Services */}
          <div className="matrix-block">
            <span className="block-tag">Diagnostic Units</span>
            <h3 className="block-title">Pathology & Blood Bank</h3>
            <span className="matrix-detail-label">Extension: 302</span>
            <p className="block-prose">
              Direct line for blood donor scheduling, laboratory report tracking, and specialized histopathology queries.
            </p>
          </div>

          {/* Administrative Node */}
          <div className="matrix-block">
            <span className="block-tag">Corporate Relations</span>
            <h3 className="block-title">Director General's Secretariat</h3>
            <a href="mailto:info@sjgh.lk" className="matrix-email-link">info@sjgh.lk</a>
            <p className="block-prose">
              For official correspondence, parliamentary board inquiries, and multi-government medical research submissions.
            </p>
          </div>

        </section>

        {/* ==========================================================================
           3. GEOGRAPHIC LOCATOR & POSTAL LAYOUT (Minimalist Ash Footer Block)
           ========================================================================== */}
        <section className="contact-locator-strip">
          <div className="locator-column text-side">
            <span className="locator-tag">Physical Anchor</span>
            <h3 className="locator-title">The Sanctuary Address</h3>
            <p className="locator-address">
              Sri Jayewardenepura General Hospital,<br />
              Thalapathpitiya, Nugegoda,<br />
              Sri Lanka.
            </p>
          </div>
          <div className="locator-column map-placeholder-side">
            {/* Minimalist Graphic Blueprint representation instead of a heavy embedded iframe */}
            <div className="blueprint-map-card">
              <span className="blueprint-lat-long">6.8833° N, 79.9167° E</span>
              <div className="blueprint-grid-lines"></div>
              <a 
                href="https://maps.google.com/?q=Sri+Jayewardenepura+General+Hospital" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="blueprint-nav-btn"
              >
                Launch Satellite Navigation
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Contact;