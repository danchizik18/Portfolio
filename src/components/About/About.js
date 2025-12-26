import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava, 
  faPython, 
  faJsSquare, 
  faReact, 
  faGitAlt, 
  faNode,
  faDocker,
  faAws,
  faLinux
} from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import ProfileImage from '../../assets/images/canoeing.jpg';
import './About.scss';
import { faDatabase, faServer, faCloud, faCode } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const timeoutRef = useRef(null);  

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
            <p>
              I'm passionate about data science, machine learning, and AI, and how we can use these areas to to truly make an impact in our great country.
            </p>
            <p align="LEFT">
                I absoltuely LOVE working in teams. I've found that simply talking to new people with diverse ideas has been far and away the most effective way for me to learn new skills.
            </p>
            <p>
                Above all, I'm passionate about the journey of exploration. I've messed up more times than I can count, but by constantly diving into the deep end with new challenges, I truly believe I become the best version of myself.
            </p>

        </div>

        <div className="profile">
          <img src={ProfileImage} alt="Profile" className="profile-img" />
        </div>

        <div className="skills-section">
          <h2>Skills</h2>

          {/* Programming & Systems */}
          <div className="skills-category">
            <h3>Programming & Systems</h3>
            <ul>
              <li><FontAwesomeIcon icon={faPython} /> Python</li>
              <li><FontAwesomeIcon icon={faCode} /> C++</li>
              <li><FontAwesomeIcon icon={faJsSquare} /> TypeScript</li>
              <li><FontAwesomeIcon icon={faReact} /> React</li>
              <li><FontAwesomeIcon icon={faJava} /> Java</li>
              <li><FontAwesomeIcon icon={faNode} /> Node.js</li>
              <li><FontAwesomeIcon icon={faDatabase} /> SQL</li>
              <li><FontAwesomeIcon icon={faGitAlt} /> Git</li>
              <li><FontAwesomeIcon icon={faLinux} /> Linux</li>
              <li><FontAwesomeIcon icon={faDocker} /> Docker</li>
            </ul>
          </div>

          {/* Data & ML */}
          <div className="skills-category">
            <h3>Data & ML</h3>
            <ul>
              <li><FontAwesomeIcon icon={faServer} /> REST APIs</li>
              <li><FontAwesomeIcon icon={faDatabase} /> Spark</li>
              <li><FontAwesomeIcon icon={faServer} /> Kafka</li>
              <li><FontAwesomeIcon icon={faPython} /> Pandas</li>
              <li><FontAwesomeIcon icon={faGitAlt} /> scikit-learn</li>
              <li><FontAwesomeIcon icon={faPython} /> PyTorch</li>
              <li><FontAwesomeIcon icon={faServer} /> Airflow</li>
              <li><FontAwesomeIcon icon={faServer} /> Braintrust</li>
            </ul>
          </div>

          {/* Cloud & Infra */}
          <div className="skills-category">
            <h3>Cloud & Infra</h3>
            <ul>
              <li><FontAwesomeIcon icon={faAws} /> AWS (S3, EC2, ECS, Lambda, SQS, OpenSearch)</li>
              <li><FontAwesomeIcon icon={faServer} /> Neuron SDK</li>
              <li><FontAwesomeIcon icon={faDatabase} /> MongoDB</li>
              <li><FontAwesomeIcon icon={faDatabase} /> ClickHouse</li>
            </ul>
          </div>
        </div>

        <div className="interests-section">
          <h2>Interests</h2>
          <ul>
              <li>📜 Public Policy</li>
              <li>📈 Economics</li>
              <li>🏀 Sports</li>
              <li>♟ Chess</li>
              <li>📖 History</li>
              <li>🏆 Poker</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;