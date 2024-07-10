// rafc
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";


const App = () => {
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

export default App;
