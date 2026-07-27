import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './TeamPage.css';

const TeamMemberPage = ({ memberId }) => {
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/team/${memberId}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success' && data.data) {
          setMember(data.data);
        } else {
          setError(true);
        }
      })
      .catch(err => {
        console.error('Error fetching member:', err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [memberId]);

  return (
    <div className="app fade-in-on-load">
      <Navbar />
      
      <main className="team-page" style={{ padding: '100px 0', minHeight: '80vh' }}>
        <div className="container">
          <a href="#team" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '30px', textDecoration: 'none', color: 'var(--color-navy)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, transition: 'opacity 0.2s ease' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.7}>
            &larr; Back to Team
          </a>

          {loading ? (
            <p style={{ textAlign: 'center', padding: '40px' }}>Loading profile...</p>
          ) : error || !member ? (
            <p style={{ textAlign: 'center', padding: '40px' }}>Member not found.</p>
          ) : (
            <div className="proposal-card reveal-on-scroll is-visible" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', gap: '40px', padding: '50px', alignItems: 'flex-start', backgroundColor: 'var(--color-pearl)' }}>
              
              {/* Left Column (1/3) */}
              <div className="member-sidebar" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div className="team-avatar-placeholder" style={{ width: '220px', height: '220px', marginBottom: '30px', overflow: 'hidden', border: '1px solid rgba(15, 23, 42, 0.1)', backgroundColor: 'rgba(15, 23, 42, 0.05)' }}>
                  {member.profile_url ? (
                    <img src={member.profile_url} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="avatar-icon">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  )}
                </div>
                
                <div className="member-links" style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', alignItems: 'center' }}>
                  {member.website_url && (
                    <a href={member.website_url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-navy)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-mahogany)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-navy)'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                      Personal Website
                    </a>
                  )}
                  {member.instagram_url && (
                    <a href={member.instagram_url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-navy)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-mahogany)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-navy)'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      Instagram
                    </a>
                  )}
                  {member.linkedin_url && (
                    <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-navy)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-mahogany)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-navy)'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column (2/3) */}
              <div className="member-details" style={{ flex: '2', textAlign: 'left', paddingLeft: '30px', borderLeft: '1px solid rgba(15, 23, 42, 0.1)', width: '100%' }}>
                <h1 className="team-title" style={{ fontSize: '3rem', marginBottom: '10px', marginTop: '0', color: 'var(--color-navy)' }}>{member.name}</h1>
                <h3 className="section-subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-gold)', marginBottom: '25px', letterSpacing: '2px' }}>{member.role}</h3>
                
                {member.school && (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--color-navy)', fontWeight: '500', marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px', opacity: 0.7 }}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    {member.school}
                  </p>
                )}

                {member.job_desc && (
                  <div className="team-description" style={{ marginTop: '30px', lineHeight: '1.8' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'var(--color-navy)', borderBottom: '1px solid rgba(107, 68, 35, 0.2)', paddingBottom: '8px', display: 'inline-block', fontFamily: 'var(--font-serif)' }}>About & Responsibilities</h4>
                    <p style={{ whiteSpace: 'pre-line', color: 'var(--color-navy)', opacity: 0.9 }}>{member.job_desc}</p>
                  </div>
                )}
                
                {(!member.job_desc && member.brief_description) && (
                  <div className="team-description" style={{ marginTop: '30px', lineHeight: '1.8' }}>
                    <p style={{ color: 'var(--color-navy)', opacity: 0.9 }}>{member.brief_description}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamMemberPage;
