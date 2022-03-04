import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavbarOpen = ({ navOpen, setNavOpen, gotoSection, contact }) => {

  const navigate = useNavigate();
  const items = [
    {
      text: "Join Us",
      component: 1,
      hover: 'Every Sunday!',
      rotate: "rotate(-5deg)",
    },
    {
      text: "About",
      component: 2,
      hover: 'About Heavenly',
      rotate: "rotate(5deg)",
    },
    {
      text: "Contact",
      path: "/contact",
      hover: 'Stay Tuned!',
      rotate: "rotate(-5deg)",
    },
  ];

  const contactItems = [
    {
      text: "Home",
      hover: "Visit Heavenly!",
      rotate: "rotate(5deg)",
      path: "/"
    },
    {
      text: "Contact",
      path: "/contact",
      hover: 'Stay Tuned!',
      rotate: "rotate(-5deg)",
    },
  ]

  const handleClick = (component) => {
    setNavOpen(!navOpen)
    navigate('/')
    gotoSection(component, 1)

  }


  return (
    <>
      <div className={navOpen ? "navbar-open nav-transition" : "navbar-open"}>
        <ul className={contact ? 'contact-ul' : 'home-ul'}>
          {
            contact ?
              contactItems.map(item => (


                <li className="navbar-items" onClick={() => setNavOpen(!navOpen)}>
                  <Link to={item.path}>
                    <div className="navbar-item-container">
                      {item.text}
                      <div className="navbar-item-hover">
                        <button
                          style={{
                            transform: item.rotate,
                          }}
                        >
                          {item.hover}
                        </button>
                      </div>

                    </div>
                  </Link>

                </li>

              ))
              : items.map((item) => {
                return (
                  item.path ? (
                    <Link to={item.path}>

                      <li className="navbar-items" onClick={() => setNavOpen(!navOpen)}>
                        <div className="navbar-item-container">
                          {item.text}
                          <div className="navbar-item-hover">
                            <button
                              style={{
                                transform: item.rotate,
                              }}
                            >
                              {item.hover}
                            </button>
                          </div>

                        </div>
                      </li>
                    </Link>

                  ) : (
                    <li className="navbar-items" onClick={() => handleClick(item.component)}>
                      <div className="navbar-item-container">
                        <p>{item.text}</p>
                        <div className="navbar-item-hover">
                          <button
                            style={{
                              transform: item.rotate,
                            }}
                          >
                            {item.hover}
                          </button>
                        </div>

                      </div>

                    </li>
                  )
                )
              })}

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
