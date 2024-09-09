import React from 'react';
import Project from './Project';

// List of projects to be displayed on the portfolio
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
  },
  {
    title: 'Project 3',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 4',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 5',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 6',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 7',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 8',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 9',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 10',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 11',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 12',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 13',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 14',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 15',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 16',
    image: '/project2.jpg',
    description: 'A creative exploration of photography.'
  }
];

function ProjectList() {
  return (
    <section id="projects">
      <h2>My Work</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
