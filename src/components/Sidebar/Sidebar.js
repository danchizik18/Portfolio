import './Sidebar.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faLaptopCode,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active" : ""}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "active about-link" : "about-link"}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          to="/education" 
          className={({ isActive }) => isActive ? "active education-link" : "education-link"}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "active projects-link" : "projects-link"}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          to="/experience" 
          className={({ isActive }) => isActive ? "active experience-link" : "experience-link"}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? "active contact-link" : "contact-link"}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#ffd700" size="3x" className="close-icon" />
      </nav>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/dan-chizik-169a44303/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/danchizik18" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
          </a>
        </li>
      </ul>

      <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#ffd700" size="3x" className="hamburger-icon" />
    </div>
  );
};

export default Sidebar;
