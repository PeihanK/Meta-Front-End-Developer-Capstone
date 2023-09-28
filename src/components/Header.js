import React from "react";
import banner from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>

          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-image">
          <img src={banner} alt=""></img>
        </div>
      </section>
    </header>
  );
};
export default Header;
