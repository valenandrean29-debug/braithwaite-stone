import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cta from './components/Cta';
import Branches from './components/Branches';
import Stats from './components/Stats';
import Footer from './components/Footer';
import TeamPage from './pages/TeamPage';
import TeamMemberPage from './pages/TeamMemberPage';
import RepoPage from './pages/RepoPage';
import RepoDetailPage from './pages/RepoDetailPage';
import ProposalPage from './pages/ProposalPage';
import JoinPage from './pages/JoinPage';
import './index.css';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  // Listen for hash changes to simulate routing
  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Setup scroll animations
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve to only animate once
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Trigger when 15% visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [currentHash]); // Re-run when page changes

  if (currentHash === '#team') {
    return <TeamPage />;
  }
  
  if (currentHash.startsWith('#team/')) {
    const memberId = currentHash.split('/')[1];
    return <TeamMemberPage memberId={memberId} />;
  }
  
  if (currentHash === '#repository') {
    return <RepoPage />;
  }

  if (currentHash.startsWith('#repository/')) {
    const repoId = currentHash.split('/')[1];
    return <RepoDetailPage repoId={repoId} />;
  }

  if (currentHash === '#proposal' || currentHash === '#proposals') {
    return <ProposalPage />;
  }
  
  if (currentHash === '#join') {
    return <JoinPage />;
  }

  return (
    <div className="app fade-in-on-load">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cta />
      <Branches />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
