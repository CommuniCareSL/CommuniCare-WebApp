import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing";

import Login from "./pages/Login"
import Signup from './pages/Signup';
import Sabha from './pages/PradesiyaSabhaReg'

import Dashboard from "./pages/Admin/Dashboard";
import Complaints from "./pages/Admin/Complaints";
import AdminNewOfficer from "./pages/Admin/AdminNewOfficer";
import AdminUnseenComplaintDetails from "./pages/Admin/AdminUnseenComplaintDetails";
import AdminInprogressComplainDetails from "./pages/Admin/AdminInprogressComplainDetails";
import AdminCompletedComplainDetails from "./pages/Admin/AdminCompletedComplainDetails";
import AdminAddedOfficersDetails from "./pages/Admin/AdminAddedOfficersDetails";
import AdminAddContractor from "./pages/Admin/AdminAddContractor";
import AdminAddedContractorDetails from "./pages/Admin/AdminAddedContractorDetails";
import AdminViewCitizen from "./pages/Admin/AdminViewCitizen";
import AdminViewCitizenDetailed from "./pages/Admin/AdminViewCitizenDetailed";
import AdminViewBlockedCitizenDetails from "./pages/Admin/AdminViewBlockedCitizenDetails";



import Dashboard_Officer from "./pages/Civil Officer/Dashboard";
import Calendar_Officer from "./pages/Civil Officer/calendar_schedule";
import Appointment_Officer from "./pages/Civil Officer/appointments";
import Requests_Officer from "./pages/Civil Officer/Service_requests";
import Documents_Officer from "./pages/Civil Officer/Citizen_documents";
import ServiceDetails from "./pages/Civil Officer/Service_details";
import NewAppointment from "./pages/Civil Officer/New_appointment";

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
        <Route path="/AdminInprogressComplainDetails" element={<AdminInprogressComplainDetails />} />
        <Route path="/AdminCompletedComplainDetails" element={<AdminCompletedComplainDetails />} />
        <Route path="/AdminAddedOfficersDetails" element={<AdminAddedOfficersDetails />} />
        <Route path="/AdminAddContractor" element={<AdminAddContractor />} />
        <Route path="/AdminAddedContractorDetails" element={<AdminAddedContractorDetails />} />
        <Route path="/AdminViewCitizen" element={<AdminViewCitizen />} />
        <Route path="/AdminViewCitizenDetailed" element={<AdminViewCitizenDetailed />} />
        <Route path="/AdminViewBlockedCitizenDetails" element={<AdminViewBlockedCitizenDetails />} />


        <Route path="/dashboard_Officer" element={<Dashboard_Officer />} />
        <Route path="/calendar_Officer" element={<Calendar_Officer />} />
        <Route path="/appointment_Officer" element={<Appointment_Officer />} />
        <Route path="/requests_Officer" element={<Requests_Officer />} />
        <Route path="/document_Officer" element={<Documents_Officer />} />
        <Route path="/details/:serviceName" element={<ServiceDetails />} />
        <Route path="/new_appointment" element={<NewAppointment />} />


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
