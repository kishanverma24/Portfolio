import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <li> Home</li>
      <li>Projects</li>
      <li>Academics</li>
      <li>Contact me</li>
    </div>
  );
};

export default Navbar;
