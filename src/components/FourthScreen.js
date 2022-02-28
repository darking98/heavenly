import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const FourthScreen = () => {
  const items = [
    {
      span: "CONNECT WITH HEAVENLY",
      header: "TELL US MORE ABOUT YOU",
      path: "/",
    },
    {
      span: "SUSCRIBE AND",
      header: "STAY TUNED!",
      path: "/",
    },
    {
      span: "SEND YOUR",
      header: "PRAYER OR TESTIMONY",
      path: "/",
    },
  ];
  return (
    <>
      <div className="fourth-screen">
        <div className="fourth-screen-container">
          <div className="item-container">
            {items.map((element) => (
              <div className="item" key={element.span}>
                <div className="item-text">
                  <span>{element.span}</span>
                  <h3>{element.header}</h3>
                </div>
                <div className="arrow-item">
                  <HiOutlineArrowNarrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="preview" />
      </div>
    </>
  );
};

export default FourthScreen;
