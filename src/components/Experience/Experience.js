import React from 'react';
import './Experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faFileAlt, faBrain, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Experience</h2>

      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faBrain} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>ML/AI Intern @ SkillsVest (June 2025 – Present)</h3>
          <ul>
            <li>Building an AI-driven Bayesian Belief Network model to predict student loan default risk.</li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faNetworkWired} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>Technical Project Manager @ Novo Nordisk (Mar – May 2025)</h3>
          <ul>
            <li>Analyzed 12,000+ patient posts using LDA & sentiment analysis to uncover behavioral trends.</li>
            <li>Built a scalable scraping pipeline across 10+ platforms, improving data efficiency by 70%.</li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faLaptopCode} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>Software Engineer Intern @ Nidus Technologies (Aug – Dec 2024)</h3>
          <ul>
            <li>Built a full-stack web app with AI chatbot, booking system, and search functionality.</li>
            <li>Used React, Firebase, AWS, and SQL to support 500+ queries and 100+ bookings.</li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faFileAlt} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>NLP Researcher @ UC Berkeley iSchool (Jan – May 2025)</h3>
          <ul>
            <li>Extracted claims, sentiment, and entities from 1,500 Section 230 cases using Pandas and spaCy.</li>
          </ul>
        </div>
      </div>

      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faFileAlt} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>Machine Learning Intern (Summer 2022)</h3>
          <ul>
            <li>Built sentiment CNN with Wharton & CMU, boosting accuracy on 180K+ filings.</li>
            <li>Project: <em>Corporate Disclosure: Facts or Opinions?</em></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
