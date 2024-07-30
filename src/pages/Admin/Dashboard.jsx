// import React from 'react'
import Sidebar from '../../components/Admin/Sidebar';
import CardSlider from '../../components/Admin/CardSlider';
import DoughnutChart from '../../components/Admin/DoughnutChart';
import CounterCard from '../../components/Admin/CounterCard';
import AbsentOfficertable from '../../components/Admin/AbsentOfficertable';
import Calendar from 'react-calendar';

import WaveIcon from '../../assets/Admin/waving-hand.png';

import '../../styles/pages/Admin/Dashboard.css';
import '../../styles/components/Admin/CardSlider.css';
import '../../styles/components/Admin/TableView.css';
import 'react-calendar/dist/Calendar.css';


const Dashboard = () => {
  return (
    <div>
      <Sidebar />
        <div className="admin-dashboard-home-page">

          <div className="welcome-for-admin">
            <h3>Welcome Admin 1</h3>
            <img src={WaveIcon} alt="Wave" />
          </div>

          {/* cardslider to show the progress of services */}
          <CardSlider />
          
          <div className="admin-dashboard-appointment-complaint-summery">

            <div className="admin-dashboard-appointment-summery">
              <div className="admin-dashboard-leave-absent-approved">
                <AbsentOfficertable />
              </div>
              <div className="admin-dashboard-calender">
                <h3 style={{fontWeight: '800'}}>Calender</h3>
                <br />
                <Calendar/>
              </div>
            </div>

            <div className="admin-dashboard-complaint-registeroffices-summery">

              {/* this will show complaint doughnut char as Unseen, inprogress and Completed */}
              <div className="admin-dashboard-complaint-summery">
                <h4 style={{fontWeight: '800'}}>Status of Recived Complaints</h4>
                <DoughnutChart />
              </div>

              {/* this will show the number of citizens register to the system*/}
              <div className="admin-dashboard-registeroffices">
                <h3>Number of registered Citizen</h3>
                <CounterCard />
              </div>
              
            </div>
            
          </div>

        </div>
      
    </div>
  );
};

export default Dashboard;
