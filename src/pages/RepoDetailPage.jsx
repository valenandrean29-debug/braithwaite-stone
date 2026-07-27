import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './RepoDetailPage.css';

const RepoDetailPage = ({ repoId }) => {
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:5000/api/repository/${repoId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setRepo(data.data);
        } else {
          setError(data.message || 'Failed to load repository item');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch repository item:', err);
        setError('Could not connect to the server');
      })
      .finally(() => setLoading(false));
  }, [repoId]);

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="app fade-in-on-load">
      <Navbar />

      <main className="repo-detail-page">
        <div className="container">
          <section className="repo-detail-header">
            <a href="#repository" className="repo-detail-back-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Repository
            </a>
          </section>

          {loading ? (
            <div className="repo-loading" style={{ textAlign: 'center', padding: '100px 0' }}>
              <div className="spinner"></div>
              <p style={{ marginTop: '20px', color: 'var(--color-navy)', opacity: 0.7 }}>Loading resource...</p>
            </div>
          ) : error || !repo ? (
            <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--color-navy)' }}>
              <h2>{error || 'Resource not found'}</h2>
              <a href="#repository" style={{ color: 'var(--color-navy)', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>Return to Repository</a>
            </div>
          ) : (
            <section className="repo-detail-content reveal-on-scroll is-visible">
              <div className="repo-detail-grid">
                <div className="repo-detail-left">
                  <div className="repo-video-container">
                    {getYouTubeId(repo.youtube_url) ? (
                      <iframe
                        className="repo-video-iframe"
                        src={`https://www.youtube.com/embed/${getYouTubeId(repo.youtube_url)}?rel=0`}
                        title={repo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                        Invalid Video URL
                      </div>
                    )}
                  </div>
                  <h1 className="repo-detail-title">{repo.title}</h1>
                </div>
                
                <div className="repo-detail-right">
                  <h3 className="repo-detail-right-title">About this Lecture</h3>
                  <div className="repo-detail-description">
                    {repo.description || "No description provided for this resource."}
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RepoDetailPage;
