import React, { useEffect, useRef, useState } from "react";
import FirstScreen from "./FirstScreen";
import FifthScreen from "./FifthScreen";
import ThirdScreen from "./ThirdScreen";
import SecondScreen from "./SecondScreen";
import FourthScreen from "./FourthScreen";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Navbar from "./Navbar";
const LandingPage = () => {
  const [navColor, setNavColor] = useState('')
  const components = [
    <FirstScreen gotoSection={gotoSection} />,
    <SecondScreen gotoSection={gotoSection}/>,
    <ThirdScreen gotoSection={gotoSection}/>,
    <FourthScreen gotoSection={gotoSection}/>,
    <FifthScreen gotoSection={gotoSection}/>,
  ];
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  const animating = useRef();
  const currentIndex = useRef();

  function gotoSection(index, direction) {
    const sections = gsap.utils.toArray("section");
    const images = gsap.utils.toArray(".bg");
    const outerWrappers = gsap.utils.toArray(".outer");
    const innerWrappers = gsap.utils.toArray(".inner");
    const headings = gsap.utils.toArray(".section-heading");
    const itemsAnimation = gsap.utils.toArray('.second-screen-item')
    const spanAnimation = gsap.utils.toArray('.span-animation')
    console.log(headings)
    const clamp = gsap.utils.clamp(0, sections.length - 1);
    index = clamp(index); // make sure it's valid
    // we're at the end, so exit
    if (currentIndex.current === index) {
      return;
    }


    animating.current = true;
    let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 0.7, ease: "power4.out"},
        onComplete: () => (animating.current = false),
      });
    if (currentIndex.current >= 0) {
      // The first time this function runs, current is -1
      gsap.set(sections[currentIndex.current], { zIndex: 0 });
      tl.to(images[currentIndex.current], { yPercent: -15 * dFactor }).set(
        sections[currentIndex.current],
        { autoAlpha: 0 }
      );
    }
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
      { yPercent: 0 },
      0
    )
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
      
      
      if(currentIndex.current === 0){
        tl.fromTo(spanAnimation[0],{
          y: -20,
          opacity:0,
        }, {
          y: 0,
          opacity:1,
          duration:0.3,

          ease: "none"
        })
        .fromTo(headings[0],  {
          x: -20,
          opacity:0,
        }, {
          x: 0,
          opacity:1,
  
          duration:0.3,
          ease: "none"
        })
        
        itemsAnimation.forEach((element, idx) => {
          console.log(itemsAnimation[idx])
          tl.fromTo(itemsAnimation[idx],{
            y:-10 * (idx + 1),
            opacity:0
          },{
            y:0,
            opacity:1,
                        duration:0.3,

            ease: "none"
          })
        })
      }else if(currentIndex.current >= 2) {
        tl.fromTo(headings[0],  {
          x: 20,
          opacity:0,
        }, {
          x: 0,
          opacity:1,
  
          duration:0.3,
          ease: "none"
        })
        .fromTo(spanAnimation[0],{
          x: 20,
          opacity:0,
        }, {
          x: 0,
          opacity:1,
  
          duration:0.3,
          ease: "none"
        })
        itemsAnimation.forEach((element, idx) => {
          console.log(itemsAnimation[idx])
          tl.fromTo(itemsAnimation[idx],{
            y:10 * (idx + 1),
            opacity:0
          },{
            y:0,
            opacity:1,
            duration:0.3,
            ease: "none"
          })
        })
      }
    currentIndex.current = index;
    

    if(sections[2] === sections[currentIndex.current])
   {
     setNavColor('#0D6957')
   } else{
     setNavColor('#FFF')
   }

  }

  useEffect(() => {
    const body = document.getElementById("body");
    document.addEventListener("wheel", handleWheel);
    //document.addEventListener("keydown", handleArrows);
    body.addEventListener("touchstart", handleTouchStart);
    body.addEventListener("touchmove", handleTouchMove);
    body.addEventListener("touchend", handleTouchEnd);
    /*let animating = false,
      currentIndex = -1;
    */
    const touch = {
      startX: 0,
      startY: 0,
      dx: 0,
      dy: 0,
      startTime: 0,
      dt: 0,
    };

    //gsap.set(outerWrappers, { yPercent: 100 });
    //gsap.set(innerWrappers, { yPercent: -100 });

    function handleWheel(e) {
      if (animating.current) return;

      e.wheelDeltaY < 0
        ? gotoSection(currentIndex.current + 1, 1)
        : gotoSection(currentIndex.current - 1, -1);
    }

    function handleTouchStart(e) {
      const t = e.changedTouches[0];
      touch.startX = t.pageX;
      touch.startY = t.pageY;
    }

    function handleTouchMove(e) {
      e.preventDefault();
    }

    function handleTouchEnd(e) {
      if (animating.current) return;
      const t = e.changedTouches[0];
      touch.dx = t.pageX - touch.startX;
      touch.dy = t.pageY - touch.startY;
      if (touch.dy > 10) gotoSection(currentIndex.current - 1, -1);
      if (touch.dy < -10) gotoSection(currentIndex.current + 1, 1);
    }

    gotoSection(0, 1);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      //document.removeEventListener("keydown", handleArrows);
      //body.removeEventListener("touchstart", handleTouchStart);
      body.removeEventListener("touchmove", handleTouchMove);
      body.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <Navbar
        navColor={navColor}
        //setNavColor={setNavColor}
        gotoSection={gotoSection}
      />
      <div id="body">
        {components.map((component, idx) => (
          <section className="section" key={idx}>
            <div className="outer">
              <div className="inner">
                <div className="bg">{component}</div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
