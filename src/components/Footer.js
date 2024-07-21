import React from "react";
import footer from "../images/footer.png";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <div>
          <img
            className="footer-img"
            src={footer}
            alt="Footer Little Lemon"
            width="90"
            height="175"
          />
        </div>
        <div className="footer-links1">
          <ul>
            <h4>Doormat navigation</h4>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-links2">
          <ul>
            <h4>Contact</h4>
            <li>
              <a href="tel:1">Phone number</a>
            </li>
            <li>
              <a href="mailto:address">Address</a>
            </li>
            <li>
              <a href="mailto:3@gmail.com">E-Mail</a>
            </li>
          </ul>
        </div>
        <div className="footer-links3">
          <ul>
            <h4>Social media links</h4>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="mailto:3@gmail.com">E-Mail</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
