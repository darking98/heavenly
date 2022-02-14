import React from "react";
import image from "../assets/Imagen.png";
const SecondScreen = () => {
  const items = [
    {
      text: "Where to find us",
      button: "Direction #6325, USA",
      rotate: "translate(-5deg)",
      color: "#72ABE2",
    },
    {
      text: "Where to find us",
      button: "Every Sunday 7pm to 8pm",
      rotate: "rotate(5deg)",
      color: "#E44A3D",
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
          <div className="second-screen-title">
            <span>Heavenly Home Gatherings</span>
            <h3>{`COME & JOIN US\nEVERY WEEKEND`}</h3>
            <div className="second-screen-items">
              {items.map((element) => (
                <div className="second-screen-item">
                  <p>{element.text}</p>
                  <button
                    style={{ transform: element.rotate, background: element.color }}
                  >
                    {element.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default SecondScreen;
