import React from 'react';
import './Branches.css';

const Branches = () => {
  const logos = [
    '/images/Logo_Universitas_Tarumanagara.png',
    '/images/hit logo.jpg',
    '/images/Logo_Universitas_Prasetiya_Mulya.png',
    '/images/ubm-logo.png'
  ];
  
  // Repeat the logos enough times to cover the screen width for seamless infinite scroll
  // Total 18 logos (6 sets of 3)
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="branches-section reveal-on-scroll">
      <div className="container">
        <h2 className="branches-title">Member Org. Across Branches</h2>
      </div>
      
      {/* We take the carousel out of the container so it goes full-width edge-to-edge */}
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {repeatedLogos.map((src, index) => (
            <div className="carousel-slide" key={index}>
              <img src={src} alt={`Branch Logo ${index}`} className="branch-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
