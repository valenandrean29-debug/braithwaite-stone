import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section reveal-on-scroll">
      <div className="container">
        <div className="stats-grid">
          
          <div className="stat-item reveal-on-scroll">
            <div className="stat-number">
              <span className="num">2</span> <span className="label">Countries</span>
              <br />
              <span className="num">5</span> <span className="label">Universities</span>
            </div>
            <div className="stat-divider"></div>
            <p className="stat-desc">
              Showcasing our geographical reach and the institutions involved.
            </p>
          </div>

          <div className="stat-item reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="stat-number">
              <span className="num">3</span>
            </div>
            <h4 className="stat-title">Citations</h4>
            <div className="stat-divider"></div>
            <p className="stat-desc">
              Number of recognized scientific citations and publications.
            </p>
          </div>

          <div className="stat-item reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <div className="stat-number">
              <span className="num">3</span>
            </div>
            <h4 className="stat-title">Competition Historical</h4>
            <div className="stat-divider"></div>
            <p className="stat-desc">
              Our track record in attending and organizing competitions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
