import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing";

import Login from "./pages/Login"
import Signup from './pages/Signup';
import Sabha from './pages/PradesiyaSabhaReg'

import Dashboard from "./pages/Admin/Dashboard";
import Complaints from "./pages/Admin/Complaints";
import AdminNewOfficer from "./pages/Admin/AdminNewOfficer";
import AdminUnseenComplaintDetails from "./pages/Admin/AdminUnseenComplaintDetails";

import Dashboard_Officer from "./pages/Civil Officer/Dashboard";
import Calendar_Officer from "./pages/Civil Officer/calendar_schedule";
import Appointment_Officer from "./pages/Civil Officer/appointments";
import Requests_Officer from "./pages/Civil Officer/Service_requests";
// import Analytics_Officer from "./pages/Civil Officer/Appointment_today"

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
        <Route path="/sabharegister" element={<Sabha />} />

        {/* admin */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Complaints" element={<Complaints />} />
        <Route path="/AdminNewOfficer" element={<AdminNewOfficer />} />
        <Route path="/AdminUnseenComplaintDetails" element={<AdminUnseenComplaintDetails />} />


        <Route path="/dashboard_Officer" element={<Dashboard_Officer />} />
        <Route path="/calendar_Officer" element={<Calendar_Officer />} />
        <Route path="/appointment_Officer" element={<Appointment_Officer />} />
        <Route path="/requests_Officer" element={<Requests_Officer />} />
        {/* <Route path="/analytics_Officer" element={<Analytics_Officer />} /> */}

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
