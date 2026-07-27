import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <section className="cta-section reveal-on-scroll">
      <div className="container cta-container">
        
        <div className="cta-left">
          <span className="cta-subtitle">MEMBERSHIP</span>
          <h2 className="cta-title">Where real-world<br/>impact begins.</h2>
        </div>
        
        <div className="cta-right">
          <p className="cta-description">
            Gain direct exposure to cross-border advisory mandates, international business competitions, and an elite network of student professionals shaping the future of finance.
          </p>
          <button className="cta-button">
            Join us now
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cta-icon">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Cta;
