import React from 'react';

function Project({ title, image, description }) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Project;