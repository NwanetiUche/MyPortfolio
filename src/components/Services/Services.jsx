import "./Sevices.css";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const Sevices = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Front-End Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Corporate Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>E-Commerce Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Blog and Personal Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Social Networking Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Educational Platform Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Marketplace Website</p>
            </li>
          </ul>
        </article>
        {/* END OF ARTICLE */}
        <article className="service">
          <div className="service_head">
            {" "}
            <h3>Front-End Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Media and Entertainment Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Healthcare Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Real Estate Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Travel and Tourism Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Non-Profit and Charity Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Government and Public Sector Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Portfolio Website</p>
            </li>
          </ul>
        </article>
        {/* END OF  ARTICLE */}
        <article className="service">
          <div className="service_head">
            <h3>Front-End Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheck className="service_list-icon" />
              <p>Event Management Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Financial and Banking Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Tech and Startup Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Community and Forum Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Health and Fitness Website</p>
            </li>
            <li>
              <FaCheck className="service_list-icon" />
              <p>Food and Restaurant Website</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
      </div>
    </section>
  );
};

export default Sevices;
