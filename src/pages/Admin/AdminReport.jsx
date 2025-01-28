// import React from 'react'
import Sidebar from '../../components/Admin/Sidebar';

import WaveIcon from '../../assets/Admin/waving-hand.png';

import '../../styles/pages/Admin/Dashboard.css';
import '../../styles/pages/Admin/AdminReport.css';



const Dashboard = () => {
  return (
    <div>
      <Sidebar />
        <div className="admin-dashboard-home-page">

          <div className="welcome-for-admin">
            <h3>Welcome</h3>
            <img src={WaveIcon} alt="Wave" />
          </div>
          
          {/* Complaint summery */}
          <div className='report-main-title'>
            <h4>Summery Of Complaints</h4>
          </div>

          <div className="report-summery-blocks">
            <div className="report-summery-left-block-type1">

            </div>
            <div className="report-summery-right-block-type1">
              
            </div>
          </div>

          {/* Appointment Summery */}
          <div className='report-main-title'>
            <h4>Summery Of Appointments</h4>
          </div>

          <div className="report-summery-blocks">
            
          </div>

          {/* Services Summery */}
          <div className='report-main-title'>
            <h4>Summery Of Services</h4>
          </div>

          <div className="report-summery-blocks">
            
          </div>

        </div>
    </div>
  );
};

export default Dashboard;
