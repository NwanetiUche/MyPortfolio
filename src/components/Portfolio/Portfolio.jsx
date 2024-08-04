import "./Portfolio.css";
import React from "react";
import Todo from "../../assets/todo.png";
import Port from "../../assets/portfolio.png";
import Foodapp from "../../assets/foodapp.png";
import Maths from "../../assets/maths.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Port} alt="" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/NwanetiUche/MyPortfolio"
              className="btn"
              target="_blank"
            >
              Gitub
            </a>
            <a
              href="http://felixportfolio-nuf.vercel.app/"
              className="btn btnPrimary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Foodapp} alt="" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/NwanetiUche/FoodApp"
              className="btn"
              target="_blank"
            >
              Gitub
            </a>
            <a
              href="https://foodapp-nuf.vercel.app/"
              className="btn btnPrimary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Todo} alt="" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/NwanetiUche/TodoApp"
              className="btn"
              target="_blank"
            >
              Gitub
            </a>
            <a
              href="https://todoapp-nuf.vercel.app/"
              className="btn btnPrimary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Maths} alt="" />
          </div>
          <h3>This is the portfolio item title</h3>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/NwanetiUche/mathstutorial"
              className="btn"
              target="_blank"
            >
              Gitub
            </a>
            <a
              href="https://nwanetiuche.github.io/mathstutorial/GridMaths.html"
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
