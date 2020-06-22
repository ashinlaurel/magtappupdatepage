import React from "react";
import one from "../assets/pcfeatures/theone.png";

const Deskfeatures = () => {
  //   const featbg = {
  //     background-image: url({ one }),
  //     backgroundPosition: center,
  //   };
  return (
    <div className="my-20">
      <div className="flex flex-col items-center justify-center">
        <div className="heading text-5xl font-bold">1.TranslateAll</div>
        <div
          className="p-40 mt-10   bg-contain bg-no-repeat  w-full h-screen"
          style={{ backgroundImage: `url(${one})` }}
        ></div>
      </div>
    </div>
  );
};

export default Deskfeatures;
