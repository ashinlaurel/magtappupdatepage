import React from "react";
import ThreeCard from "./threecard";
import Browser from "../assets/cardimages/browser.png";
import Magtop from "../assets/cardimages/magbot.png";
import Tap from "../assets/cardimages/tap.png";
import Translate from "../assets/cardimages/translate.png";
import translate from "../assets/cardimages/translate.png";

const Three = () => {
  return (
    <div className=" w-full h-full mt-10  ">
      <div className="text-center flex flex-col items-center my-2 pt-10">
        <div className="text-2xl font-bold mx-2">
          What Makes MagTapp Different?
        </div>
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
      <div className="flex flex-wrap mt-10  justify-center ">
        <ThreeCard
          img={Tap}
          title="One Tap Visual 
Meaning"
          desc="Long press on Words you don't 
Understand and Experience 
One Tap Visual Meaning"
        />
        <ThreeCard
          img={Magtop}
          title="MagBot 
          Visual Dictionary"
          desc="MagBot is an Inbuilt Personal 
          Chatting Visual Dictionary in 
          MagBot."
        />
        <ThreeCard
          img={Browser}
          title="MagTapp Browser"
          desc="earch and Browse Contents 
          online in our Fast and Light 
          Web Browser"
        />
        <ThreeCard
          img={Translate}
          title="Translate Content"
          desc="Not just Visual Meanings but 
          you can even Translate 
          Documents or Online Content 
          in MagTapp"
        />
      </div>
    </div>
  );
};

export default Three;
