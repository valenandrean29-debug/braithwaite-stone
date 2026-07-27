import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './TeamPage.css';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ensure we scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/team')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success' && data.data && data.data.length > 0) {
          setTeamMembers(data.data);
        } else {
          // Fallback to riddler placeholder if empty
          setTeamMembers([
            {
              id: 'placeholder',
              name: 'The Riddler',
              role: 'Master of Puzzles',
              profile_url: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Riddler_%28DC_Comics%29.png'
            }
          ]);
        }
      })
      .catch(err => {
        console.error('Error fetching team:', err);
        // Fallback to riddler placeholder if error
        setTeamMembers([
          {
            id: 'placeholder',
            name: 'The Riddler',
            role: 'Master of Puzzles',
            profile_url: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Riddler_%28DC_Comics%29.png'
          }
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="app fade-in-on-load">
      <Navbar />
      
      <main className="team-page">
        <section className="team-header">
          <div className="container">
            <h3 className="section-subtitle">THE PEOPLE BEHIND</h3>
            <h1 className="team-title">Our Team</h1>
            <p className="team-description">
              Meet the dedicated professionals and student leaders driving cross-border finance advisory.
            </p>
          </div>
        </section>

        <section className="team-grid-section">
          <div className="container">
            {loading ? (
              <p style={{ textAlign: 'center', padding: '40px' }}>Loading team profiles...</p>
            ) : (
              <div className="team-grid">
                {teamMembers.map((member) => (
                  <a key={member.id} href={`#team/${member.id}`} className="team-card reveal-on-scroll is-visible" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                    <div className="team-avatar-placeholder" style={{ overflow: 'hidden' }}>
                      {member.profile_url ? (
                        <img src={member.profile_url} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="avatar-icon">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      )}
                    </div>
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-role">{member.role}</p>
                    {member.brief_description && (
                      <p className="team-member-desc" style={{ fontSize: '0.9rem', marginTop: '10px', color: 'var(--text-secondary)' }}>
                        {member.brief_description}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
