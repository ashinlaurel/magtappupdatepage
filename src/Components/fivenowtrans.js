import React from "react";
import fivetrans from "../assets/fivetrans.png";
const Fivenow = () => {
  return (
    <div className="mx-2">
      <div
        className={`bg-contain bg-no-repeat  bg-center w-full h-full mt-5  `}
        style={{ backgroundImage: `url(${fivetrans})` }}
      >
        <div className="h-64 w-full"></div>
        <div className="h-10 w-full"></div>
      </div>
    </div>
  );
};

export default Fivenow;
