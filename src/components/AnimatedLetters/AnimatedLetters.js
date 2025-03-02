import { useEffect, useState } from 'react';
import './AnimatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const [animatedLetters, setAnimatedLetters] = useState([]);

  useEffect(() => {
    setAnimatedLetters(strArray.map((char, i) => {
      return <span key={i} className={`${letterClass} _${i + idx}`}>{char}</span>;
    }));
  }, [strArray, letterClass, idx]);

  return <>{animatedLetters}</>;
}

export default AnimatedLetters;
