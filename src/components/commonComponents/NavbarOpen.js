import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavbarOpen = ({ navOpen, setNavOpen, gotoSection }) => {

  const navigate = useNavigate();
  const items = [
    {
      text: "Join Us",
      component: 1,
    },
    {
      text: "About",
      component: 2,
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  const handleClick = (component) => {
    setNavOpen(!navOpen)
    navigate('/')
    gotoSection(component,1)
    
  } 

  const console = () => {
    console.log("algo")
  }

  return (
    <>
      <div className={navOpen ? "navbar-open nav-transition" : "navbar-open"}>
        <ul>
          {items.map((item) =>{ return(
            item.path ? (
              <li className="navbar-items" onClick={() => setNavOpen(!navOpen)}>
                <Link to={item.path}>
                  {item.text}
                </Link>
              </li>
            ) : (
              <li className="navbar-items" onClick={() => handleClick(item.component)}>
                {item.text}
              </li>
            )
          )})}
          {/*<li className="navbar-items" onClick={() => gotoSection(1,1)}>
            Join Us
          </li>
          <li className="navbar-items" onClick={() => gotoSection(2,1)}>
            About
          </li>
          <li className="navbar-items" onClick={() => {
            gotoSection(3,1)
            setNavOpen(!navOpen)
            }}>
            Contact
          </li>*/}
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
