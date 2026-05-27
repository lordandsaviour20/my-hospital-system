import React from 'react';
import AboutHero from './AboutHero';
import AboutHistory from './AboutHistory';
import AboutStats from './AboutStats';
import './About.css';
import AboutLeadership from './AboutLeadership';
import AboutFooterBanner from './AboutFooterBanner'

function AboutMain() {
  return (
    <div className="sjgh-about-page">
      <AboutHero />
      <AboutLeadership/>
      <AboutStats />
      <AboutHistory />
      <AboutFooterBanner/>
    </div>
  );
}

export default AboutMain;