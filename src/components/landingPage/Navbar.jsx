import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/landingPage/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-md" style={{height:'80px'}}>
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-32" />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <a href="#home" className="text-black hover:text-blue-500 relative group">
              HOME
              <span className="block h-[2px] w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#about" className="text-black hover:text-blue-500 relative group">
              ABOUT
              <span className="block h-[2px] w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#features" className="text-black hover:text-blue-500 relative group">
              FEATURES
              <span className="block h-[2px] w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-blue-500 relative group">
              CONTACT
              <span className="block h-[2px] w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></span>
            </a>
          </li>
        </ul>

        {/* Button */}
        <div className="ml-4 hidden md:block">
          <Link to="/login">
            <button className="px-4 py-2 border-[2px] border-[#0991FF] text-[#0991FF] rounded-md hover:bg-[#0991FF] hover:text-white transition-all">
              LOGIN
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-sm font-medium">
            <li>
              <a href="#home" className="text-black hover:text-blue-500">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="text-black hover:text-blue-500">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#features" className="text-black hover:text-blue-500">
                FEATURES
              </a>
            </li>
            <li>
              <a href="#contact" className="text-black hover:text-blue-500">
                CONTACT
              </a>
            </li>
            <li>
              <Link to="/login">
                <button className="px-4 py-2 border-[2px] border-[#0991FF] text-[#0991FF] rounded-md hover:bg-[#0991FF] hover:text-white transition-all">
                  LOGIN
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
