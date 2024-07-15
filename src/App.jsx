import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing";

import Login from "./pages/Login"
import Signup from './pages/Signup'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
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
