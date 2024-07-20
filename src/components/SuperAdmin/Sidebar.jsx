// import React from 'react';
import '../../styles/components/SuperAdmin/Sidebar.css';
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
          <a href="/SuperAdminDashboard">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
        </li>
       
        <li>
          <a href="/NewRegistration">
            <span className="material-symbols-outlined">person_add</span>
            New Registration
          </a>
        </li>
        
        <li>
          <a href="/Registered">
            <span className="material-symbols-outlined">verified_user</span>
            Registered
          </a>
        </li>

        <li>
          <a href="/Report">
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
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br />
        <li>            
          <a href="#">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </li>
      </ul>
      <div className="user-account">
        <div className="user-profile">
          <img src={profileImg} alt="Profile Image" />
          <div className="user-detail">
            <h3>MANOKARARAJAH</h3>
            <span>Super Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
