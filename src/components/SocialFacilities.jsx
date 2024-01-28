// src/components/SocialFacilities.jsx

import React from "react";
import SocialFacility from "./SocialFacility";
import { socialFacilities } from "../data/socialFacilities";

const SocialFacilities = () => {
  return (
    <div id="social">
      <h2 className="w3-center">Social Facilities</h2>
      <div className="w3-row-padding w3-center" style={{ margin: "0 64px" }}>
        {socialFacilities.map((facility) => (
          <SocialFacility key={facility.id} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default SocialFacilities;