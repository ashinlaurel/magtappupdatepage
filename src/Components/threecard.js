import React from "react";
const ThreeCard = (props) => {
  return (
    <div className="cardbg w-40 my-2 mx-2  rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
      <img
        className="w-20 object-scale-down py-5"
        src={props.img}
        alt="Sunset in the mountains"
      />
      <div className="px-2 py-4 text-center">
        <div className="font-bold text-white text-xl mb-2">{props.title}</div>
        <p className="text-white text-xs">{props.desc}</p>
      </div>
    </div>
  );
};

export default ThreeCard;
