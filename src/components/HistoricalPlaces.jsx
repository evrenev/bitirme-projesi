// src/components/HistoricalPlaces.jsx

import React from "react";
import HistoricalPlace from "./HistoricalPlace";
import { historicalPlaces } from "../data/historicalPlaces";

const HistoricalPlaces = () => {
  return (
    <div id="historical">
      <h2 className="w3-center">Historical Places</h2>
      <div className="w3-row-padding w3-center" style={{ margin: "0 64px" }}>
        {historicalPlaces.map((place) => (
          <HistoricalPlace key={place.id} place={place}/>
        ))}
        </div>
    </div>
  );
        };
        export default HistoricalPlaces;

         