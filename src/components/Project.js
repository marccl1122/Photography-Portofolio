import React from 'react';

// Project component to render individual project details
function Project({ title, image, description }) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" /> {/* Ensure image paths are correct */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Project;
