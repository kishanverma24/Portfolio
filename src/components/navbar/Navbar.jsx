import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <li>
        <Link className="navblink" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="navblink" to={"/projects"}>
          Projects
        </Link>
      </li>
      <li>
        <Link className="navblink" to={"/academics"}>
          Academics
        </Link>
      </li>
      <li>
        <Link className="navblink" to={"/contact"}>
          Contact me
        </Link>
      </li>
    </div>
  );
};
export default Navbar;
