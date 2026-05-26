import React from 'react';

function ConvenienceServices() {
  const serviceCards = [
    { id: 1, title: 'DOWNLOAD LAB REPORTS', desc: 'Access your laboratory test results here with ease.', icon: '🔬' },
    { id: 2, title: 'CONSULTATION BOOKINGS', desc: 'Make your consultant channeling appointment here.', icon: '📅' },
    { id: 3, title: 'ONGOING NUMBER', desc: 'Monitor the ongoing number for your consultant to schedule your arrival.', icon: '🔢' },
    { id: 4, title: 'PRE-REGISTRATION', desc: 'Save time by completing your registration here before your visit.', icon: '📝' },
    { id: 5, title: 'ONLINE PHARMACY', desc: 'Order your prescription medication and have them delivered to your doorstep.', icon: '💊' },
    { id: 6, title: 'WELLNESS PACKAGES', desc: 'Explore our menu of health check packages to maintain your good health.', icon: '❤️' },
    { id: 7, title: 'PAYMENT PORTAL', desc: 'Make secure online payments for your medical bills.', icon: '💳' },
    { id: 8, title: 'PATIENT FEEDBACK', desc: 'Please share your experience with us to help ensure it’s a good one.', icon: '💬' },
  ];

  return (
    <section className="convenience-parallax-section">
      {/* Dark overlay to ensure text readability over the background image */}
      <div className="parallax-dark-overlay"></div>

      <div className="convenience-content-wrapper">
        <header className="convenience-header">
          <p className="subtitle">Caring for the health of you and your family</p>
          <h2>Use The Convenience Of Our Online Services Here</h2>
        </header>

        <div className="convenience-cards-grid">
          {serviceCards.map((card) => (
            <div key={card.id} className="convenience-white-card">
              <div className="convenience-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConvenienceServices;