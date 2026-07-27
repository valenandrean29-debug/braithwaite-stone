import React from 'react';
import './About.css';

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const IconCard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <line x1="2" y1="10" x2="22" y2="10"/>
  </svg>
);

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-left reveal-on-scroll">
        <h3 className="section-subtitle">ABOUT THE CLUB</h3>
        <div className="about-description">
          <p>
            Our club focuses on three main areas. First, we provide free and practical advisory support to help entrepreneurs understand their challenges, improve their business strategies, and explore potential growth opportunities.
          </p>
          <p>
            Second, our members participate in business case competitions to strengthen their analytical, teamwork, and presentation skills.
          </p>
          <p>
            Third, we produce research papers on business, finance, economics, and issues affecting startups and MSMEs. We are not a commercial consulting company, but a student organization committed to learning, collaboration, and creating meaningful impact.
          </p>
        </div>
      </div>

      <div className="about-right reveal-on-scroll">
        <h3 className="section-subtitle light">WHAT SETS US APART</h3>

        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon"><IconGlobe /></div>
            <div className="feature-content">
              <h4 className="feature-title">Cross-border Network</h4>
              <p className="feature-text">We operate across China and Indonesia, with members based in Hangzhou, Shenzhen, and Jakarta.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon"><IconTarget /></div>
            <div className="feature-content">
              <h4 className="feature-title">Diverse Market Perspective</h4>
              <p className="feature-text">Our international team brings different cultural, economic, and business perspectives to every project.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon"><IconCard /></div>
            <div className="feature-content">
              <h4 className="feature-title">Learning Through Real Impact</h4>
              <p className="feature-text">We combine free MSME and startup advisory, business case competitions, and research to create value for both businesses and students.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
