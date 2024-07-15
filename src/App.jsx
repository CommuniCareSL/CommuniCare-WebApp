// rafc
import React from "react";
import Navbar from "./components/landingPage/Navbar";
import Footer from "./components/landingPage/Footer";
import Home from "./pages/landingPage/Home";
import About from "./pages/landingPage/About";
import Features from "./pages/landingPage/Features";
import Contact from "./pages/landingPage/Contact";

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
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
}

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <div id="home" >
//         <Home />
//       </div>
//       <div id="about">
//         <About />
//       </div>
//       <div id="features">
//         <Features />
//       </div>
//       <div id="contact" >
//         <Contact />
//       </div>
//       <Footer />
//     </div>
//   );
// };

export default App;
