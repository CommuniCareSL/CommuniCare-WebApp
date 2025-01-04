// Import necessary modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/pages/Login.css";
import profileImg from "../assets/x.png";
import UserService from "../service/UserService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await UserService.login(email, password);
      console.log(userData);

      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem('sabhaId', userData.sabhaId);
        localStorage.setItem('role', userData.role);
        localStorage.setItem('departmentId', userData.departmentId);

        console.log("Sabha ID:", userData.sabhaId);
        console.log("Department ID:", userData.departmentId);

        // Redirect based on user role
        switch (userData.departmentId) {
          case 1:
            navigate("/SuperAdminDashboard");
            break;
          case 2:
            navigate("/dashboard");
            break;
          case 3:
            navigate("/officer_complaint");
            break;
          default:
            navigate("/");
            break;
        }
      } else {
        setError(userData.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-page-home-body">
      <div className="login-container">
        <div className="login-image">
          <img src={profileImg} alt="Login" />
        </div>

        <div className="login-form">
          <div className="text">LOGIN</div>

          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="field">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="field"></div>
            <button type="submit">LOGIN</button>

            <div className="link">
              <a href="#">Forgot Password?</a> <br />
              <br />
              <span>Not a member? </span>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  navigate("/signup"); // Navigate to the Signup page
                }}
              >
                Signup now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
