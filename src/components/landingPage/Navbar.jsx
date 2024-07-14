import React from "react";
import "../../styles/landingPage/Navbar.css";
import Logo from "../../assets/landingPage/logo.png";

import { Link } from 'react-router-dom'

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
        {/* <li style={{marginRight:'0px',marginLeft:'40px'}}> */}
        <Link to="/login">
          <button className="btn1">LOGIN</button>
        </Link>
        </li>

        {/* <li style={{marginLeft:'10px'}}> */}
        <li style={{marginLeft:'10px'}}>
        <Link to="/signup">
          <button className="btn fill">SIGNUP</button>
        </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
