import React, {useEffect, useState} from "react";
import Video from "../assets/video/Heavenly-Web-Video.mp4";
import Timer from "./commonComponents/Timer";
import date from 'date-and-time';
import timezone from 'date-and-time/plugin/timezone'
import timespan from 'date-and-time/plugin/timespan'
const FirstScreen = () => {
  date.plugin(timezone);
  date.plugin(timespan);

  const time = () => {

    const day = new Date()

    if(day.getDay() === 0 && day.Hours() <= 19){
      day.setHours(19)
      day.setMinutes(0)
      day.setSeconds(0)
      
    }else{
      day.setDate(day.getDate() + (0 - 1 - day.getDay() + 7) % 7 + 1);
      day.setHours(19)
      day.setMinutes(0)
      day.setSeconds(0)
    }
    

    return day
  }
  return (
    <>
      <div className="first-screen" style={{ height: "100vh", position: "relative", display:'flex',justifyContent:'center',alignItems:'center' }}>
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
        <div className="preview"/>
      </div>
      <Timer expiryTimestamp={time}/>
    </>
  );
};

export default FirstScreen;
