import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import Logo from "../../assets/Logo-footer.png";
const Footer = () => {
  const groups = [
    {
      title: "Sitemap",
      items: [
        {
          text: "Home Gatherings",
          path: "/",
          icon: false,
        },
        {
          text: "Join Heavenly",
          path: "/",
          icon: false,
        },
        {
          text: "Contact",
          path: "/",
          icon: false,
        },
        {
          text: "Verse",
          path: "/",
          icon: false,
        },
      ],
    },
    {
      title: "Heavenly",
      items: [
        {
          text: "Washington, Usa",
          path: "/",
          icon: false,
        },
        {
          text: "info@heavenly.global",
          path: "/",
          icon: false,
        },
        {
          text: "+1124 4422 13",
          path: "/",
          icon: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          text: "Instagram",
          path: "/",
          icon: <BsInstagram />,
        },
        {
          text: "Facebook",
          path: "/",
          icon: <RiFacebookFill />,
        },
        {
          text: "Pinterest",
          path: "/",
          icon: <FaPinterestP />,
        },
      ],
    },
  ];
  return (
    <>
      <footer className="footer">
        <div className="footer-group-container">
          {groups.map((element) => (
            <div className="footer-group" key={element.title}>
              <div className="footer-group-title">
                <span>{element.title}</span>
              </div>
              {element.items.map((item) => (
                <a href={item.path} key={item.text}>
                  <div className="footer-group-item">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-copy">
          <div>
            <span>All Rights Reserved | Copyright © 2022</span>
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
