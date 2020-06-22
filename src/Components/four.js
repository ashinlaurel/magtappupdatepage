import React from "react";
import four from "../assets/fournow.png";
const Four = () => {
  return (
    <div className="">
      <div
        className={`bg-contain bg-no-repeat bg-center w-full h-full mt-5  `}
        style={{ backgroundImage: `url(${four})` }}
      >
        <div className="h-64 w-full"></div>
        <div className="h-20 w-full"></div>
      </div>
    </div>
  );
};

export default Four;
