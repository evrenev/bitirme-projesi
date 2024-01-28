// src/components/HistoricalPlaces.js

import React from "react";
import "w3-css/w3.css";

const HistoricalPlaces = () => {
  return (
    <div>
      <h1>Historical Places</h1>
      <div className="w3-row-padding">
        <div className="w3-third">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Place 1"
            className="w3"
            />
        </div>
        {/* Diğer yerlerin bilgileri buraya eklenir */}
      </div>
    </div>
  );
};

export default HistoricalPlaces; 

