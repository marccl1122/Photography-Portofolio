import React from 'react';
import img1 from '../images/IMG_5343.jpg'

function Hero() {
  return (
    // Hero section with main header, short description, image, and Camera-style Hire Me button
    <header id="hero">
      <div className="hero-content">
        <h1>Marc</h1>
        <p>Artist and Photographer, welcome to my portfolio.</p>
      </div>
      <div>
        <img src = {img1} alt="hero" width="600" heigth="400"/>
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
