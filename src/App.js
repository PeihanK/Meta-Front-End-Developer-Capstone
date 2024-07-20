import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./components/About";
import ParentComponent from "./components/Main"; // Импортируем ParentComponent
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<ParentComponent />} /> {/* Используем ParentComponent */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
