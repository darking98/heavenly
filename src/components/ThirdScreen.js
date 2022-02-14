import React from "react";
import image from "../assets/red-image.png";
import imageResponsive from '../assets/red-image-responsive.png'

const ThirdScreen = () => {
  return (
    <>
      <div className="third-section">
        <div className="image-wrapper">
          <img src={image} alt="" className="image-desktop"/>
          <img src={imageResponsive} alt="" className="image-responsive"/>

        </div>
        <div className="info">
          <div className="info-text">
            <span>Hey Friend!</span>
            <h3>{`We want to\nknow you`}</h3>

          </div>
          <div className="info-contact">
            <button>Contact Us</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, esto es un mini about de Heavenly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdScreen;
