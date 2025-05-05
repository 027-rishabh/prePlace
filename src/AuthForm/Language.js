// src/AuthForm/Language.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Language.css';  // Import the CSS for styling

const Language = () => {
  return (
    <div className="language-page">
      <h2>Learn at least one Programming Language</h2>
      <div className="button-container">
        <button className="language-button">
          <Link to="/placement-preparation/language/c">C</Link>
        </button>
        <button className="language-button">
          <Link to="/placement-preparation/language/cpp">C++</Link>
        </button>
        <button className="language-button">
          <Link to="/placement-preparation/language/java">Java</Link>
        </button>
        <button className="language-button">
          <Link to="/placement-preparation/language/python">Python</Link>
        </button>
      </div>
    </div>
  );
};

export default Language;
