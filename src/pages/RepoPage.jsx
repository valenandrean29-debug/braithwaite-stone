import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './RepoPage.css';

const RepoPage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ensure we scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch repositories from Supabase through Flask backend
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/repository')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setRepos(data.data || []);
        }
      })
      .catch((err) => console.error('Failed to fetch repositories:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app fade-in-on-load">
      <Navbar />

      <main className="repo-page">
        {loading ? (
          <div className="repo-loading">
            <div className="spinner"></div>
            <p>Loading Knowledge Repository...</p>
          </div>
        ) : repos.length === 0 ? (
          /* Show Coming Soon if no rows exist */
          <section className="repo-content reveal-on-scroll is-visible">
            <div className="container">
              <div className="repo-coming-soon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="repo-icon">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>

                <h3 className="section-subtitle">KNOWLEDGE REPOSITORY</h3>
                <h1 className="repo-title">Coming Soon.</h1>

                <div className="repo-divider"></div>

                <p className="repo-description">
                  We are carefully curating world-class finance courses, market insights, and strategic business materials.
                  Our educational repository will be available shortly to equip the next generation of finance professionals.
                </p>

                <button className="repo-btn">
                  Get Notified
                </button>
              </div>
            </div>
          </section>
        ) : (
          /* Show elegant grid of resources if rows exist */
          <section className="repo-grid-section">
            <div className="container">
              <div className="repo-grid-header">
                <h3 className="section-subtitle">KNOWLEDGE REPOSITORY</h3>
                <h1 className="repo-grid-title">Educational Resources</h1>
                <p className="repo-grid-desc">
                  Explore custom lectures, analytical reports, and expert presentations crafted by the Braithwaite & Stone network.
                </p>
              </div>

              <div className="repo-grid">
                {repos.map((item) => {
                  const getYouTubeId = (url) => {
                    if (!url) return null;
                    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                    const match = url.match(regExp);
                    return (match && match[2].length === 11) ? match[2] : null;
                  };
                  
                  const videoId = getYouTubeId(item.youtube_url);
                  const thumbnailUrl = videoId 
                    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` 
                    : null;

                  return (
                    <div className="repo-card" key={item.id}>
                      <div className="repo-card-image-wrapper">
                        {thumbnailUrl ? (
                          <img src={thumbnailUrl} alt={item.title} className="repo-card-image" />
                        ) : (
                          <div className="repo-card-image-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                              <rect width="20" height="15" x="2" y="3" rx="2" />
                              <polygon points="10 11 15 14 10 17 10 11" />
                            </svg>
                          </div>
                        )}
                        <div className="repo-card-badge">Course</div>
                      </div>
                      <div className="repo-card-body">
                        <h4 className="repo-card-title">{item.title}</h4>
                        {item.youtube_url && (
                          <a href={`#repository/${item.id}`} className="repo-card-link">
                            Watch Lecture
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default RepoPage;
