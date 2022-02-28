import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [navColor, setNavColor] = useState("#FFF");
  
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage/>}
          />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
