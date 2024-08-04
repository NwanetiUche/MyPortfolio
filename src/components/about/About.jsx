import React from "react";
import "./About.css";
import Felix from "../../assets/Felix.jpeg/";
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { IoLibrarySharp } from "react-icons/io5";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Felix} alt="About Image" />
          </div>
        </div>
        <div className=" about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" /> <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about_card">
              <FaUsers className="about_icon" /> <h5>Clients</h5>
              <small>2+ Clients</small>
            </article>
            <article className="about_card">
              <IoLibrarySharp className="about_icon" /> <h5>Projects</h5>
              <small>4+ completed Projects</small>
            </article>
          </div>
          <p>
            Hello, I am a Frontend Developer and Administrative Officer. With a
            passion for creating intuitive digital experiences, I craft
            responsive and user-friendly websites using HTML, CSS, JavaScript,
            and React at GOMYCODE, a cutting-edge tech company. Additionally, I
            bring extensive expertise in administrative support, customer
            relationship management, and property management from my time at
            Africa Diving Services.
          </p>
          <a href="#contact" className="btn btnPrimary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
