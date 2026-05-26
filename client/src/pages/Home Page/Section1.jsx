import React from 'react';


function ServicesGrid() {
  // Array matrix containing your individual services
  const servicesData = [
    { id: 1, title: 'HEART CENTRES', icon: '🫀' },
    { id: 2, title: 'BRAIN & SPINE CENTRE', icon: '🧠' },
    { id: 3, title: 'BONE MARROW TRANSPLANT', icon: '🦠' },
    { id: 4, title: 'STROKE CENTRE', icon: '⚡' },
    { id: 5, title: 'INTERVENTIONAL RADIOLOGY', icon: '🩻' },
    { id: 6, title: 'MOTHER & BABY CARE', icon: '👶' },
    { id: 7, title: 'KIDNEY TRANSPLANT', icon: '🫁' },
    { id: 8, title: 'UROLOGY SERVICES', icon: '🩺' },
  ];

  return (
    <section className="network-section-container">
      
      {/* 1️⃣ LEFT SIDE: Independent Banner Component */}
      <div className="network-banner-side">
        <h2> SJGH NETWORK</h2>
        <p>
          Providing exceptional medical care across premium facilities. 
          Soon launching new digital transformations in collaboration with 
          leading global healthcare brands.
        </p>
        
        <ul className="location-quick-links">
          <li><span>MAIN HOSPITAL</span> <span className="arrow-icon">→</span></li>
          <li><span>SURGICAL WING</span> <span className="arrow-icon">→</span></li>
          <li><span>CENTRAL CLINIC</span> <span className="arrow-icon">→</span></li>
          <li><span>OUTPATIENT CARE</span> <span className="arrow-icon">→</span></li>
          <li><span>LABORATORIES</span> <span className="arrow-icon">→</span></li>
        </ul>
      </div>

      {/* 2️⃣ RIGHT SIDE: Separate vertical stack container for cards */}
      <div className="cards-vertical-stack">
        {servicesData.map((service) => (
          <div key={service.id} className="independent-round-card">
            <div className="card-icon">{service.icon}</div>
            <div className="card-info">
              <h3>{service.title}</h3>
              <p>Click to view standard operating schedules and specialist information.</p>
            </div>
            <span className="card-action-arrow">→</span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ServicesGrid;