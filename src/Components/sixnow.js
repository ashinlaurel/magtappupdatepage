import React from "react";
import siximg from "../assets/sixnow.png";
const Sixnow = () => {
  return (
    <div className=" ">
      <div
        className={`bg-contain bg-no-repeat  bg-center w-full h-full mt-5`}
        style={{ backgroundImage: `url(${siximg})` }}
      >
        <div className="h-64 w-full"></div>
        <div className="h-20 w-full"></div>
      </div>
    </div>
  );
};

export default Sixnow;
