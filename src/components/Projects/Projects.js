import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import './Projects.scss';

import sfusdImage from '../../assets/images/projects/sfusd.png';
import pokerImage from '../../assets/images/projects/poker.png';
import nbaImage from '../../assets/images/projects/nba.png';
import newsImage from '../../assets/images/projects/news.png';
import lukaImage from '../../assets/images/projects/luka.png';
import sleepyImage from '../../assets/images/projects/tired.png';

const projects = [
  {
    title: 'SFUSD Student Assignment Process Redesign',
    description: 'Won 1st place at Cal\'s 6th Annual Datathon 2024! Used Geopandas and Linear Optimization to redesign SFUSD\'s student assignment process for racial diversity and comparable income distributions',
    image: sfusdImage, // Use imported image
    link: 'https://github.com/danchizik18/Datathon-2024', // Replace with your GitHub link
  },
  {
    title: 'Poker Simulator',
    description: 'Created a poker simulator based on user-inputted scenarios using Java and Monte Carlo simulations.',
    image: pokerImage, 
    link: 'https://github.com/danchizik18/Poker-Simulator', 
  },
  {
    title: 'NBA Playoff Predictor',
    description: 'Predicted the 2025 NBA playoffs using pandas, a Random Forest algorithm, and sentiment analysis by web scraping online opinion.',
    image: nbaImage, 
    link: 'https://github.com/danchizik18/NBA-playoff-predictor', 
  },
  {
    title: 'News Bias Detector',
    description: 'Used spaCy, Scikit-learn, and Matplotlib to detect bias in news articles.',
    image: newsImage, 
    link: 'https://github.com/danchizik18/News-Bias-Detector', 
  },
  {
    title: 'Luka-AD Trade Analysis',
    description: 'Applied KMeans clustering to analyze the Anthony Davis-Luka Dončić trade by comparing it to similar NBA trades in the past.',
    image: lukaImage, 
    link: 'https://github.com/danchizik18/Luka-AD-Trade-Analysis',
  },
  {
    title: 'Sleepy Driver Detector',
    description: "Tracking eye movement and yawning using CV2 and dlib to detect drowsy drivers. Currently enhancing the system to trigger an alert sound upon detection and exploring deployment across car brands.",
    image: sleepyImage, 
    link: 'https://github.com/danchizik18/Sleepy-Driver-Detection', 
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub size={30} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
