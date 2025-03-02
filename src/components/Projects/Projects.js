import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import './Projects.scss';

import sfusdImage from '../../assets/images/projects/sfusd.png';
import pokerImage from '../../assets/images/projects/poker.png';
import nbaImage from '../../assets/images/projects/nba.png';
import newsImage from '../../assets/images/projects/news.png';
import lukaImage from '../../assets/images/projects/luka.png';
import sleepyImage from '../../assets/images/projects/tired.png';
import WashingtonImage from '../../assets/images/projects/washington.png';

import datathon from '../../assets/images/projects/datathon.jpeg';
import play from '../../assets/images/projects/play.png';
import predictions from '../../assets/images/projects/predictions.png';
import kmeans from '../../assets/images/projects/kmeans.png';
import kde from '../../assets/images/projects/kde.png';
import eyes from '../../assets/images/projects/eyes.jpeg';
import loss from '../../assets/images/projects/loss.png';

const projects = [
  {
    title: 'SFUSD Student Assignment Process Redesign',
    description: 'Won 1st place at Cal\'s 6th Annual Datathon 2024! Used Geopandas and Linear Optimization to redesign SFUSD\'s student assignment process for racial diversity and comparable income distributions',
    image: sfusdImage, 
    projectImage: datathon, 
    link: 'https://github.com/danchizik18/Datathon-2024',
  },
  {
    title: 'Which president said that?',
    description: 'Web scraped and cleaned presidential documents using regex and TfidfVectorizer. Trained models like Logistic Regression and MultinomialNB with Scikit-learn and Transformers to predict the author of each document. ',
    image: WashingtonImage, 
    projectImage: loss, 
    link: 'https://github.com/danchizik18/Presidential-Chatbot/tree/main',
  },
  {
    title: 'Poker Simulator',
    description: 'Created a poker simulator based on user-inputted scenarios using Java and Monte Carlo simulations.',
    image: pokerImage, 
    projectImage: play, 
    link: 'https://github.com/danchizik18/Poker-Simulator',
  },
  {
    title: 'NBA Playoff Predictor',
    description: 'Predicted the 2025 NBA playoffs using pandas, a Random Forest algorithm, and sentiment analysis by web scraping online opinion.',
    image: nbaImage, 
    projectImage: predictions, 
    link: 'https://github.com/danchizik18/NBA-playoff-predictor',
  },
  {
    title: 'News Bias Detector',
    description: 'Used spaCy, Scikit-learn, and Matplotlib to detect bias in news articles.',
    image: newsImage, 
    projectImage: kmeans, 
    link: 'https://github.com/danchizik18/News-Bias-Detector',
  },
  {
    title: 'Luka-AD Trade Analysis',
    description: 'Applied KMeans clustering to analyze the Anthony Davis-Luka Dončić trade by comparing it to similar NBA trades in the past.',
    image: lukaImage, 
    projectImage: kde, 
    link: 'https://github.com/danchizik18/Luka-AD-Trade-Analysis',
  },
  {
    title: 'Sleepy Driver Detector',
    description: "Tracking eye movement and yawning using CV2 and dlib to detect drowsy drivers. Currently enhancing the system to trigger an alert sound upon detection and exploring deployment across car brands.",
    image: sleepyImage, 
    projectImage: eyes, 
    link: 'https://github.com/danchizik18/Sleepy-Driver-Detection',
  }
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
