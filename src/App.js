import React, { useEffect, useState } from "react";
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
import Timer from "./components/commonComponents/Timer";
import { BiRadioCircle } from "react-icons/bi";
function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  const [navColor, setNavColor] = useState("#FFF");
  
  useEffect(() => {
    const sections = gsap.utils.toArray("section");
    const images = gsap.utils.toArray(".bg");

    const outerWrappers = gsap.utils.toArray(".outer");
    const innerWrappers = gsap.utils.toArray(".inner");
    document.addEventListener("wheel", handleWheel);
    document.addEventListener("keydown", handleArrows);

    //document.addEventListener("touchstart", handleTouchStart);
    //document.addEventListener("touchmove", handleTouchMove);
    //document.addEventListener("touchend", handleTouchEnd);
    let listening = false,
      direction = "down",
      current,
      next = 0;
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
      if (current !== undefined) gsap.set(sections[current], { zIndex: 0 });

      gsap.set(sections[next], { autoAlpha: 1, zIndex: 1 });
      gsap.set(images[next], { yPercent: 0 });

      const tl = gsap
        .timeline({
          paused: true,
          defaults: tlDefaults,
          onComplete: () => {
            listening = true;
            current = next;
          },
        })
        .to([outerWrappers[next], innerWrappers[next]], { yPercent: 0 }, 0)
        .from(images[next], { yPercent: 15 }, 0);

      if (current !== undefined) {
        tl.add(
          gsap.to(images[current], {
            yPercent: -15,
            ...tlDefaults,
          }),
          0
        ).add(
          gsap
            .timeline()
            .set(outerWrappers[current], { yPercent: 100 })
            .set(innerWrappers[current], { yPercent: -100 })
            .set(images[current], { yPercent: 0 })
            .set(sections[current], { autoAlpha: 0 })
        );
      }
      sections.forEach((element) => {
        if (
          element.className === "section green" &&
          sections[next] === element
        ) {
          setNavColor("#0D6957");
        } else if (
          element.className !== "sections green" &&
          sections[current] === element
        ) {
          setNavColor("#FFF");
        }
      });
      tl.play(0);
    }

    // Slides a section out on scroll up
    function slideOut() {
      console.log(sections[next]);
      gsap.set(sections[current], { zIndex: 0 });
      gsap.set(sections[next], { autoAlpha: 1, zIndex: 1 });
      gsap.set([outerWrappers[next], innerWrappers[next]], { yPercent: 0 });
      gsap.set(images[next], { yPercent: 0 });

      gsap
        .timeline({
          defaults: tlDefaults,
          onComplete: () => {
            listening = true;
            current = next;
          },
        })

        .to(outerWrappers[current], { yPercent: 100 }, 0)
        .to(innerWrappers[current], { yPercent: -100 }, 0)
        .to(images[current], { yPercent: 15 }, 0)
        .from(outerWrappers[next], { yPercent: -100 }, 0)
        .from(innerWrappers[next], { yPercent: 100 }, 0)
        .set(images[next], { yPercent: 0 })
        .set(images[current], { yPercent: 0 });
    }

    function handleDirection() {
      listening = false;

      if (direction === "down") {
        next = current + 1;
        if (next >= sections.length) next = 0;
        slideIn();
      }

      if (direction === "up") {
        next = current - 1;
        if (next < 0) next = sections.length - 1;
        slideOut();
      }
    }

    function handleArrows(e) {
      const code = e.key;
      if (!listening) return;
      if (code === "ArrowDown") {
        direction = "down";
        handleDirection();
      } else if (code === "ArrowUp") {
        if (!listening) return;
        direction = "up";
        handleDirection();
      }
    }

    function handleWheel(e) {
      if (!listening) return;
      direction = e.wheelDeltaY < 0 ? "down" : "up";
      handleDirection();
    }

    function handleTouchStart(e) {
      if (!listening) return;
      const t = e.changedTouches[0];
      touch.startX = t.pageX;
      touch.startY = t.pageY;
    }

    function handleTouchMove(e) {
      if (!listening) return;
      e.preventDefault();
    }

    function handleTouchEnd(e) {
      if (!listening) return;
      const t = e.changedTouches[0];
      touch.dx = t.pageX - touch.startX;
      touch.dy = t.pageY - touch.startY;
      if (touch.dy > 10) direction = "up";
      if (touch.dy < -10) direction = "down";
      handleDirection();
    }

    slideIn();
    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleArrows);
      //document.removeEventListener("touchstart", handleTouchStart);
      //document.removeEventListener("touchmove", handleTouchMove);
      //document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);


  
  return (
    <>
      <Timer/>
      <Navbar navColor={navColor} />
      <section className="section">
        <div class="outer">
          <div class="inner">
            <div class="bg">
              <FirstScreen />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div class="outer">
          <div class="inner">
            <div class="bg ">
              <SecondScreen />
            </div>
          </div>
        </div>
      </section>
      <section className="section green" id="green">
        <div class="outer">
          <div class="inner">
            <div class="bg">
              <ThirdScreen />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div class="outer">
          <div class="inner">
            <div class="bg">
              <FourthScreen />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div class="outer">
          <div class="inner">
            <div class="bg">
              <FifthScreen />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div class="outer">
          <div class="inner">
            <div class="bg">
              <SixthScreen />
            </div>
          </div>
        </div>
      </section>
      {/*<section className="section">
        <SecondScreen />
  </section>*/}
      {/*<section className="section">
        <ThirdScreen />
</section>*/}
      {/*<section className="section">
        <FourthScreen />
      </section>

      <section className="section">
        <FifthScreen />
</section>*/}
    </>
  );
}

export default App;
