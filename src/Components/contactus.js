import React from "react";
import user from "../assets/user.png";
import stars from "../assets/stars.png";
const ContactUs = () => {
  return (
    <div>
      <div className="text-center flex flex-col items-center my-2 pt-10">
        <div className="lg:hidden heading text-xl font-bold">
          Our Customers belief
        </div>
        <div className="lg:hidden heading text-xs text-black mx-10">
          MagTapp is World's First Web Browser with Inbuilt Visual Dictionary &
          Document Reader available in 12 Indian Languages for Free in just
          30MB.
        </div>
        <div className="flex items-center justify-center pt-10">
          <div className="wider my-2 mx-1 rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img
              className="w-10 object-scale-down rounded-full pt-5"
              src={user}
            />
            <img className="w-10 object-scale-down py-1" src={stars} />
            <div className=" py-2 text-center">
              <div className="font-bold user mb-2">Jonathan Taylor</div>
              <div className="font-bold ceo mb-2">Ceo at Creativex</div>
              <p className="about text-center ">
                OMG! I love all the features of MagTapp@MagTapp…
              </p>
            </div>
          </div>
          <div className="wider my-2 mx-1 rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img
              className="w-10 object-scale-down rounded-full pt-5"
              src={user}
            />
            <img className="w-10 object-scale-down py-1" src={stars} />
            <div className=" py-2 text-center">
              <div className="font-bold user mb-2">Jonathan Taylor</div>
              <div className="font-bold ceo mb-2">Ceo at Creativex</div>
              <p className="about text-center ">
                OMG! I love all the features of MagTapp@MagTapp…
              </p>
            </div>
          </div>
          <div className="wider my-2 mx-1 rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img
              className="w-10 object-scale-down rounded-full pt-5"
              src={user}
            />
            <img className="w-10 object-scale-down py-1" src={stars} />
            <div className=" py-2 text-center">
              <div className="font-bold user mb-2">Jonathan Taylor</div>
              <div className="font-bold ceo mb-2">Ceo at Creativex</div>
              <p className="about text-center ">
                OMG! I love all the features of MagTapp@MagTapp…
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
