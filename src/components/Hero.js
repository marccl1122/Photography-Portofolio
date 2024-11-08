import React from 'react';
import heroimage from '../images/BA4EEEDB-37F2-4E39-AED8-486CC71B39EA.JPG'

function Hero() {
  return (
    <header id="hero">
      <div className="hero-content">
        <h1>Marc</h1>
        <p>Contemporary Artist</p>
      </div>
      <div>
        <img src = {heroimage} alt="hero" width="200" heigth="200" style={{ borderRadius: '15px' }} />
      </div>
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
      </a>
    </header>
  );
}

export default Hero;
