import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import './Projects.scss';

import sfusdImage from '../../assets/images/projects/sfusd.png';
import pokerImage from '../../assets/images/projects/poker.png';
import nbaImage from '../../assets/images/projects/nba.png';
import lukaImage from '../../assets/images/projects/luka.png';
import sleepyImage from '../../assets/images/projects/tired.png';
import WashingtonImage from '../../assets/images/projects/washington.png';

import datathon from '../../assets/images/projects/datathon.jpeg';
import play from '../../assets/images/projects/play.png';
import predictions from '../../assets/images/projects/predictions.png';
import kde from '../../assets/images/projects/kde.png';
import eyes from '../../assets/images/projects/eyes.jpeg';
import moreData from '../../assets/images/projects/moreData.png';
import headshot from '../../assets/images/headshot_arms_crossed-removebg-preview.png';
import casual from '../../assets/images/causal.jpg';
import marchMadness from '../../assets/images/march_madness.png';
import laettner from '../../assets/images/projects/laettner.jpg'

const projects = [
  {
    title: 'SFUSD Student Assignment Process Redesign',
    description: 'Won 1st place at Cal\'s 6th Annual Datathon 2024! Used Geopandas and Linear Optimization to redesign SFUSD\'s student assignment process.',
    image: sfusdImage, 
    projectImage: datathon, 
    link: 'https://github.com/danchizik18/Datathon-2024',
  },
  {
    title: 'March Madness Bracket Predictor',
    description: 'Built a 2025 March Madness Bracket Predictor using XGBoost. Came within 0.026 of 1st place out of >1500 teams!',
    image: laettner, 
    projectImage: marchMadness, 
    link: 'https://github.com/danchizik18/March-Madness-Predictor',
  },
    {
    title: 'This Portfolio!',
    description: 'Built this portfolio entirely from scratch using React.',
    image: headshot, 
    projectImage: casual, 
    link: 'https://github.com/danchizik18/Portfolio',
  },
  {
    title: 'Poker Simulator',
    description: 'Created a poker simulator using Java and Monte Carlo simulations.',
    image: pokerImage, 
    projectImage: play, 
    link: 'https://github.com/danchizik18/Poker-Simulator',
  },
   {
    title: 'Which President Said That?',
    description: 'Used regex, TfidfVectorizer, and Tensorflow to predict which president authored a given document.',
    image: WashingtonImage, 
    projectImage: moreData, 
    link: 'https://github.com/danchizik18/Presidential-Chatbot/tree/main',
  },
  {
    title: 'Luka-AD Trade Analysis',
    description: 'Analyzed the Anthony Davis-Luka Dončić trade using KMeans clustering.',
    image: lukaImage, 
    projectImage: kde, 
    link: 'https://github.com/danchizik18/Luka-AD-Trade-Analysis',
  },
  {
    title: 'Sleepy Driver Detector',
    description: 'Detects drowsy drivers using CV2 and dlib for eye movement tracking.',
    image: sleepyImage, 
    projectImage: eyes, 
    link: 'https://github.com/danchizik18/Sleepy-Driver-Detection',
  },

];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="card-inner">
            {/* Front of the card */}
            <div className="card-front">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub size={30} />
              </a>
            </div>

            {/* Back of the card */}
            <div className="card-back">
              <img src={project.projectImage} alt={`${project.title} project`} />
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
