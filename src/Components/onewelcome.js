import React from "react";
import welcomeimg from "../assets/welcomeimg.png";
const Welcome = () => {
  return (
    <div className=" w-full h-full ">
      <div className="welcomebg w-full h-full ">
        <div className="text-center flex flex-col items-center my-2">
          <div className="text-2xl text-white font-bold pt-10">
            Welcome to Magtapp world!
          </div>
          <div className="text-xs text-white mx-10">
            MagTapp 2.0 is coming with all new features that will make your life
            easier than before stay tuned!
          </div>
          <div className="mx-10 py-5 w-full px-2">
            <img className="" src={welcomeimg} width="1500" />
          </div>
          <div className="text-2xl text-white font-bold pt-5">
            Make choice and have fun!
          </div>
          <div className="text-xs text-white mx-10">
            * Available on Android devices from 5.5, Size varies with the
            device.
          </div>
          <div className="text-xs text-white mx-10 pt-1 pb-5">
            Watch the video
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col items-center my-2 pt-10">
        <div className="text-2xl font-bold">Check What's New Here</div>
        <div className="text-xs text-black mx-10">
          MagTapp is World's First Web Browser with Inbuilt Visual Dictionary &
          Document Reader available in 12 Indian Languages for Free in just
          30MB.
        </div>
        <div className="pt-2">
          <button
            class="butoncolour text-white text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            What's New
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
