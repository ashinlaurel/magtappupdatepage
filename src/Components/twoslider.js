import React from "react";
import sliderimg from "../assets/sliderimg.png";
import googleplayimg from "../assets/googleplay.png";
import sliderillustration from "../assets/sliderillustration.png";

const Slider = () => {
  return (
    <div className=" w-full h-full mt-10 relative flex ">
      <div className="welcomebg w-full h-64 py-10 absolute my-12 shadow-xl"></div>
      <div className="sliderbg z-10 w-full h-full mx-6 shadow-xl relative">
        <div className="  absolute bottom-0 right-0 ">
          <img src={sliderillustration} width="100" />
        </div>
        <div className="flex items-center justify-center ">
          <div className="my-5 mx-2">
            <img src={sliderimg} width="1000" />
          </div>
          <div className="flex flex-col pt-5 mx-1 ">
            <div className="text-2xl font-bold text-white leading-none mx-1">
              Visual Meaning on Single Tap
            </div>
            <div className="text-white text-xs my-2 mx-2">
              Not just Visual Meanings but you can even Translate Documents or
              Online Content in MagTapp with just few taps on the go. Just
              Switch Off MagTapp Mode, Select Content and Tap on Translate Icon.
            </div>
            <div className="my-1  relative ">
              <img src={googleplayimg} width="100" />
            </div>
          </div>
          <div className="m-2">
            <i class="text-white fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* <div className="text-center">Hello</div> */}
    </div>
  );
};

export default Slider;
