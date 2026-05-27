import React from 'react';

function AboutHistory() {
  const historyData = [
    {
      year: "1951",
      tag: "The San Francisco Alliance",
      title: "The Seed of Diplomatic Sovereign Honor",
      description: "Hon. J.R. Jayawardene delivers his iconic defense of a sovereign Japan post-WWII. Waiving all war reparations from Sri Lanka, he quotes the Dhammapada, forging an unforgettable bond of global reconciliation."
    },
    {
      year: "1983",
      tag: "Parliamentary Act No. 54",
      title: "The National Legislative Foundation",
      description: "Sri Jayewardenepura General Hospital is formally established by law as a premier public corporation. Ground is broken on a sprawling 30-acre campus gifted entirely by the people of Japan."
    },
    {
      year: "1984",
      tag: "The State Opening",
      title: "Inception of Clinical Execution",
      description: "The medical campus is officially declared open to the public. Built to top-tier Japanese architectural standards, it immediately transforms the regional landscape, introducing state-of-the-art diagnostic networks."
    },
    {
      year: "2030",
      tag: "Strategic Vision Blueprint",
      title: "The South Asian Tertiary Epicenter",
      description: "Scaling our infrastructure toward automated clinical workflows, complex postgraduate training streams, and advanced non-invasive surgical programs to remain the region's most trusted sanctuary of healing."
    }
  ];

  return (
    <section className="sjgh-matrix-history" id="history">
      <div className="matrix-container">
        
        {/* Crisp Asymmetric Header */}
        <div className="matrix-editorial-header">
          <div className="header-left">
            <span className="matrix-mini-tag">Chronicle Archive</span>
            <h2 className="matrix-main-title">A Legacy Written in Honor</h2>
          </div>
          <div className="header-right">
            <p className="matrix-subtitle">
              Trace the chronological milestones that evolved a historic diplomatic speech into South Asia's premier healing ecosystem.
            </p>
          </div>
        </div>

        {/* The Matrix Stream */}
        <div className="matrix-stream">
          {historyData.map((item, index) => (
            <div key={index} className="matrix-row">
              
              {/* Left Column: Big Typographic Stamp */}
              <div className="matrix-time-block">
                <div className="stamp-wrap">
                  <span className="matrix-index-num">0{index + 1} //</span>
                  <h3 className="matrix-huge-year">{item.year}</h3>
                </div>
                <div className="matrix-ash-divider"></div>
              </div>

              {/* Right Column: Layered Content Deck */}
              <div className="matrix-content-block">
                <span className="matrix-content-tag">{item.tag}</span>
                <h4 className="matrix-content-title">{item.title}</h4>
                <p className="matrix-content-prose">{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutHistory;