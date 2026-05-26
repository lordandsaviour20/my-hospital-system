import React, { useState, useEffect, useRef } from 'react';
import RoboArm from './Surgery by Robotic Arm by Dr. Niroshan.png'; //


//  ANIMATED COUNTER CONTROLLER COMPONENT
function CountUpItem({ targetNumber, label }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only when the item is visible on the screen
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          // Extract purely numeric digits from strings like "3500+" or "14500+"
          const end = parseInt(targetNumber.replace(/[^0-9]/g, ''), 10);
          if (start === end) return;

          // Compute a dynamic duration so large numbers don't take forever
          const totalDuration = 2000; // 2 seconds total animation time
          const frameDuration = 1000 / 60; // ~60fps rendering speed
          const totalFrames = Math.round(totalDuration / frameDuration);
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            // Easing function: Makes the counting slow down beautifully near the end
            const progress = frame / totalFrames;
            const easeOutQuad = progress * (2 - progress);
            
            const currentCount = Math.floor(easeOutQuad * end);
            setCount(currentCount);

            if (frame >= totalFrames) {
              clearInterval(counter);
              setCount(end); // Ensure it lands exactly on the targeted integer
            }
          }, frameDuration);
        }
      },
      { threshold: 0.1 } // Fires when at least 10% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  // Determine if there's a plus sign suffix in the original target string
  const hasPlus = targetNumber.includes('+');

  return (
    <div className="stat-item" ref={elementRef}>
      <h3>
        {count}
        {hasPlus && '+'}
      </h3>
      <p>{label}</p>
    </div>
  );
}

function Section3() {
  return (
    <>
      {/* Existing "Why Choose Us" section layout */}
      <div className='container'> {/* */}
        <div className='textBlock'>
          <h2>WHY CHOOSE US</h2> {/* */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt enim quae 
            repudiandae quibusdam assumenda laborum qui! Iusto exercitationem quos eveniet 
            adipisci facere quae repellat alias, velit nulla praesentium saepe ea? {/* */}
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quas? Quod, ex 
            quaerat! Assumenda facere temporibus repudiandae quisquam nesciunt corrupti 
            consequatur eum quibusdam, in id, quam aliquam obcaecati adipisci quia. {/* */}
          </p>
        </div>
        <img className='sideImage' src={RoboArm} alt="Dr.Niroshan" /> {/* */}
      </div>

      {/* 📊 ANIMATED STATS RIBBON CONTAINER */}
      <section className="stats-ribbon-container">
        <div className="stats-ribbon-content">
          <CountUpItem targetNumber="800+" label="Consultants" />
          <CountUpItem targetNumber="3500+" label="Consultations Per Day" />
          <CountUpItem targetNumber="4250+" label="Tests Offered" />
          <CountUpItem targetNumber="14500+" label="Tests Per Day" />
          <CountUpItem targetNumber="800+" label="Beds" />
        </div>
      </section>
    </>
  );
}

export default Section3; //