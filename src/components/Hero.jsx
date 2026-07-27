import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">
          Cross-border <br />
          <span className="italic-text">Student Finance</span><br />
          Advisory
        </h1>

        <p className="hero-description">
          We are a student-led club that supports micro-businesses, MSMEs, and early-stage startups through free business advisory, research, and practical problem-solving.
        </p>

        <div className="hero-actions">
          <a className="hero-cta primary-cta" href="#proposal" style={{ textDecoration: 'none' }}>
            Apply for Advisory
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cta-icon"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
          <a className="hero-cta secondary-cta" href="#join" style={{ textDecoration: 'none' }}>
            Join Our Team
          </a>
        </div>


      </div>

      <div className="hero-visual">
        <div className="globe-container"></div>
      </div>
    </section>
  );
};

export default Hero;
