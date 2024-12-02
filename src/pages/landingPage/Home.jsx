import React from 'react';
import { motion } from "framer-motion";
import '../../styles/pages/landingPage/Home.css';
import app from '../../assets/landingPage/app.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container1">
      {/* Text Section */}
      <motion.div
        className="home-text"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30, duration: 2 }} // Slower animation
      >
        <h1>Your concerns, <br />Our promise</h1>
        <p>
          Register and Connect with your local council easily.<br />
          Use our app to send complaints, ask questions, and book services.<br />
          Download our Mobile App now and get involved in your community!
        </p>

        <div className="button-container">
          <Link to="/sabharegister">
            <motion.button
              className="btn1"
              style={{ height: "50px" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </Link>
          <motion.button
            className="btn fill"
            style={{ height: "50px" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download App
          </motion.button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="app"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }} // Slower fade-in with delay
      >
        <img src={app} alt="app" />
      </motion.div>
    </div>
  );
};

export default Home;
