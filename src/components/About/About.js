import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faJsSquare, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import ProfileImage from '../../assets/images/canoeing.jpg';
import './About.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const timeoutRef = useRef(null);  // Create a ref for the timeout

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Clean up the timeout on component unmount
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
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quite confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        <div className="profile">
          <img src={ProfileImage} alt="Profile" className="profile-img" />
        </div>

        <div className="skills-section">
          <h2>Skills</h2>

          {/* Programming Languages */}
          <div className="skills-category">
            <h3>Programming</h3>
            <ul>
              <li><FontAwesomeIcon icon={faJava} /> Java</li>
              <li><FontAwesomeIcon icon={faPython} /> Python</li>
              <li><FontAwesomeIcon icon={faJsSquare} /> JavaScript</li>
              <li><FontAwesomeIcon icon={faReact} /> React</li>
            </ul>
          </div>

          {/* Data Science */}
          <div className="skills-category">
            <h3>Data Science</h3>
            <ul>
              <li><FontAwesomeIcon icon={faGitAlt} /> Pandas</li>
              <li><FontAwesomeIcon icon={faGitAlt} /> Numpy</li>
              <li><FontAwesomeIcon icon={faGitAlt} /> SQL</li>
            </ul>
          </div>

          {/* Machine Learning */}
          <div className="skills-category">
            <h3>Machine Learning</h3>
            <ul>
              <li><FontAwesomeIcon icon={faGitAlt} /> TensorFlow</li>
              <li><FontAwesomeIcon icon={faGitAlt} /> Scikit-learn</li>
            </ul>
          </div>
        </div>

        <div className="interests-section">
          <h2>Interests</h2>
          <ul>
            <li>🏆 Poker</li>
            <li>📈 Economics</li>
            <li>📜 Public Policy</li>
            <li>⚽ Sports</li>
            <li>♟ Chess</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
