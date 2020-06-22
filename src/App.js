import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/onewelcome";
import Slider from "./Components/twoslider";
import Three from "./Components/threewhatmakes";
import FourIntroducing from "./Components/fourIntro";
import Deskfeatures from "./Components/deskfeatures";

function App() {
  return (
    <div className="">
      <Navbar />
      <Welcome />
      <Deskfeatures />
      <div className="sm:hidden">
        <Slider />
        <Three />
        <FourIntroducing />
      </div>
      <div className="h-64 w-full"></div>
      <div className="h-64 w-full"></div>
      <div className="h-64 w-full"></div>
      <div className="h-64 w-full"></div>
      <div className="h-64 w-full"></div>
      <div className="h-64 w-full"></div>
      <div className="h-64 w-full"></div>
    </div>
  );
}

export default App;
