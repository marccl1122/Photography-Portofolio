import React from 'react';

function Hero() {
  return (
    // Hero section with main header, short description, image, and Camera-style Hire Me button
    <header id="hero">
      <div className="hero-content">
        <h1>Marc</h1>
        <p>Artist and Photographer, welcome to my portfolio.</p>
      </div>
      <img src="/hero.jpg" alt="Hero" className="hero-image" />
      
      {/* Camera Style Hire Me Button */}
      <a
        href="https://wa.me/12363088311?text=Hi, I'm interested in your photography services!"
        className="hire-me-button camera-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Camera Icon Representation */}
        <span className="camera-body">
          <span className="camera-lens"></span>
        </span>
        Hire Me
      </a>
    </header>
  );
}

export default Hero;
