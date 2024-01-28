import React from "react";
import Cafe from "./Cafe";
import { cafes } from "../data/cafes";

const CafeList = () => {
 return (
    <div>
      {cafes.map((cafe) => (
        <Cafe key={cafe.id} cafe={cafe} />
      ))}
    </div>
 );
};

export default CafeList;
