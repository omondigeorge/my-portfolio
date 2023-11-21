import "./Home.css";
import Contact from "./Contact.jsx";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-section">
      <div className="sec-1">
        <h2>
          Hello there<span></span>!
        </h2>
        <h1>
          My name is{" "}
          <span className="name">
            <i>George Omondi</i>
          </span>
        </h1>
        <h4>I am a Front-End Web Developer</h4>
        <p>
          I'm a Frontend Web Developer skilled in HTML, CSS, JavaScript,
          Bootstrap, and React. I design and build user-friendly, responsive web
          interfaces and interactive applications. My focus on clean code and
          the latest technologies ensures a seamless user experience.
        </p>
        <Link to="/contact">
          <button type="button" className="reach-me">
            Contact Me
          </button>
        </Link>
      </div>
      <div className="sec-2">
        <img src="./src/assets/Shire.jpg" alt="George Omondi - Front-End Web Developer" className="src" />
      </div>
    </div>
  );
}

export default Home;