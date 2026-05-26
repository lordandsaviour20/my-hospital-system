import React from 'react';
import CtScannerImg from './4D CTM.png'; 

function LatestUpdates() {
  const updatesData = [
    {
      id: 1,
      date: "May 24, 2026",
      tag: "Pioneering Tech",
      title: "South Asia's First Ultra-Definition 4D CT Scanner Installed",
      description: "Setting a new gold standard in diagnostic radiology. Our newly unveiled 4D imaging system captures motion-tracked physiological parameters in real-time, reducing radiation exposure by up to 40% while capturing unprecedented cardiac and structural details.",
      linkText: "Read Case Study",
      isFeatured: true,
      image: CtScannerImg 
    },
    {
      id: 2,
      date: "May 10, 2026",
      tag: "Infrastructure Expansion",
      title: "Phase II New Wing Complex Reaches Structural Completion",
      description: "Our upcoming multi-story clinical complex has officially topped out. The new wing will expand total patient capacity, introducing specialized isolation units, modular critical care rooms, and enhanced family lounges.",
      linkText: "View Project Timeline",
      isFeatured: false
    },
    {
      id: 3,
      date: "April 18, 2026",
      tag: "International Standards",
      title: "Clinical Excellence Re-Certified with Premium Global Rating",
      description: "Following an extensive multi-facility evaluation of our patient treatment protocols, hygiene standards, and emergency triage operations, our healthcare network has been awarded top-tier certification.",
      linkText: "Learn More",
      isFeatured: false
    }
  ];

  return (
    <section className="updates-master-wrapper">
      <div className="updates-bounded-container">
        
        <div className="updates-header-dock">
          <div className="header-left-side">
            <span className="updates-mini-badge">MEDIA CENTRE</span>
            <h2>Latest Milestones & Progress Updates</h2>
          </div>
          <button className="global-archive-btn">
            <span>View All News</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>

        <div className="updates-asymmetric-grid">
          {updatesData.map((update) => (
            <div 
              key={update.id} 
              className={`update-editorial-card ${update.isFeatured ? 'featured-block' : 'standard-block'}`}
            >
              <div className="card-ambient-overlay"></div>
              
              {/* Left Content Column wrapper for featured layout split */}
              <div className="card-body-content">
                <div className="card-meta-row">
                  <span className="update-tag-pill">{update.tag}</span>
                  <span className="update-calendar-date">{update.date}</span>
                </div>

                <h3 className="update-headline">{update.title}</h3>
                <p className="update-summary-prose">{update.description}</p>
                
                <div className="card-action-footer">
                  <a href="#read-more" className="update-hyperlink-anchor" onClick={(e) => e.preventDefault()}>
                    {update.linkText}
                    <span className="link-chevron">→</span>
                  </a>
                </div>
              </div>

              {/* Conditional Image Render: Placed side-by-side inside the featured block */}
              {update.image && (
                <div className="card-media-aside">
                  <img src={update.image} alt={update.title} className="aside-featured-img" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LatestUpdates;