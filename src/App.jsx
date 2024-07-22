import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing";

import Login from "./pages/Login"
import Signup from './pages/Signup'
import Dashboard from "./pages/Admin/Dashboard"
import Dashboard_Officer from "./pages/Civil Officer/Dashboard";

import SuperAdminDashboard from "./pages/SuperAdmin/Dashboard"
// import b, {Newregistration, a} from "./pages/SuperAdmin/NewRegistration"
import {Newregistration} from "./pages/SuperAdmin/NewRegistration"
import Registered from "./pages/SuperAdmin/Registered"
import Report from "./pages/SuperAdmin/Report"

// a();
// b();
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard_Officer" element={<Dashboard_Officer />} />

        <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard />} />
        {/* <Route path="/NewRegistration" element={Newregistration} /> */}
        <Route path="/NewRegistration" element={<Newregistration />} />
        <Route path="/Registered" element={<Registered />} />
        <Route path="/Report" element={<Report />} />
        
      </Routes>
    </Router>
  );
};

export default App;
