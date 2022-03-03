import React from "react";
import image from "../assets/red-image.png";
import imageResponsive from '../assets/red-image-responsive.png'
import Dots from './commonComponents/Dots'
import {Link} from 'react-router-dom'

const ThirdScreen = ({ gotoSection }) => {
  return (
    <>
      <Dots gotoSection={gotoSection} current={2} color={true} />
      <div className="third-section">
        <div className="image-wrapper">
          <img src={image} alt="" className="image-desktop" />
          <img src={imageResponsive} alt="" className="image-responsive" />

        </div>
        <div className="info">
          <div className="info-text">
            <span>Hey Friend!</span>
            <h3>{`We want to\nknow you`}</h3>

          </div>
          <div className="info-contact">
            <Link to="/contact">
              <button className="button-left">Contact Us</button>
            </Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, esto es un mini about de Heavenly.
            </p>
          </div>
        </div>
        <div className="preview" />
      </div>
    </>
  );
};

export default ThirdScreen;
