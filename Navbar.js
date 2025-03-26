import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>React Auth</h2>
      <div className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
