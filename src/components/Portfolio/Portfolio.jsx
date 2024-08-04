import "./Portfolio.css";
import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src="../../assets/todo.png" alt="" />
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
            <img src={Felix} alt="" />
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
            <img src={Felix} alt="" />
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
            <img src={Felix} alt="" />
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
