import React from 'react';
import Project from './Project';
import img1 from '../images/39D3F52E-A66F-4627-BB24-24E98EEA48F6 2.JPG';
import img2 from '../images/C5C26772-80B9-4108-953F-E9240F12F608.JPG';
import img3 from '../images/IMG_2283 2.JPG';
import img4 from '../images/IMG_4082.JPG';
import img5 from '../images/IMG_4557.JPG';
import img6 from '../images/IMG_4617.JPG'
import img7 from '../images/IMG_4646.JPG';
import img8 from '../images/IMG_5343.jpg';
import img9 from '../images/IMG_5350.jpg';
import img10 from '../images/IMG_5368.jpg';
import img11 from '../images/bouldering.JPG';

const projects = [
  {
    title: 'Complejidad',
    image: img1, 
    description: 'A captivating photography with stunning visuals.',
  },
  {
    title: 'Cabezas',
    image: img2, 
    description: 'A photography of mountain exploration.',
  },
  {
    title: 'Fractura',
    image: img3, 
    description: 'An creative shot that reflects pure vulnerability.'
  },
  {
    title: 'Fósil',
    image: img4, 
    description: 'A deep dive into portrait-objective focused photography.',
  },
  {
    title: 'Resiliencia',
    image: img5, 
    description: 'Reflecting the ability to accpet the change.',
  },
  {
    title: 'Familia',
    image: img6,
    description: 'Capturing the essence of life.',
  },
  {
    title: 'Morgana',
    image: img8, 
    description: 'Capturing the vibranteness of water through my lens.',
  },
  {
    title: 'Esperanza',
    image: img9, 
    description: 'The Holy Trinity in Vision and in Order.',
  },
  {
    title: 'Suntuosidad',
    image: img10, 
    description: 'Exploring the faces of earth.',
  },
  {
    title: 'Fuerza',
    image: img11,
    description: 'Capturing the precision of rock climbing.',
  },
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