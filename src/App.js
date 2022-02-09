import React,{useEffect} from 'react'
import Navbar from "./components/Navbar";
import FirstScreen from "./components/FirstScreen";
import FifthScreen from "./components/FifthScreen";
import SecondScreen from "./components/SecondScreen";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function App() {
    /*gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray('.section')
    
    /*sections.map(element => {
      ScrollTrigger.create({
        trigger:element,
        start:'top top',
        pin:true,
        pinSpacing:false
      })
    })
    
   sections.map(element => (
     ScrollTrigger.create({
      trigger:element,
      start:'top top',
      pin:true,
      pinSpacing:false
     })
   ))
   ScrollTrigger.create({
    start: 0, 
    end: "max",
    snap: 1 / (sections.length - 1)
  })
  */
  return (
    <>
      <Navbar />
      <section className="section">
        <FirstScreen />
      </section>

      <section className="section">
        <SecondScreen />
      </section>

      <section className="section">
        <FifthScreen />
      </section>
    </>
  );
}

export default App;
