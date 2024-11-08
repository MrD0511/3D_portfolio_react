import React from 'react';
import './loadingPage.css';

function LoadingScreen({ onClickButton }) {
  return (
    <div className="loading-screen">
      <div className="floating-container">
        <h1 className="greeting">Hello! I am Dhruv.</h1>
        <h1 className="greeting">Welcome! to my portfolio.</h1>
        <div className="loader"></div> {/* Loader animation */}
        <p className="loading-text">Please wait, the portfolio is loading...</p>
        
        <button className="view-portfolio-btn" onClick={onClickButton}>
          View Portfolio
        </button>
      </div>
    </div>
  );
}

export default LoadingScreen;
