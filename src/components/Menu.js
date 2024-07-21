import React from "react";
import recipes from "./recipes";
import "../App.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div
      className="menu-container" id="menu"
    >
      
      <div className="menu-header">
        <h2>This week specials</h2>
        <Link to="/order-online">
          <button aria-label="On Click">Online Menu</button>
        </Link>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <Link to="/underconstruction">
                <button className="order-btn">Order online</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Menu;
