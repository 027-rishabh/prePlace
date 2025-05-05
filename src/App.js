// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components/pages
import AuthForm from './AuthForm/AuthForm'; 
import InterestSelection from './InterestSelection';
import PlacementPreparation from './AuthForm/PlacementPreparation';
import DSA from './AuthForm/DSATopics'; // <-- Add this import
import Aptitude from './AuthForm/Aptitude';
import DBMS from './AuthForm/DBMS';
import OOPS from './AuthForm/OOPS';
import Language from './AuthForm/Language';  // <-- Add this import
import Quantitative from './AuthForm/Quantitative';
import Logical from './AuthForm/Logical';
import Verbal from './AuthForm/Verbal';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/interest-selection" element={<InterestSelection />} />
        <Route path="/placement-preparation" element={<PlacementPreparation />} />
        <Route path="/placement-preparation/dsa" element={<DSA />} /> {/* DSA route */}
        <Route path="/placement-preparation/aptitude" element={<Aptitude />} />
        <Route path="/placement-preparation/dbms" element={<DBMS />} />
        <Route path="/placement-preparation/oops" element={<OOPS />} />
        <Route path="/placement-preparation/language" element={<Language />} /> {/* Programming Language route */}
        <Route path="/placement-preparation/aptitude/quant" element={<Quantitative />} />
        <Route path="/placement-preparation/aptitude/logical" element={<Logical />} />
        <Route path="/placement-preparation/aptitude/verbal" element={<Verbal />} />

      </Routes>
    </Router>
  );
};

export default App;
