import React from "react";
import banner_uc from "../images/underconstruction.png";
import { Link } from "react-router-dom";
import "../App.css";

const Underconstruction = () => {
  return (
    <header className="underconstruction">
      <section id="underconstruction">
        <div className="banner-uc">
          <h2>Sorry, we're working on it</h2>
        </div>
        <div className="banner-uc-image">
          <img src={banner_uc} alt="Underconstruction" />
        </div>
        <Link to="/">
            <button aria-label="On Click">Go to Homepage</button>
          </Link>
      </section>
    </header>
  );
};

export default Underconstruction;
