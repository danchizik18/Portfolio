import React from 'react';
import './Experience.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faFileAlt, faBrain, faNetworkWired, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Work Experience</h2>

      {/* Amazon Web Services */}
      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faAws} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>Amazon Web Services</h3>
          <div className="subheader">Berkeley, CA</div>
          <div className="role-dates">
            <strong>Machine Learning Engineer (Contract)</strong> — September 2025 - Present
          </div>
          <ul>
            <li>
              Leading a semester-long applied research partnership with Annapurna Labs, building an automated pipeline that scrapes, filters, and classifies ML research papers using AWS Lambda, Selenium, S3, SQS, ECS, and Bedrock LLMs.
            </li>
            <li>
              Indexing extracted insights in Amazon OpenSearch and generating PyTorch implementations with Claude-based code generation agents, executed and validated on AWS Trainium via the Neuron SDK and XLA.
            </li>
            <li>
              Benchmarking Trainium execution with SageMaker and inspecting hardware performance via the Neuron Profiler.
            </li>
          </ul>
        </div>
      </div>

      {/* HockeyStack */}
      <div className="experience-item">
        <div className="icon-container">
          <FontAwesomeIcon icon={faNetworkWired} size="2x" color="#ffd700" />
        </div>
        <div className="text-container">
          <h3>HockeyStack - AI SAAS, YC & BVP-Backed</h3>
          <div className="subheader">San Francisco, CA, On-Site</div>
          <div className="role-dates">
            <strong>Data Analyst Intern</strong> — July 2025 - Present
          </div>
          <ul>
            <li>
              Identifying and tracing issues in Odin, our AI agent that powers the end-to-end marketing analytics platform, by inspecting Datadog logs, then resolving issues in our multi-agent pipeline with TypeScript, React, & Node.js.
            </li>
            <li>
              Strengthening backend orchestration with Redis caching, MongoDB schema validation, cleaner agent routing logic, and faster ClickHouse query performance.
            </li>
            <li>
              Building distributed evaluation workflows using the Braintrust SDK to log, score, and monitor agent performance.
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
              Tutoring UC Berkeley's largest Data Science course (1,500+ students), teaching core Python, probability, and statistics.
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
              Developed NLP pipelines with Pandas/spaCy to analyze 1,500+ Section 230 cases for sentiment and judicial patterns.
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
          <div className="subheader">Berkeley, CA</div>
          <div className="role-dates">
            <strong>Software Engineer (Contract)</strong> — Jan 2025 - May 2025
          </div>
          <ul>
            <li>
              Engineered a scalable Apache Airflow pipeline to scrape health platforms & analyze 12k posts to uncover patient trends.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Experience;
