// src/AuthForm/PlacementPreparation.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlacementPreparation.css';  // Import the CSS for styling

const PlacementPreparation = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the provided path
  };

  return (
    <div className="placement-preparation">
      <h2>Select your placement preparation topic:</h2>
      <div className="button-container">
        <button className="prep-button" onClick={() => handleNavigation('/placement-preparation/language')}>
          PROGRAMMING LANGUAGE
        </button>
        <button className="prep-button" onClick={() => handleNavigation('/placement-preparation/dsa')}>
          DSA
        </button>
        <button className="prep-button" onClick={() => handleNavigation('/placement-preparation/aptitude')}>
          Aptitude
        </button>
        <button className="prep-button" onClick={() => handleNavigation('/placement-preparation/dbms')}>
          DBMS
        </button>
        <button className="prep-button" onClick={() => handleNavigation('/placement-preparation/oops')}>
          OOPS
        </button>
      </div>
    </div>
  );
};

export default PlacementPreparation;

