import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "DigitalFortuneCookie",
    languages: "jsx, css, js",
    packages: "apollo-server-express, bcrypt, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently",
    image: "/img/digitalfortunecookie.png",
    description: "Allows you to have a random generator",
    repo: "https://github.com/alesofia9/Project-1.git",
    live: "https://alesofia9.github.io/Project-1/",
  },
  {
    id: 1,
    title: "BrawlGamenight",
    languages: "html, handlebars, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/brawlgamenight.png",
    description: "Allows you to choose and add your favorite bral character.",
    repo: "https://github.com/Jo3yG/BRAWL_GAMENIGHT.git",
    live: "https://brawl-gamenight-ed212d2e387e.herokuapp.com/",
  },
  {
    id: 2,
    title: "WorkScheduler",
    languages: "html, css, js, handlebars",
    packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, puppeteer, sequelize",
    image: "/img/scheduler.png",
    description: "Able to help with creating a schedule",
    live: "https://github.com/Jo3yG/Challenge05.git",
    repo: "https://jo3yg.github.io/Challenge05/",
  },
  {
    id: 3,
    title: "passwordgenerator",
    languages: "html, css, js",
    image: "/img/passwordgenerator.png",
    packages: "none",
    description: "Helps you create a random password.",
    repo: "https://github.com/Jo3yG/Challenge03.git",
    live: "https://jo3yg.github.io/Challenge03/",
  },
  {
    id: 4,
    title: "Note Taker App",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
    image: "/img/notetaker.png",
    description: "Write extensive notes and keep track.",
    repo: "https://github.com/Jo3yG/Express.js-Challenge-Note-Taker.git",
  },
  {
    id: 5,
    title: "Basic Portfolio",
    languages: "html, css",
    packages: "none",
    image: "/img/portfolio.png",
    description: "A basic work portfolio that holds my projects.",
    repo: "https://github.com/Jo3yG/Challenge02.git",
    live: "https://jo3yg.github.io/Challenge02/",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/weather.png",
    description: "A basic app that allows you to see the weather.",
    repo: "https://github.com/Jo3yG/Challenge06.git",
    live: "https://jo3yg.github.io/Challenge06/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
