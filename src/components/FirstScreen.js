import React from "react";
import Video from "../assets/video/Heavenly-Web-Video.mp4";
import Timer from "./commonComponents/Timer";
const FirstScreen = () => {
  return (
    <>
      <div style={{ height: "100vh", position: "relative", display:'flex',justifyContent:'center',alignItems:'center' }}>
        <video
          src={Video}
          width="100%"
          height="100%"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="first-screen-opacity">
          <span>Welcome home!</span>
          <h3>{`A fresh Oasis from\nHeaven to our families`}</h3>
        </div>
      </div>
      <Timer expiryTimestamp={new Date(2022,2,22)}/>
    </>
  );
};

export default FirstScreen;
