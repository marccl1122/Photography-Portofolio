import React from 'react';
import Project from './Project';
// List of projects to be displ7ayed on the portfolio
const projects = [
  {
    title: 'Project 1',
    image: '..x/public/images/img1.JPG', // Update the path to your image
    description: 'A captivating project with stunning visuals.'
  },
  {
    title: 'Project 2',
    image: '/Users/marcl/Desktop/Photography-Portofolio-Remastered/Photography-Portofolio/public/images/8CEEFA14-A855-41AF-BE6D-2F14300A488B.JPG', // Update the path to your image
    description: 'A creative exploration of photography.'
  },
  {
    title: 'Project 3',
    image: '/images/project3.jpg', // Update the path to your image
    description: 'An innovative approach to landscape photography.'
  },
  {
    title: 'Project 4',
    image: '/images/project4.jpg', // Update the path to your image3
    description: 'A deep dive into portrait photography.'
  },
  {
    title: 'Project 5',
    image: '/images/project5.jpg', // Update the path to your image
    description: 'Exploring the beauty of nature through my lens.'
  },
  {
    title: 'Project 6',
    image: '/images/project6.jpg', // Update the path to your image
    description: 'Capturing the essence of urban life.'
  },
  {
    title: 'Project 7',
    image: '/images/project7.jpg', // Update the path to your image
    description: 'A journey through the world of macro photography.'
  },
  {
    title: 'Project 8',
    image: '/images/project8.jpg', // Update the path to your image
    description: 'Documenting culture and traditions through my lens.'
  },
  {
    title: 'Project 9',
    image: '/images/project9.jpg', // Update the path to your image
    description: 'A vibrant collection of street photography.'
  },
  {
    title: 'Project 10',
    image: '/images/project10.jpg', // Update the path to your image
    description: 'Exploring the art of night photography.'
  },
  {
    title: 'Project 11',
    image: '/images/project11.jpg', // Update the path to your image
    description: 'Capturing the beauty of wildlife.'
  },
  {
    title: 'Project 12',
    image: '/images/project12.jpg', // Update the path to your image
    description: 'A creative take on fashion photography.'
  },
  {
    title: 'Project 13',
    image: '/images/project13.jpg', // Update the path to your image
    description: 'Exploring the world of architectural photography.'
  },
  {
    title: 'Project 14',
    image: '/images/project14.jpg', // Update the path to your image
    description: 'A collection of stunning aerial shots.'
  },
  {
    title: 'Project 15',
    image: '/images/project15.jpg', // Update the path to your image
    description: 'Capturing moments of joy and celebration.'
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