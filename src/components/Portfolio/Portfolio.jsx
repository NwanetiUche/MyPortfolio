import "./Portfolio.css";
import React from "react";
import Todo from "../../assets/todo.png";
import Port from "../../assets/portfolio.png";
import Foodapp from "../../assets/foodapp.png";
import Maths from "../../assets/maths.png";
import Campaign from "../../assets/campaign.png";

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
          <h3>My Portfolio Website</h3>
          <div>
            <small>
              Used React, Mail integration to get direct message to my mail and
              (Javascript Extension) JSX to make app interactive
            </small>
          </div>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/NwanetiUche/MyPortfolio"
              className="btn"
              target="_blank"
            >
              Github
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
            <img src={Campaign} alt="" />
          </div>
          <h3>Campaign Website</h3>
          <div>
            <small>
              Used React, Used axios get,post,put,delete method of the API to
              get,create,edit and delete the arrays of the API and (Javascript
              Extension) JSX to make app interactive
            </small>
          </div>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/NwanetiUche/campaign"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://campaign-nuf.vercel.app/"
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
          <h3>Food Recipe App</h3>
          <div>
            <small>
              Used React, Made API call to get the food recipes and (Javascript
              Extension) JSX to make app interactive
            </small>
          </div>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/NwanetiUche/FoodApp"
              className="btn"
              target="_blank"
            >
              Github
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
          <h3>Todo App</h3>
          <div>
            <small>
              Used React and (Javascript Extension) JSX to make app interactive
            </small>
          </div>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/NwanetiUche/TodoApp"
              className="btn"
              target="_blank"
            >
              Github
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
          <h3>Maths Tutorial Website</h3>
          <div>
            <small>Used HTML and CSS with no framework</small>
          </div>
          <div className="portfolio_item-cta">
            {" "}
            <a
              href="https://github.com/NwanetiUche/mathstutorial"
              className="btn"
              target="_blank"
            >
              Github
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
