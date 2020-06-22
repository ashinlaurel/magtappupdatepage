import React from "react";
import thefooter from "../assets/footer.png";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="heading text-center text-5xl font-bold">
          Our Customers belief
        </div>
        <div className="text-2xl heading mx-48  py-4 text-center">
          We have added lots of new features that will help people overcome
          language barriers. MagTapp is becoming an Essential Empowerment tool
          for people from Rural & Semi-Urban Areas and due to its low size (30MB
          -35MB) MagTapp will be a perfect option for next 200 Million Internet
          Users who will join us in coming 2 - 3 years and will use the Internet
          for the first time from not very expensive smartphones where storage
          is a major constraint, MagTapp will be a perfect solution as it will
          replace 5-6 different apps.
        </div>
        <div className="heading text-center text-3xl font-bold">
          We are aiming to 1 Crore User by the end of 2020
        </div>
        <div className="mt-10  text-center">
          <img width="400" src={thefooter} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
