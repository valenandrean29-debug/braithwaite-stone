import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section container" id="work">
      <div className="services-header reveal-on-scroll">
        <h3 className="section-subtitle">WHAT WE DO</h3>
        <h2 className="services-title">Delivering for Our Clients</h2>
      </div>

      <div className="services-grid">
        {/* Service 1 */}
        <div className="service-card reveal-on-scroll">
          <div className="service-image-container">
            <img src="/images/startup_advisory.png" alt="Startup Advisory" className="service-image" />
          </div>
          <h4 className="service-name">Startup Advisory</h4>
          <p className="service-desc">
            Helps startups analyze business and financial problems.
          </p>
          <div className="service-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-card reveal-on-scroll">
          <div className="service-image-container">
            <img src="/images/business_competition.png" alt="Business Case Competition" className="service-image" />
          </div>
          <h4 className="service-name">Business Case Competition</h4>
          <p className="service-desc">
            Form a cross-university team to take part in the competition.
          </p>
          <div className="service-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-card reveal-on-scroll">
          <div className="service-image-container">
            <img src="/images/financial_research.png" alt="Financial Research" className="service-image" />
          </div>
          <h4 className="service-name">Financial Research</h4>
          <p className="service-desc">
            Industry analysis, valuation, financial reports, and market research.
          </p>
          <div className="service-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
