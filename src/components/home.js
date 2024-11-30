import React from 'react';
import '../styles/home.css';
import logo from '../assests/TiloScopeLogo.png';
import AuthForm from './authentication.js';

const HomePage = () => {
  const handleEnterGame = () => {
    alert("Welcome to TiloScope! Entering the game...");
    // Add game entry logic here
  };

  return (
    <div className="homepage-container">
      <div className="homepage-logo-section">
        <img src={logo} alt="TiloScope Logo" className="homepage-logo" />
      </div>
      <div className="homepage-button-section">
        <AuthForm/>
      </div>
    </div>
  );
};

export default HomePage;
