import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Signup.css";
import profileImg from "../assets/x.png";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signupe-page-body">
      <div className="signup-container">
        <div className="signup-image">
          <img src={profileImg} alt="Signup" />
        </div>

        <div className="signup-form">
          <div className="signup-text">SIGNUP</div>
          <form className="signup-form-container">
            <div className="signup-field">
              <input type="text" placeholder="Username" />
            </div>
            <div className="signup-field">
              <input type="text" placeholder="Email" />
            </div>
            <div className="signup-field">
              <input type="password" placeholder="Password" />
            </div>
            <div className="signup-field">
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button className="signup-button">SIGNUP</button>
            <div className="signup-link">
              <span>Already have an account? </span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  navigate("/login"); // Navigate to the Login page
                }}
              >
                Login now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
