import React from "react";
import recipes from "./recipes";
import "../App.css";
import recipes_food from "./recipies_food";
import recipes_beverages from "./recipies_beverages";
import { Link } from "react-router-dom";

const OrderOnline = () => {
  return (
    <div
      className="order-container" id="order"
    >
      
      <div className="order-header">
        <h2>This week specials</h2>        
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
        <h2>Food</h2>        
        <div className="cards">
        {recipes_food.map((recipe) => (
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
        <h2>Beverages</h2>        
        <div className="cards">
        {recipes_beverages.map((recipe) => (
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
      
      
    </div>
  );
};

export default OrderOnline;
