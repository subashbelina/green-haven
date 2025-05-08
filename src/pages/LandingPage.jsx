import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import landingBg from '/src/assets/images/landing-bg.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Background Image */}
      <div 
        className="landing-bg"
        style={{
          backgroundImage: `url(${landingBg})`
        }}
      />
      
      {/* Content */}
      <div className="landing-content">
        <h1 className="company-name">GreenScape Plants</h1>
        <p className="company-description">
          We bring nature indoors with a curated selection of vibrant, 
          easy-care houseplants delivered straight to your door.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage; 