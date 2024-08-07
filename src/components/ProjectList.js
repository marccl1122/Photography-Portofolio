import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Project 1',
    image: '/project1.jpg',
    description: 'A captivating project with stunning visuals.'
  },
  {
    title: 'Project 2',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  }
];

function ProjectList() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;