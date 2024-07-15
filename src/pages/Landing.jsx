// import React from "react";
import Navbar from "../components/landingPage/Navbar";
import Footer from "../components/landingPage/Footer";
import Home from "./landingPage/Home";
import About from "./landingPage/About";
import Features from "./landingPage/Features";
import Contact from "./landingPage/Contact";


const Landing = () => {
  return (
    <div>
      <Navbar />
      <div id="home" >
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact" >
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
