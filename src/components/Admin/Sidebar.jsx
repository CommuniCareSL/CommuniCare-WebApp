// import React from 'react';
import '../../styles/components/Admin/Sidebar.css';
import logo from '../../assets/Admin/DarkLogo.png';
import profileImg from '../../assets/Admin/profile-img.jpg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="DarkLogo.png" />
        {/* <h2>Communi Care</h2> */}
      </div>
      <ul className="sidebar-links">
        <h4>
          {/* <span>Main Menu</span> */}
          <div className="menu-separator"></div>
        </h4>
        <li>
          <a href="/dashboard" onClick={(e) => handleClick(e, '/dashboard')}>
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/Complaints" onClick={(e) => handleClick(e, '/Complaints')}>
            <span className="material-symbols-outlined">report_problem</span>
            Complaints
          </a>
        </li>
        <li>
          <a href="/AdminNewOfficer" onClick={(e) => handleClick(e, '/AdminNewOfficer')}>
          <span class="material-symbols-outlined">groups</span>
            Employee
          </a>
        </li>
        {/* <li>
          <a href="/AdminNewOfficer" onClick={(e) => handleClick(e, '/AdminNewOfficer')}>
            <span class="material-symbols-outlined">person_add</span>
            New Officer
          </a>
        </li>
        <li>
          <a href="/AdminAddContractor" onClick={(e) => handleClick(e, '/AdminAddContractor')}>
          <span class="material-symbols-outlined">group_add</span>
            Add Contractor
          </a>
        </li> */}
        <li>
          <a href="/AdminViewCitizen" onClick={(e) => handleClick(e, '/AdminViewCitizen')}>
          <span class="material-symbols-outlined">diversity_2</span>
            Citizens
          </a>
        </li>
        {/* <li>
          <a href="#">
            <span className="material-symbols-outlined">build</span>
            Services
          </a>
        </li> */}
        
        <li>
          <a href="/AdminReport" onClick={(e) => handleClick(e, '/AdminReport')}>
            <span className="material-symbols-outlined">overview</span>
            Report
          </a>
        </li>
       
        {/* <li>
          <a href="#">
            <span className="material-symbols-outlined">notifications_active</span>
            Notifications
          </a>
        </li> */}
       
        {/* <li>
          <a href="#">
            <span className="material-symbols-outlined">account_circle</span>
            Profile
          </a>
        </li> */}

        {/* <li>
          <a href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </li> */}
        <li>            
          <a href="/login">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </li>
      </ul>
      <div className="user-account">
        <div className="user-profile">
          <img src={profileImg} alt="Profile Image" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
