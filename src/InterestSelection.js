// src/InterestSelection.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InterestSelection.css';  // Ensure this path is correct

const InterestSelection = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the provided path
  };

  return (
    <div className="interest-selection">
      <h2>Welcome! Please select your area of interest:</h2>
      <div className="button-container">
        <button className="interest-button" onClick={() => handleNavigation('/placement-preparation')}>
          Placement Preparation
        </button>
        <button className="interest-button" onClick={() => handleNavigation('/explore-career-paths')}>
          Explore Career Paths
        </button>
        <button className="interest-button" onClick={() => handleNavigation('/skill-based-preparation')}>
          Skill-Based Preparation
        </button>
        <button className="interest-button" onClick={() => handleNavigation('/company-specific-preparation')}>
          Company-Specific Preparation
        </button>
      </div>
    </div>
  );
};

export default InterestSelection;

