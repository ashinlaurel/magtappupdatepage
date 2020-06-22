import React from "react";
import welcomeimg from "../assets/welcomeimg.png";
import googleplayicon from "../assets/oneplayicon.png";
const Welcome = () => {
  return (
    <div className=" w-full h-full ">
      <div className="welcomebg w-full h-full ">
        <div className="text-center flex flex-col items-center my-2">
          <div className="text-2xl lg:hidden header text-white font-bold pt-10">
            Welcome to Magtapp world!
          </div>
          <div className="text-5xl helvetica hidden lg:block  text-white font-bold pt-10">
            What’s New in MagTapp 2.0?
          </div>
          <div className="text-xs lg:hidden text-white mx-10">
            MagTapp 2.0 is coming with all new features that will make your life
            easier than before stay tuned!
          </div>
          <div className="text-xl  px-40  helvetica hidden lg:block text-white mx-64">
            MagTapp is an Empowerment Tool which helps anyone Read and
            Understand Content with the help of a Visual Meaning on Internet or
            in Documents files. MagTapp is a Web Browse with an Inbuilt Image
            Dictionary & Document Reader feature.
          </div>
          <div className="mx-10 py-5 w-full px-2 flex items-center justify-center ">
            <img className="sm:px-5" src={welcomeimg} width="1500" />
          </div>
          <div className="text-2xl header lg:hidden text-white font-bold pt-5">
            Make choice and have fun!
          </div>
          <div className="text-5xl hidden helvetica lg:block text-white font-bold pt-5">
            Make choice and have fun!
          </div>
          <div className="text-xs lg:hidden text-white mx-10">
            * Available on Android devices from 5.5, Size varies with the
            device.
          </div>
          <div className="text-2xl hidden lg:block helvetica text-white mx-10">
            * Available on Android devices from 5.5, Size varies with the
            device.
          </div>
          <div className="flex items-center justify-center pb-5">
            <div className="lg:hidden text-white text-xl  ">
              <i class="fa fa-play" aria-hidden="true"></i>
            </div>
            <div className="text-xs lg:hidden underline text-white mx-1 ">
              Watch the video
            </div>
          </div>

          <div className="hidden lg:flex flex-row items-center justify-center pt-3 pb-8">
            <div className="text-white text-2xl  px-1">
              <i class="fa fa-play" aria-hidden="true"></i>
            </div>
            <div className="text-white text-2xl underline helvetica px-2">
              Watch the video
            </div>
            <div className="w-40 pl-10">
              <img src={googleplayicon} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col items-center my-2 pt-10">
        <div className="lg:hidden text-2xl font-bold">
          Check What's New Here
        </div>
        <div className="lg:hidden text-xs text-black mx-10">
          MagTapp is World's First Web Browser with Inbuilt Visual Dictionary &
          Document Reader available in 12 Indian Languages for Free in just
          30MB.
        </div>
        <div className="lg:hidden pt-2">
          <button
            class="butoncolour text-white text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            What's New
          </button>
        </div>
        <div className="hidden helvetica lg:block text-5xl font-bold heading">
          Why MagTapp 2.0
        </div>
        <div className="hidden helvetica lg:block text-4xl font-bold heading">
          MagTapp 2.0 will be our Massive Update.
        </div>
        <div className="hidden lg:block text-xl heading mx-48 py-4">
          In the last 5-6 months, We have acquired 1 Million Users and we
          learned a lot about User Experience and What our users want from the
          user activity and 18,500+ Google Playstore reviews.
        </div>
        <div className="hidden lg:block text-xl heading mx-48 py-4">
          On an average user spends around 13.50 min on MagTapp App and with
          this update, this timing will increase.
        </div>
        <div className="hidden lg:block text-xl heading mx-48 py-4">
          Based on these insights we have built MagTapp 2.0 which is much easier
          and has lots of essential features for our day to day life and
          language barrier problem.
        </div>
        <div className="hidden helvetica lg:block pt-2">
          <button
            class="butoncolour helvetica text-white text-xl px-4 py-2 rounded-lg shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            Check Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
