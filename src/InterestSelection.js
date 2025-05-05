// src/InterestSelection.js

import React from 'react';
import { Link } from 'react-router-dom';
import './InterestSelection.css';  // Ensure this path is correct

const InterestSelection = () => {
  return (
    <div className="interest-selection">
      <h2>Welcome! Please select your area of interest:</h2>
      <div className="button-container">
        <button className="interest-button">
          <Link to="/placement-preparation">Placement Preparation</Link>
        </button>
        <button className="interest-button">
          <Link to="/explore-career-paths">Explore Career Paths</Link>
        </button>
        <button className="interest-button">
          <Link to="/skill-based-preparation">Skill-Based Preparation</Link>
        </button>
        <button className="interest-button">
          <Link to="/company-specific-preparation">Company-Specific Preparation</Link>
        </button>
      </div>
    </div>
  );
};

export default InterestSelection;
