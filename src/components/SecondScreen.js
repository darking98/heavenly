import React from "react";
import image from "../assets/second-screen.png";
const SecondScreen = () => {
  return (
    <>
      <div className="second-screen">
        <div className="second-screen-container">
          <div className="second-screen-title">
            <span>Heavenly Home Gatherings</span>
            <h3>{`COME & JOIN US\nEVERY WEEKEND`}</h3>
          </div>
          <img src={image} alt="" />

        </div>
      </div>
    </>
  );
};

export default SecondScreen;
