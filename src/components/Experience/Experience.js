import React from 'react';
import './Experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faFileAlt, faBrain, faNetworkWired, faDatabase} from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Experience</h2>

        <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faNetworkWired} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>Project Manager @ Novo Nordisk (March 2025 - May 2025)</h3>
          <ul>
            <li>Analyzed patient sentiment and behavior using LDA & sentiment analysis on large-scale scraped data.</li>
            <li>Built a scalable web scraping pipeline using AWS Lambda to extract data from online platforms. </li>
          </ul>
        </div>
      </div>


        <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faDatabase} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>Machine Learning Intern @ Applied Materials (September 2024 - May 2025)</h3>
          <ul>
            <li>Analyzed patient sentiment and behavior using LDA & sentiment analysis on large-scale scraped data.</li>
            <li>Built a scalable web scraping pipeline using AWS Lambda to extract data from online platforms. </li>
          </ul>
        </div>
      </div>



      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faLaptopCode} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>Software Engineer Intern @ Nidus Technologies (August 2024 - December 2024)</h3>
          <ul>
            <li>Developed a full-stack web application featuring an AI chatbot, booking system, client database, search functionality, and user authentication</li>
            <li>Technologies: React, Google Firebase, LLM integration, MongoDB, AWS, SQL</li>
          </ul>
        </div>
      </div>

    

      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faBrain} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>Natural Language Processing Researcher (Jan 2025 - May 2025)</h3>
          <ul>
            <li>Conducting NLP analysis on 1,500 legal cases related to Section 230 to extract claims, judicial opinions, and patterns</li>
            <li>Technologies: pandas, spaCy, DocETL</li>
            <li>Building pipelines to generate insights on platform liability, free speech, and internet regulation</li>
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
            <li>Enhanced a machine learning platform for classifying corporate exchanges by objectivity</li>
            <li>Collaborated with Wharton and CMU professors Shimon Kogan and Vitaly Meursault</li>
            <li>Utilized sentiment analysis, data mining, convolutional neural networks, and statistical analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
