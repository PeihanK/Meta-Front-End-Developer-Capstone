import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "../App.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <img src={Logo} alt="Little Lemon Logo" className="logo" />
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
        <li><Link to="/booking" onClick={toggleMenu}>Reservations</Link></li>
        <li><Link to="/order-online" onClick={toggleMenu}>Order Online</Link></li>
        <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
