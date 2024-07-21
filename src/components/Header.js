import React from "react";
import banner from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <section id="home">
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-image">
          <img src={banner} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
