import React from 'react';
import './Experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faFileAlt, faBrain, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Work Experience</h2>

      {/* HockeyStack */}
      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faNetworkWired} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>HockeyStack</h3>
          <div className="subheader">San Francisco, CA, On-Site</div>
          <div className="role-dates">
            <strong>Data Analyst Intern</strong> — July 2025 - Present
          </div>
          <ul>
            <li>
              Tracing Odin’s multi-agent call graph in TypeScript/Node.js, debugging faulty ClickHouse SQL joins and aggregations, and patching code to fix chatbot responses → improved query accuracy by 20%.
            </li>
            <li>
              Hardening the orchestrator by refining agent routing, adding schema validation for MongoDB-stored outputs, and tightening prompt templates → cut malformed/off-topic responses by 25%.
            </li>
            <li>
              Instrumenting structured logs and regression tests in Python, monitoring API calls to OpenAI/LLMs, and capturing traces to reproduce failures → reduced poor Odin responses by 15% and lowered debugging time by 30%.
            </li>
          </ul>
        </div>
      </div>

      {/* Data C8 UCS1 */}
      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faBrain} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>UC Berkeley College of Computing, Data Science, & Society</h3>
          <div className="subheader">Berkeley, CA</div>
          <div className="role-dates">
            <strong>Data C8 - Undergraduate Course Staff (UCS1)</strong> — August 2025 - Present
          </div>
          <ul>
            <li>
              Serving as 1 of 41 tutors for Data C8, UC Berkeley’s largest data science course with 1,500 students enrolled annually.
            </li>
            <li>
              Teaching core Python, probability, and statistics by leading sections, answering questions, & providing applied examples.
            </li>
          </ul>
        </div>
      </div>

      {/* UC Berkeley School of Information */}
      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faFileAlt} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>UC Berkeley School of Information</h3>
          <div className="subheader">Berkeley, CA</div>
          <div className="role-dates">
            <strong>NLP Researcher</strong> — Jan 2025 - May 2025
          </div>
          <ul>
            <li>
              Analyzed 1,500+ Section 230 cases with Pandas and spaCy for entity recognition, sentiment, and claim extraction.
            </li>
            <li>
              Built NLP pipelines to structure legal text into datasets for analyzing judicial patterns and outcomes.
            </li>
          </ul>
        </div>
      </div>

      {/* Novo Nordisk */}
      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faLaptopCode} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>Novo Nordisk</h3>
          <div className="subheader">Plainsboro, New Jersey</div>
          <div className="role-dates">
            <strong>Software Engineer (Contract)</strong> — Jan 2025 - May 2025
          </div>
          <ul>
            <li>
              Scraped 10+ health platforms with a scalable AWS Lambda pipeline, improving patient data collection efficiency by 70%.
            </li>
            <li>
              Analyzed 12,000+ patient posts with LDA and sentiment analysis to build datasets and uncover behavioral trends.
            </li>
          </ul>
        </div>
      </div>

      {/* Nidus Technologies */}
      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faLaptopCode} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>Nidus Technologies</h3>
          <div className="subheader">Berkeley, CA</div>
          <div className="role-dates">
            <strong>Software Engineer (Contract)</strong> — August 2024 - December 2024
          </div>
          <ul>
            <li>
              Built a full-stack web app with React, Firebase, AWS, and SQL, integrating booking, search, auth, and an AI chatbot.
            </li>
            <li>
              Designed modular backend services, schemas, and auth flows to support scalable data management and real-time search.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Experience;
