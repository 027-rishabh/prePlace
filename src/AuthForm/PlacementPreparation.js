// src/AuthForm/PlacementPreparation.js

import React from 'react';
import { Link } from 'react-router-dom';
import './PlacementPreparation.css';  // Import the CSS for styling

const PlacementPreparation = () => {
  return (
    <div className="placement-preparation">
      <h2>Select your placement preparation topic:</h2>
      <div className="button-container">
        <button className="prep-button">
          <Link to="/placement-preparation/language">PROGRAMMING LANGUAGE</Link>
        </button>
        <button className="prep-button">
          <Link to="/placement-preparation/dsa">DSA</Link> {/* Link to DSA topics page */}
        </button>
        <button className="prep-button">
          <Link to="/placement-preparation/aptitude">Aptitude</Link>
        </button>
        <button className="prep-button">
          <Link to="/placement-preparation/dbms">DBMS</Link>
        </button>
        <button className="prep-button">
          <Link to="/placement-preparation/oops">OOPS</Link>
        </button>
      </div>
    </div>
  );
};

export default PlacementPreparation;
