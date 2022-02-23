import React from "react";

const NavbarOpen = ({ navOpen, setNavOpen, handleClick }) => {



  return (
    <>
      <div className={navOpen ? "navbar-open nav-transition" : "navbar-open"}>
        <ul>
          <li className="navbar-items" onClick={handleClick}>
            Join Us
          </li>
          <li className="navbar-items" onClick={handleClick}>
            About
          </li>
          <li className="navbar-items" onClick={handleClick}>
            Contact
          </li>
        </ul>
        <div className="navbar-open-social">
          <span>Washington, USA</span>
          <a href="/">
            <span>Facebook</span>
          </a>
          <a href="/">
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarOpen;
