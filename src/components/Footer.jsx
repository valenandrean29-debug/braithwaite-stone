import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section reveal-on-scroll">
      <div className="container footer-container">

        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo-title">
            <h3 className="footer-title">Braithwaite & Stone</h3>
          </div>
          <p className="footer-description">
            Cross border finance and consultancy, spanning across 5 universities.
          </p>
          <div className="footer-socials">
            {/* LinkedIn */}
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            {/* Gmail */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=braithwaiteandstone@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Gmail">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">

          <div className="footer-col">
            <h4 className="footer-col-title">CLUB</h4>
            <ul className="footer-menu">
              <li><a href="#about">- About</a></li>
              <li><a href="#proposal">- Proposal</a></li>
              <li><a href="#join">- Join</a></li>
              <li><a href="#team">- Team</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">RESOURCE</h4>
            <ul className="footer-menu">
              <li><a href="#repository">- Repository</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">CAPABILITY</h4>
            <ul className="footer-menu">
              <li><a href="#work">- Advisory</a></li>
              <li><a href="#work">- Finance / Business Comp.</a></li>
              <li><a href="#work">- Research Citation</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">CHINA</h4>
            <ul className="footer-menu no-dash">
              <li>Shenzhen</li>
              <li>Hangzhou</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">INDONESIA</h4>
            <ul className="footer-menu no-dash">
              <li>Jakarta</li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
