// src/AuthForm/Aptitude.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Aptitude.css';

const Aptitude = () => {
  return (
    <div className="aptitude-page">
      <h2>APTITUDE</h2>
      <div className="button-container">
        <Link to="/placement-preparation/aptitude/quant">
          <button className="aptitude-button">Quantitative Aptitude</button>
        </Link>
        <Link to="/placement-preparation/aptitude/logical">
          <button className="aptitude-button">Logical Reasoning</button>
        </Link>
        <Link to="/placement-preparation/aptitude/verbal">
          <button className="aptitude-button">Verbal Reasoning</button>
        </Link>
      </div>
    </div>
  );
};

export default Aptitude;
