// import React from 'react'
import Sidebar from '../../components/Admin/Sidebar';
import CardSlider from '../../components/Admin/CardSlider';
import DoughnutChart from '../../components/Admin/DoughnutChart';
import WaveIcon from '../../assets/Admin/waving-hand.png';
import CounterCard from '../../components/Admin/CounterCard';

import '../../styles/pages/Admin/Dashboard.css';
import '../../styles/components/Admin/CardSlider.css';


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
              
            </div>

            <div className="admin-dashboard-complaint-registeroffices-summery">

              {/* this will show complaint doughnut char as Unseen, inprogress and Completed */}
              <div className="admin-dashboard-complaint-summery">
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
