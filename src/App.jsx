import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing";

import Login from "./pages/Login"
import Signup from './pages/Signup'
import Dashboard from "./pages/Admin/Dashboard"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
};

export default App;
