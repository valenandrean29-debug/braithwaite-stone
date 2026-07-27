import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <nav className="navbar container">
        <div className="navbar-logo">
          <a href="/">Braithwaite & Stone</a>
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#proposal">Proposal</a></li>
          <li><a href="#join">Join</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#repository">Repository</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
