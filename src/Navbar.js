// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Groc">Groc</Link></li>

        <li><Link to="/axios">Axios Stuff</Link></li>
        <li><Link to="/button">Button</Link></li>
        <li><Link to="/cars">Cars</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
