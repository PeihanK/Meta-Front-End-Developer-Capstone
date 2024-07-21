import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "../App.css"


const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="Little Lemon Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
