import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/onewelcome";
import Slider from "./Components/twoslider";
import Three from "./Components/threewhatmakes";

function App() {
  return (
    <div className="">
      <Navbar />
      <Welcome />
      <Slider />
      <Three />
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
