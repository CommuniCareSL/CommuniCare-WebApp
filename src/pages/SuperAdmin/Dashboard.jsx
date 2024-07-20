// import React from 'react'
import Sidebar from '../../components/SuperAdmin/Sidebar';
import '../../styles/pages/SuperAdmin/Dashboard.css'

// import profileImg from '../../assets/Admin/profile-img.jpg';
// import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Dashboard = () => {
  return (
  <div><Sidebar/>
    <div className="home-content">
      
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Users</div>
            <div className="number">204</div>
           
          </div>
          <i className='bx bx-user'></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Officers</div>
            <div className="number">56</div>
           
          </div>
          <i className='bx bxs-user-detail officer'></i>

        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Pending Complaints</div>
            <div className="number">12</div>
           
          </div>
          <i className='bx bxs-error complaint'></i>

        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Appointments</div>
            <div className="number">25</div>
            
          </div>
          <i className='bx bx-calendar appointment'></i>

        </div>
      </div>


{/* GRAPH */}
      <div className="graph-pie-container">
  <div className="graph-card">
    <div className="main-container-unique">

      <div className="info-unique">
        <p>No of complaints in this week</p>
      </div>

      <div className="year-stats-unique">
        <div className="month-group-unique">
          <div className="bar-unique h-100-unique"></div>
          <p className="month-unique">Mon</p>
        </div>
        <div className="month-group-unique">
          <div className="bar-unique h-50-unique"></div>
          <p className="month-unique">Tue</p>
        </div>
        <div className="month-group-unique">
          <div className="bar-unique h-75-unique"></div>
          <p className="month-unique">Wed</p>
        </div>
        <div className="month-group-unique">
          <div className="bar-unique h-25-unique"></div>
          <p className="month-unique">Thu</p>
        </div>
        <div className="month-group-unique selected-unique">
          <div className="bar-unique h-100-unique"></div>
          <p className="month-unique">Fri</p>
        </div>
        <div className="month-group-unique">
          <div className="bar-unique h-50-unique"></div>
          <p className="month-unique">Sat</p>
        </div>
        <div className="month-group-unique">
          <div className="bar-unique h-75-unique"></div>
          <p className="month-unique">Sun</p>
        </div>
      </div>

    </div>
  </div>

{/* PIE CHART */}
  <div className="pie-chart-card">
    <div className="main-container-unique">

      <div className="info-unique">
        <p>Users by Gender</p>
        <p>Total Users: 204 (Male: 120, Female: 84)</p>
      </div>

      <div className="stats-info-unique">
        <div className="graph-container-unique">
          <div className="percent-unique">
            <svg viewBox="0 0 36 36" className="circular-chart-unique">
              <path className="circle-unique" stroke-dasharray="100, 100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle-unique" stroke-dasharray="55, 100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

    </div></div>
  );
};

export default Dashboard;