import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import FirstScreen from "./components/FirstScreen";
import FifthScreen from "./components/FifthScreen";
import ThirdScreen from "./components/ThirdScreen";
import SecondScreen from "./components/SecondScreen";
import FourthScreen from "./components/FourthScreen";
import SixthScreen from "./components/SixthScreen";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
//import Timer from "./components/commonComponents/Timer";
//import { BiRadioCircle } from "react-icons/bi";
function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  const [navColor, setNavColor] = useState("#FFF");

  const components = [
    <FirstScreen />,
    <SecondScreen />,
    <ThirdScreen />,
    <FourthScreen />,
    <FifthScreen />,
    <SixthScreen />,
  ];
  const listening = useRef()
  const direction = useRef()
  const current = useRef()
  const next = useRef()

  /*const gotoSection = (sections, images, outerWrappers, innerWrappers) => {

  }
  */
  useEffect(() => {
    const sections = gsap.utils.toArray("section");
    const images = gsap.utils.toArray(".bg");
    const outerWrappers = gsap.utils.toArray(".outer");
    const innerWrappers = gsap.utils.toArray(".inner");

    const body = document.getElementById("body");
    document.addEventListener("wheel", handleWheel);
    document.addEventListener("keydown", handleArrows);
    body.addEventListener("touchstart", handleTouchStart);
    body.addEventListener("touchmove", handleTouchMove);
    body.addEventListener("touchend", handleTouchEnd);
    listening.current = false;
    direction.current = 'down'
    next.current = 0;

    const touch = {
      startX: 0,
      startY: 0,
      dx: 0,
      dy: 0,
      startTime: 0,
      dt: 0,
    };

    const tlDefaults = {
      ease: "slow.inOut",
      duration: 0.5,
    };

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    // Slides a section in on scroll down
    function slideIn() {
      // The first time this function runs, current is undefined
      if (current.current !== undefined) gsap.set(sections[current.current], { zIndex: 0 });

      gsap.set(sections[next.current], { autoAlpha: 1, zIndex: 1 });
      gsap.set(images[next.current], { yPercent: 0 });

      const tl = gsap
        .timeline({
          paused: true,
          defaults: tlDefaults,
          onComplete: () => {
            listening.current = true;
            current.current = next.current;
          },
        })
        .to([outerWrappers[next.current], innerWrappers[next.current]], { yPercent: 0 }, 0)
        .from(images[next.current], { yPercent: 15 }, 0);

      if (current.current !== undefined) {
        tl.add(
          gsap.to(images[current.current], {
            yPercent: -15,
            ...tlDefaults,
          }),
          0
        ).add(
          gsap
            .timeline()
            .set(outerWrappers[current.current], { yPercent: 100 })
            .set(innerWrappers[current.current], { yPercent: -100 })
            .set(images[current.current], { yPercent: 0 })
            .set(sections[current.current], { autoAlpha: 0 })
        );
      }
      
      tl.play(0);
    }

    // Slides a section out on scroll up
    function slideOut() {
      gsap.set(sections[current.current], { zIndex: 0 });
      gsap.set(sections[next.current], { autoAlpha: 1, zIndex: 1 });
      gsap.set([outerWrappers[next.current], innerWrappers[next.current]], { yPercent: 0 });
      gsap.set(images[next.current], { yPercent: 0 });
      gsap
        .timeline({
          defaults: tlDefaults,
          onComplete: () => {
            listening.current = true;
            current.current = next.current;
          },
        })
        .to(outerWrappers[current.current], { yPercent: 100 }, 0)
        .to(innerWrappers[current.current], { yPercent: -100 }, 0)
        .to(images[current.current], { yPercent: 15 }, 0)
        .from(outerWrappers[next.current], { yPercent: -100 }, 0)
        .from(innerWrappers[next.current], { yPercent: 100 }, 0)
        .from(images[next.current], { yPercent: -15 }, 0)
        .set(images[next.current], { yPercent: 0 })
        .set(images[current.current], { yPercent: 0 });

        /*if(current.current === 2){
          setNavColor('#0D6957')
        }else{
          setNavColor('#FFF')
        }
        */
    }

    function handleDirection() {
      listening.current = false;

      if (direction.current === "down") {
        next.current = current.current + 1;
        if (next.current >= sections.length) next.current = 0;
        slideIn();
      }

      if (direction.current === "up") {
        next.current = current.current - 1;
        if (next.current < 0) next.current = sections.length - 1;
        slideOut();
      }
    }

    function handleArrows(e) {
      const code = e.key;
      if (!listening.current) return;
      if (code === "ArrowDown") {
        direction.current = "down";
        handleDirection();
      } else if (code === "ArrowUp") {
        if (!listening.current) return;
        direction.current = "up";
        handleDirection();
      }
    }

    function handleWheel(e) {
      if (!listening.current) return;
      direction.current = e.wheelDeltaY < 0 ? "down" : "up";
      handleDirection();
    }

    function handleTouchStart(e) {
      if (!listening.current) return;
      const t = e.changedTouches[0];
      touch.startX = t.pageX;
      touch.startY = t.pageY;
    }

    function handleTouchMove(e) {
      if (!listening.current) return;
      e.preventDefault();
    }

    function handleTouchEnd(e) {
      if (!listening.current) return;
      const t = e.changedTouches[0];
      touch.dx = t.pageX - touch.startX;
      touch.dy = t.pageY - touch.startY;
      if (touch.dy > 10) direction.current = "up";
      if (touch.dy < -10) direction.current = "down";
      handleDirection();
    }

    slideIn();
    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleArrows);
      body.removeEventListener("touchstart", handleTouchStart);
      body.removeEventListener("touchmove", handleTouchMove);
      body.removeEventListener("touchend", handleTouchEnd);
    };
  },[]);

  return (
    <>
      <Navbar navColor={navColor} current={next.current} setNavColor={setNavColor}/>
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
}

export default App;
