import React from "react";
import "w3-css/w3.css";

const Cafe = ({ cafe }) => {
 return (
    <div className="w3-container w3-card w3-brown w3-round w3-margin">
      <a href={cafe.menuLink} target="_blank" rel="noopener noreferrer">
        <img src={cafe.image} alt={cafe.name} style={{ width: "70%" }} />
      </a>
      <div className="w3-container">
        <h3>{cafe.name}</h3>
        <p>{cafe.description}</p>
        <h4>Menü</h4>
        <ul>
          {cafe.menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
 );
};

export default Cafe;
