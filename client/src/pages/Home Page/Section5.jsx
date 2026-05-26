import React, { useState, useEffect, useRef } from 'react';

function PatientFeedback() {
  const feedbacks = [
    {
      id: 1,
      patientName: "Minoli Perera",
      treatment: "Cardiology Care",
      date: "May 14, 2026",
      quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?" ,
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 2,
      patientName: "David Silva",
      treatment: "Robotic Surgery Patient",
      date: "April 28, 2026",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 3,
      patientName: "Fathima Rizwan",
      treatment: "Pediatric Outpatient",
      date: "March 11, 2026",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 4,
        patientName: "Anura Fernando",
        treatment: "Orthopedics & Bone Care",
        date: "May 22, 2026",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
        rating: "⭐⭐⭐⭐⭐"
      },
      {
        id: 5,
        patientName: "Priyantha Jayasinghe",
        treatment: "Stroke Centre Recovery",
        date: "May 19, 2026",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
        rating: "⭐⭐⭐⭐⭐"
      },
      {
        id: 6,
        patientName: "Sarah Lindsey",
        treatment: "Wellness Package Patient",
        date: "May 05, 2026",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
        rating: "⭐⭐⭐⭐⭐"
      },
      {
        id: 7,
        patientName: "Nisha Mohamed",
        treatment: "Online Pharmacy & Delivery",
        date: "April 19, 2026",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
        rating: "⭐⭐⭐⭐"
      },
      {
        id: 8,
        patientName: "Kamal Gunaratne",
        treatment: "Kidney Transplant Recipient",
        date: "April 02, 2026",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
        rating: "⭐⭐⭐⭐⭐"
      },
      {
        id: 9,
        patientName: "Elena Rostova",
        treatment: "Interventional Radiology",
        date: "March 24, 2026",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
        rating: "⭐⭐⭐⭐⭐"
      },
      {
        id: 10,
        patientName: "Suresh Kumar",
        treatment: "Laboratory Reporting Services",
        date: "March 15, 2026",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
        rating: "⭐⭐⭐⭐"
      },
      {
        id: 11,
        patientName: "Dilini Wijesinghe",
        treatment: "Cancer Care Institute",
        date: "February 27, 2026",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
        rating: "⭐⭐⭐⭐⭐"
      },
      {
        id: 12,
        patientName: "Robert Vance",
        treatment: "Urology Care Outpatient",
        date: "February 12, 2026",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
        rating: "⭐⭐⭐⭐⭐"
      },
      {
        id: 13,
        patientName: "Thusitha Perera",
        treatment: "Emergency Unit Services",
        date: "January 30, 2026",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus dolores cumque. Nesciunt sunt deleniti quaerat aliquid asperiores, eligendi, dolore quisquam laudantium odit veniam necessitatibus eveniet expedita a architecto nobis?",
        rating: "⭐⭐⭐⭐⭐"
      }
    ];
  
    const [activeIndex, setActiveIndex] = useState(0);
    const autoPlayRef = useRef();
  
    // Navigation Controller Utilities
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
    };
  
    // Keep a reference to the latest function context execution chain
    useEffect(() => {
      autoPlayRef.current = handleNext;
    });
  
    // 🌟 THE AUTOPLAY SYSTEM: Advances indices every 5000 milliseconds
    useEffect(() => {
      const play = () => {
        autoPlayRef.current();
      };
  
      const interval = setInterval(play, 4000);
  
      // Clean up interval execution frames when unmounting or when users interrupt via button clicks
      return () => clearInterval(interval);
    }, [activeIndex]); // Re-subscribing explicitly here restarts the 5-second countdown window cleanly on click
  
    return (
      <section className="feedback-master-section">
        <div className="feedback-asymmetric-wrapper">
          
          {/* Left Side: Static Brand Card & Active State Counters */}
          <div className="feedback-brand-card">
            <div className="brand-card-glow"></div>
            <p className="feedback-tagline">PATIENT VOICES</p>
            <h2>Stories of Healing & Hope</h2>
            <p className="brand-card-desc">
              Nothing drives our medical specialists forward more than seeing our patients return to full health. Read about their real recovery experiences.
            </p>
            
            <div className="feedback-scroller-dock">
              <div className="scroller-counter">
                <span className="current-count">
                  {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1}
                </span>
                <span className="counter-divider">/</span>
                <span className="total-count">{feedbacks.length}</span>
              </div>
              
              <div className="scroller-buttons">
                <button onClick={handlePrev} className="scroller-btn" aria-label="Previous Feedback">
                  ←
                </button>
                <button onClick={handleNext} className="scroller-btn" aria-label="Next Feedback">
                  →
                </button>
              </div>
            </div>
          </div>
  
          {/* Right Side: Dynamic Sliding Display */}
          <div className="feedback-stage-view">
            {feedbacks.map((item, index) => {
              let cardClass = "feedback-fluid-bubble dynamic-hidden";
              if (index === activeIndex) cardClass = "feedback-fluid-bubble dynamic-active";
              if (index === (activeIndex + 1) % feedbacks.length) cardClass = "feedback-fluid-bubble dynamic-incoming";
  
              return (
                <div key={item.id} className={cardClass}>
                  <div className="quote-decorative-mark">“</div>
                  
                  <div className="bubble-meta-header">
                    <span className="treatment-badge">{item.treatment}</span>
                    <span className="feedback-date">{item.date}</span>
                  </div>
  
                  <p className="patient-testimonial-text">{item.quote}</p>
                  
                  <div className="bubble-footer-profile">
                    <div className="profile-avatar-placeholder">
                      {item.patientName.charAt(0)}
                    </div>
                    <div className="profile-identity">
                      <h4>{item.patientName}</h4>
                      <div className="star-rating">{item.rating}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default PatientFeedback;