import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import NavbarOpen from "./commonComponents/NavbarOpen";
const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <>
      <nav className={hamburgerOpen && "nav-transition-border"}>
        <div className="nav-container">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div
            className={
              hamburgerOpen ? "hamburger-nav hamburger-open" : "hamburger-nav"
            }
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
          </div>
        </div>
      </nav>
      <NavbarOpen navOpen={hamburgerOpen} setNavOpen={setHamburgerOpen} />
    </>
  );
};

export default Navbar;
