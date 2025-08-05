import React from 'react';
import '../CSS/animation.css'; // Import the CSS for styling

const Loader = ({ message = 'Loading...' }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-circle loader-circle-1"></div>
        <div className="loader-circle loader-circle-2"></div>
        <div className="loader-circle loader-circle-3"></div>
      </div>
    </div>
  );
};

export default Loader;