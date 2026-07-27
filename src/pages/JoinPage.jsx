import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './JoinPage.css';

const JoinPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app fade-in-on-load">
      <Navbar />

      <main className="join-page">
        <section className="join-header">
          <div className="container">
            <h3 className="join-subtitle">JOIN US</h3>
            <h1 className="join-title">Join Our Team</h1>
            <p className="join-description">
              We are always looking for exceptional talent to join our advisory team.
              If you have a passion for cross-border finance and strategic growth, we want to hear from you.
            </p>
          </div>
        </section>

        <section className="join-content">
          <div className="container">
            <div className="join-card reveal-on-scroll is-visible">
              <h2 className="step-title" style={{ marginBottom: '10px', fontSize: '2rem' }}>Get in Touch</h2>
              <p className="step-desc" style={{ marginBottom: '20px' }}>
                Reach out to us directly to inquire about open positions or to submit your resume.
              </p>

              <div className="contact-options">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=braithwaiteandstone@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-btn gmail">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Us via Gmail
                </a>

                <a href="https://wa.me/6285282402150" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JoinPage;
