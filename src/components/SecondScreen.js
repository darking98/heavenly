import React from "react";
import image from "../assets/second-screen.png";
const SecondScreen = () => {
  const items = [
    {
      text: "Where to find us",
      button: "Direction #6325, USA",
      rotate: "rotate(5deg)",
      color: "#72ABE2",
      className:'button-right'
    },
    {
      text: "Where to find us",
      button: "Every Sunday 7pm to 8pm",
      rotate: "rotate(-5deg)",
      color: "#E44A3D",
      className:'button-left'
    },
    {
      text: "Other information",
      button: "Lorem Ipsum dolor sit amet",
      rotate: "rotate(0deg)",
      color: "#000",
    },
  ];
  return (
    <>
      <div className="second-screen">
        <div className="second-screen-container">
          <div style={{width:'100%'}}>
            <div className="second-screen-title">
              <span>Heavenly Home Gatherings</span>
              <h3 className="section-heading">{`COME & JOIN US\nEVERY WEEKEND`}</h3>
            </div>
            <div>
              <div className="second-screen-items">
                {items.map((element) => (
                  <div className="second-screen-item" key={element.button}>
                    <p>{element.text}</p>
                    <div className="button-container">
                    <button
                      style={{
                        transform: element.rotate,
                        background: element.color,
                      }}
                      className={element.className}
                    >
                      {element.button}
                    </button>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img src={image} alt="" />
        </div>
        <div className="preview"/>
      </div>
    </>
  );
};

export default SecondScreen;
