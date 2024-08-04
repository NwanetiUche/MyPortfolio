import React from "react";
import { TfiLinkedin } from "react-icons/tfi";
import { FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <a href="#" className="footer_logo"></a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://wa.me/+2348130889711" target="_blank">
          <BsWhatsapp />
        </a>
        <a
          href="https://x.com/NwanetiUche?t=za_RyCNGo5G0IgzwTbLasA&s=09"
          target="_blank"
        >
          <FiTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/uche-nwaneti-80559428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <TfiLinkedin />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Nwaneti Uche Felix</small>
      </div>
    </div>
  );
};

export default Footer;
