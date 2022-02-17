import React from "react";
import { BiRadioCircle } from "react-icons/bi";
import gsap from "gsap";
const Dots = ({ current, gotoPage }) => {
  const handleCurrentScreen = (index) => {
    const sections = gsap.utils.toArray("section");
    const images = gsap.utils.toArray(".bg");

    const outerWrappers = gsap.utils.toArray(".outer");
    const innerWrappers = gsap.utils.toArray(".inner");
    gsap.set(sections[current], { autoAlpha: 1, zIndex: 1 });
    gsap.set(images[current], { yPercent: 0 });
  };
  console.log(current);
  return (
    <div className="dots-container">
      <BiRadioCircle onClick={handleCurrentScreen(1)} />
      <BiRadioCircle onClick={handleCurrentScreen(2)} />
      <BiRadioCircle onClick={handleCurrentScreen(3)} />
      <BiRadioCircle onClick={handleCurrentScreen(4)} />
    </div>
  );
};

export default Dots;
