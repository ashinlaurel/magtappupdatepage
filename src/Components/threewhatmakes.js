import React from "react";
import ThreeCard from "./threecard";
import Browser from "../assets/cardimages/browser.png";
import Magtop from "../assets/cardimages/magbot.png";
import Tap from "../assets/cardimages/tap.png";
import translate from "../assets/cardimages/translate.png";

const Three = () => {
  return (
    <div className=" w-full h-full mt-10  ">
      <div className="text-center flex flex-col items-center my-2 pt-10">
        <div className="text-2xl font-bold">What Makes MagTapp Different?</div>
        <div className="text-xs text-black mx-10">
          Our uniqueness lies in our One Tap Visual Meaning Solution which is
          available in 12 Indian Languages and is the First in its kind in the
          World. Proudly Made in India for those who want to achieve Geniusness.
        </div>
        <div className="pt-4">
          <button
            class=" border border-black text-black text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            Check all features
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 items-center justify-center ">
        <ThreeCard
          img={Browser}
          title="One Tap Visual 
Meaning"
          desc="Long press on Words you don't 
Understand and Experience 
One Tap Visual Meaning"
        />
        <ThreeCard
          img={Browser}
          title="One Tap Visual 
Meaning"
          desc="Long press on Words you don't 
Understand and Experience 
One Tap Visual Meaning"
        />
        <ThreeCard
          img={Browser}
          title="One Tap Visual 
Meaning"
          desc="Long press on Words you don't 
Understand and Experience 
One Tap Visual Meaning"
        />
        <ThreeCard
          img={Browser}
          title="One Tap Visual 
Meaning"
          desc="Long press on Words you don't 
Understand and Experience 
One Tap Visual Meaning"
        />
      </div>
    </div>
  );
};

export default Three;
