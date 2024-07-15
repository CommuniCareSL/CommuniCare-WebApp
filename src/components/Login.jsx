import React from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

import profileImg from "../assets/x.png";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={profileImg} alt="Login" />
      </div>

      <div className="login-form">
        <div className="text">LOGIN</div>
        <form>
          <div className="field">
            <input type="text" placeholder="Email" />
          </div>
          <div className="field">
            <input type="password" placeholder="Password" />
          </div>
          <button onClick={() => { navigate("/");}}>LOGIN</button>
          <div className="link">
            <a href="#">Forgot Password?</a> <br />
            <br />
            <span>Not a member? </span>
            <a href="#">Signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
