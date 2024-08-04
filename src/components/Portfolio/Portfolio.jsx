import "./Portfolio.css";
import React from "react";
import Felix from "../../assets/Felix.jpeg/";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Felix} alt="" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="https://github.com" className="btn" target="_blank">
              Gitub
            </a>
            <a
              href="https://github.com"
              className="btn btnPrimary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Felix} alt="" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="https://github.com" className="btn" target="_blank">
              Gitub
            </a>
            <a
              href="https://github.com"
              className="btn btnPrimary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Felix} alt="" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="https://github.com" className="btn" target="_blank">
              Gitub
            </a>
            <a
              href="https://github.com"
              className="btn btnPrimary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Felix} alt="" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a href="https://github.com" className="btn" target="_blank">
              Gitub
            </a>
            <a
              href="https://github.com"
              className="btn btnPrimary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
