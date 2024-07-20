// import React from 'react'
import Sidebar from '../../components/Admin/Sidebar';
import CardSlider from '../../components/Admin/CardSlider';

import '../../styles/pages/Admin/Dashboard.css';
import '../../styles/pages/Admin/CardSlider.css';
// import profileImg from '../../assets/Admin/profile-img.jpg';
// import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Dashboard = () => {
  return (
    <div>
   
      <Sidebar />
      <div className="admin-dashboard-home-page">
        <CardSlider />
      </div>
      
   
    </div>
  );
};

export default Dashboard;







{/* <div className="home-content">
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





      <div className="transfers">
        <div className="transfer">
          <div className="transfer-logo">
            <img src="https://assets.codepen.io/285131/apple.svg" alt="Apple Inc." />
          </div>
          <dl className="transfer-details">
            <div>
              <dt>Apple Inc.</dt>
              <dd>Apple ID Payment</dd>
            </div>
            <div>
              <dt>4012</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>28 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div className="transfer-number">
            - $ 550
          </div>
        </div>

        <div className="transfer">
          <div className="transfer-logo">
            <img src="https://assets.codepen.io/285131/pinterest.svg" alt="Pinterest" />
          </div>
          <dl className="transfer-details">
            <div>
              <dt>Pinterest</dt>
              <dd>2 year subscription</dd>
            </div>
            <div>
              <dt>5214</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>26 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div className="transfer-number">
            - $ 120
          </div>
        </div>

        <div className="transfer">
          <div className="transfer-logo">
            <img src="https://assets.codepen.io/285131/warner-bros.svg" alt="Warner Bros." />
          </div>
          <dl className="transfer-details">
            <div>
              <dt>Warner Bros.</dt>
              <dd>Cinema</dd>
            </div>
            <div>
              <dt>2228</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>22 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div className="transfer-number">
            - $ 70
          </div>
        </div>

        <div className="transfer">
          <div className="transfer-logo">
            <img src="https://assets.codepen.io/285131/warner-bros.svg" alt="Warner Bros." />
          </div>
          <dl className="transfer-details">
            <div>
              <dt>Warner Bros.</dt>
              <dd>Cinema</dd>
            </div>
            <div>
              <dt>2228</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>22 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div className="transfer-number">
            - $ 70
          </div>
        </div>

        <div className="transfer">
          <div className="transfer-logo">
            <img src="https://assets.codepen.io/285131/warner-bros.svg" alt="Warner Bros." />
          </div>
          <dl className="transfer-details">
            <div>
              <dt>Warner Bros.</dt>
              <dd>Cinema</dd>
            </div>
            <div>
              <dt>2228</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>22 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div className="transfer-number">
            - $ 70
          </div>
        </div>
        
        <div className="transfer">
          <div className="transfer-logo">
            <img src="https://assets.codepen.io/285131/netflix.svg" alt="Netflix" />
          </div>
          <dl className="transfer-details">
            <div>
              <dt>Netflix</dt>
              <dd>Monthly Subscription</dd>
            </div>
            <div>
              <dt>7890</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>20 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div className="transfer-number">
            - $ 15
          </div>
        </div>
      </div>
    </div> */}