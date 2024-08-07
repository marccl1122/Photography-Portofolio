import React from 'react';

function Hero() {
  return (
    <header id="hero">
      <div className="hero-content">
        <h1>Photography Portfolio</h1>
        <p>Welcome to my photography portfolio. Explore my work and connect with me.</p>
      </div>
      <img src="/hero.jpg" alt="Hero Image" className="hero-image" />
    </header>
  );
}

export default Hero;