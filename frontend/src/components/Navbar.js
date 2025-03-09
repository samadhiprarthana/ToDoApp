import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> ||Todos📝</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/signin" className="btn">Sign In</Link>
        <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
