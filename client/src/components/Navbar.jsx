import React from "react";

import "../styles/Navbar.css";

import Logo from "../assets/logo.png";

const Navbar = ({ setSection }) => {
  return (
    <nav className="container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home" className="nav-link">
            HOME
          </a>
        </li>

        <li>
          <a href="#about" className="nav-link">
            ABOUT
          </a>
        </li>

        <li>
          <a href="#features" className="nav-link">
            FEATURES
          </a>
        </li>

        <li>
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
        </li>

        <li>
          <button className="btn fill">LOGIN-COUNCIL</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
