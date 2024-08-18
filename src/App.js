import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./components/About";
import ParentComponent from "./components/Main";
import OrderOnline from "./components/OrderOnline";
import Underconstruction from "./components/Underconstruction";
import ConfirmedBooking from "./components/ConfirmedBooking";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="page-container">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <div id="home" className="component-wrapper"><Header /></div>
                <div id="menu" className="component-wrapper"><Menu /></div>
                <div id="about" className="component-wrapper"><About /></div>                
                <div className="component-wrapper"><Footer /></div>
              </>
            }
          />
          <Route path="/" element={<div className="component-wrapper"><Header /><Menu /><About /><Footer /></div>} />
          <Route path="/about" element={<div className="component-wrapper"><About /><Footer /></div>} />
          <Route path="/menu" element={<div className="component-wrapper"><OrderOnline /><Footer /></div>} />
          <Route path="/booking" element={<div className="component-wrapper"><ParentComponent /><Footer /></div>} />
          <Route path="/order-online" element={<div className="component-wrapper"><OrderOnline /><Footer /></div>} />
          <Route path="/underconstruction" element={<div className="component-wrapper"><Underconstruction /><Footer /></div>} />
          <Route path="/confirmation" element={<div className="component-wrapper"><ConfirmedBooking /><Footer /></div>} />
          <Route path="/login" element={<div className="component-wrapper"><h2>Login Section</h2><Footer /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
