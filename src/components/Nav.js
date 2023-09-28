import React from "react";
import logo from "../images/logo.png";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt=""></img>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">ABOUT</a>
        </li>
        <li>
          <a href="/">MENU</a>
        </li>
        <li>
          <a href="/">RESERVATIONS</a>
        </li>
        <li>
          <a href="/">ORDER ONLINE</a>
        </li>
        <li>
          <a href="/">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
