import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Sabha from './pages/PradesiyaSabhaReg';

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
import AdminReport from "./pages/Admin/AdminReport";

import OfficerComplaintView from "./pages/Civil Officer/Complaint_view";
import SingleComplaint from './pages/Civil Officer/Single_Complaint_view';

import Dashboard_Officer from "./pages/Civil Officer/Dashboard";
import Calendar_Officer from "./pages/Civil Officer/calendar_schedule";
import Appointment_Officer from "./pages/Civil Officer/appointments";
import Requests_Officer from "./pages/Civil Officer/Service_requests";//getToastPlacement
import Documents_Officer from "./pages/Civil Officer/Citizen_documents";
import ServiceDetails from "./pages/Civil Officer/Service_details";
import NewAppointment from "./pages/Civil Officer/New_appointment";

import SuperAdminDashboard from "./pages/SuperAdmin/Dashboard";
import { Newregistration } from "./pages/SuperAdmin/NewRegistration";
import Registered from "./pages/SuperAdmin/Registered";
import Report from "./pages/SuperAdmin/Report";
import PradeshiyaSabhaDetails from "./pages/SuperAdmin/PradeshiyaSabhaDetails"; // Import the new details page

import WorkAndPlanDashboard from "./pages/WorkAndPlan/Dashboard";
import WorkAndPlanComplaint from "./pages/WorkAndPlan/Complaint";
import ComplaintView from './components/WorkAndPlan/Complaint/ComplaintView';
import WorkAndPlanAppointment from "./pages/WorkAndPlan/WorkAndPlanAppointment";
import WorkAndPlanBookedAppointments from "./pages/WorkAndPlan/WorkAndPlanBookedAppointments";
import WorkAndPlanCompletedorCanceledAppointments from "./pages/WorkAndPlan/WorkAndPlanCompletedorCanceledAppointments";
import WorkAndPlanOngoingAppointments from "./pages/WorkAndPlan/WorkAndPlanOngoingAppointments";
import WorkAndPlanTodaysAppointments from "./pages/WorkAndPlan/WorkAndPlanTodaysAppointments";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sabharegister" element={<Sabha />} />

        {/* 2 Admin Routes */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Complaints" element={<Complaints />} />
        <Route path="/AdminNewOfficer" element={<AdminNewOfficer />} />
        <Route path="/AdminUnseenComplaintDetails" element={<AdminUnseenComplaintDetails />} />
        <Route path="/AdminInprogressComplainDetails" element={<AdminInprogressComplainDetails />} />
        <Route path="/AdminCompletedComplainDetails" element={<AdminCompletedComplainDetails />} />
        <Route path="/AdminAddedOfficersDetails/:employeeId" element={<AdminAddedOfficersDetails />} />
        <Route path="/AdminAddContractor" element={<AdminAddContractor />} />
        <Route path="/AdminAddedContractorDetails" element={<AdminAddedContractorDetails />} />
        <Route path="/AdminViewCitizen" element={<AdminViewCitizen />} />
        <Route path="/AdminViewCitizenDetailed/:userId" element={<AdminViewCitizenDetailed />} />
        <Route path="/AdminViewBlockedCitizenDetails/:userId" element={<AdminViewBlockedCitizenDetails />} />
        <Route path="/AdminReport" element={<AdminReport />} />
        

        <Route path="/officer_complaint" element={<OfficerComplaintView />} />
        {/* <Route path="/Single_complaint/:id" component={SingleComplaint} /> */}
        <Route path="/Single_complaint/:id" element={<SingleComplaint />} />

        <Route path="/officer_complaint" element={<OfficerComplaintView />} />
        {/* <Route path="/Single_complaint/:id" component={SingleComplaint} /> */}
        <Route path="/Single_complaint/:id" element={<SingleComplaint />} />

        
        {/* Officer Routes */}
        <Route path="/dashboard_Officer" element={<Dashboard_Officer />} />
        <Route path="/calendar_Officer" element={<Calendar_Officer />} />
        <Route path="/appointment_Officer" element={<Appointment_Officer />} />
        <Route path="/requests_Officer" element={<Requests_Officer />} />
        <Route path="/document_Officer" element={<Documents_Officer />} />
        <Route path="/details/:serviceName" element={<ServiceDetails />} />
        <Route path="/new_appointment" element={<NewAppointment />} />

        {/* 1 Super Admin Routes */}
        <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard />} />
        <Route path="/NewRegistration" element={<Newregistration />} />
        <Route path="/Registered" element={<Registered />} />
        <Route path="/Report" element={<Report />} />

        {/* Pradeshiya Sabha Details Route */}
        <Route path="/pradeshiya-sabha-details/:index" element={<PradeshiyaSabhaDetails />} /> {/* Add this new route */}

        {/* 3 Health */}

        {/* 4 Account */}

        {/* 5 Work And Plan */}
        <Route path="/WorkAndPlanDashboard" element={<WorkAndPlanDashboard />} />
        <Route path="/WorkAndPlanComplaint" element={<WorkAndPlanComplaint />} />
        <Route path="/ComplaintView/:id" element={<ComplaintView />} />
        <Route path="/WorkAndPlanAppointment" element={<WorkAndPlanAppointment />} />
        <Route path="/WorkAndPlanBookedAppointments" element={<WorkAndPlanBookedAppointments />} />
        <Route path="/WorkAndPlanCompletedorCanceledAppointments" element={<WorkAndPlanCompletedorCanceledAppointments />} />
        <Route path="/WorkAndPlanOngoingAppointments" element={<WorkAndPlanOngoingAppointments />} />
        <Route path="/WorkAndPlanTodaysAppointments" element={<WorkAndPlanTodaysAppointments />} />
        
        {/* 6 Development */}
      </Routes>
    </Router>
  );
};

export default App;
