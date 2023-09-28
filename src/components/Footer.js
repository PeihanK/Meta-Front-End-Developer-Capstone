import React from "react";
import footer from "../images/footer.png";
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
          ></img>
        </div>
        <div className="footer-links1">
          <ul>
            <h4>Doormat navigation</h4>
            <li>
              <a href="home">HOME</a>
            </li>
            <li>
              <a href="about">ABOUT</a>
            </li>
            <li>
              <a href="menu">MENU</a>
            </li>
            <li>
              <a href="reservations">RESERVATIONS</a>
            </li>
            <li>
              <a href="jrder online">ORDER ONLINE</a>
            </li>
            <li>
              <a href="login">LOGIN</a>
            </li>
          </ul>
        </div>
        <div className="footer-links2">
          <ul>
            <h4>Contact</h4>
            <li>
              <a href="1">Phone number</a>
            </li>
            <li>
              <a href="2">Adress</a>
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
