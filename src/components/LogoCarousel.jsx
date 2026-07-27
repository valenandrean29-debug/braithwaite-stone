import React from 'react';
import './LogoCarousel.css';

const LogoCarousel = () => {
  const baseLogos = [
    { type: 'image', src: "/images/hit logo.jpg", alt: "Harbin Institute of Technology" },
    { type: 'image', src: "/images/Logo_Universitas_Tarumanagara.png", alt: "Universitas Tarumanagara" },
    { type: 'image', src: "/images/Logo_Universitas_Prasetiya_Mulya.png", alt: "Prasetya Mulya University" },
    { type: 'image', src: "/images/ubm-logo.png", alt: "Universitas Bunda Mulia" }
  ];

  // Repeating the logos to create the infinite scroll effect
  const logos = [...baseLogos, ...baseLogos, ...baseLogos];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {logos.map((logo, index) => (
          <div key={index} className="carousel-logo">
            {logo.type === 'image' ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  style={{ maxHeight: '60px', maxWidth: '200px', objectFit: 'contain' }} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span style={{ display: 'none', fontSize: '1.25rem' }}>{logo.alt}</span>
              </div>
            ) : (
              logo.content
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
