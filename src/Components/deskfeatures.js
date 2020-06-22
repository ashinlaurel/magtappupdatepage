import React from "react";

const Deskfeatures = (props) => {
  //   const featbg = {
  //     background-image: url({ one }),
  //     backgroundPosition: center,
  //   };
  return (
    <div className="my-20 ">
      <div className="flex flex-col items-center justify-center ">
        <div className="mx-10 heading text-center text-5xl font-bold">
          {props.title}
        </div>
        <div
          className={`mt-10 bg-contain bg-no-repeat  bg-center w-full h-screen ${props.settings}`}
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
        <div className="text-2xl heading mx-36 px-32 py-4 text-center">
          {props.desc}
        </div>
      </div>
    </div>
  );
};

export default Deskfeatures;
