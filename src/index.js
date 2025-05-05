import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root

root.render( // Use the render method of the root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
