import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Background Image */}
      <div 
        className="landing-bg"
        style={{
          backgroundImage: "url('/src/assets/images/plants-bg.jpg')"
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