import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Felix from "../../assets/Felix.jpeg/";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nwaneti Uche Felix</h1>
        <h5 className="textLight">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="mePic" src={Felix} alt="me" />
        </div>
        <a href="#contact" className="scroll">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
