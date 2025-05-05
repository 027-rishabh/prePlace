import React, { useState } from 'react';
import './AuthForm.css'; // Importing the CSS file
import { auth } from '../firebase'; // Adjust the path if needed
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // <-- Added for navigation

const AuthForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // <-- Added here

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLoginMode) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signup successful!");
      }

      // After successful login/signup --> Navigate to Interest Selection
      navigate("/interest-selection");

    } catch (err) {
      setError(err.message);
    }
  };

  const toggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        {/* Add the heading here */}
        <h1>Your Guide to Placements</h1>
        <p>Helping students navigate the path to successful placements. Log in to start preparing for your dream job!</p>
        
        <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="auth-btn">
            {isLoginMode ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <button className="toggle-mode-btn" onClick={toggleMode}>
          Switch to {isLoginMode ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
