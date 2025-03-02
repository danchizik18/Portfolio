import React, { useEffect, useState } from 'react';
import './Education.scss';
import BEA from '../../assets/images/clubs/BEA.png';
import BDAB from '../../assets/images/clubs/BigData.png';
import SAGB from '../../assets/images/clubs/sagb.png';
import Oski from '../../assets/images/oski.png';

const Education = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`education-section ${fadeIn ? 'fade-in' : ''}`}>
      <div className="oski-container">
        <img src={Oski} alt="Oski" className="oski" />
      </div>
      <h2>Education at Berkeley</h2>

      <div className="education-history">
        <h3>University of California, Berkeley</h3>
        <p><strong>Triple Major:</strong> Statistics, Data Science, Economics</p>
        <p><strong>Coursework:</strong> Data Structures, Computer Programs, Multivariable Calculus, Data Science, Linear Algebra, Economics</p>
        <p><strong>Honors:</strong> A+ in Linear Algebra, Foundations of Data Science, and Economics</p>
        
      </div>

      <div className="clubs">
        <h3>Involvement</h3>
        <div className="club-list">
          <div className="club-item">
            <img src={BDAB} alt="Big Data at Berkeley" className="club-logo" />
            <p>Project Manager, Big Data at Berkeley</p>
          </div>
          <div className="club-item">
            <img src={BEA} alt="Behavioral Economics Association" className="club-logo" />
            <p>Consultant, Behavioral Economics Association</p>
          </div>
          <div className="club-item">
            <img src={SAGB} alt="Sports Analytics Group at Berkeley" className="club-logo" />
            <p>Projects Member, Sports Analytics Group at Berkeley</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
