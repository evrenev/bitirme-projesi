// src/components/Navbar.js

import React from "react";
import "w3-css/w3.css";

const Navbar = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-white w3-wide w3-padding w3-card">
        
        <a href="#cafes" className="w3-bar-item w3-button">
          Cafes
        </a>
        <a href="#social-facilities" className="w3-bar-item w3-button">
          Social Facilities
        </a>
        <a href="#historical-places" className="w3-bar-item w3-button">
          Historical Places
        </a>
      </div>
    </div>
  );
};

export default Navbar;