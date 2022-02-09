import React from "react";

const NavbarOpen = ({ navOpen, setNavOpen }) => {
  return (
    <>
      <div className={navOpen ? "navbar-open nav-transition" : "navbar-open"}>
        <ul>
          <li className="navbar-items">Join Us</li>
          <li className="navbar-items">About</li>
          <li className="navbar-items">Contact</li>
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
