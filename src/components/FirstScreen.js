import React from "react";
import Video from '../assets/video/Heavenly-Web-Video.mp4'
const FirstScreen = () => {
  return (
    <>
    <div style={{height:'100vh'}}>
        <video src={Video} width='100%' height='100%' preload="auto" autoPlay muted loop playsinline >
    </video>

    </div>
    </>
  );
};

export default FirstScreen;
