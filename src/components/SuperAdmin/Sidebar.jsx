import React from 'react';
import '../../styles/components/SuperAdmin/Sidebar.css';
import logo from '../../assets/Admin/DarkLogo.png';
import profileImg from '../../assets/Admin/profile-img.jpg';

const SuperAdminSidebar = () => {
  return (
    <aside className="superadmin-sidebar">
      <div className="superadmin-sidebar-header">
        <img src={logo} alt="DarkLogo.png" />
      </div>
      <ul className="superadmin-sidebar-links">
        <h4>
          <div className="superadmin-menu-separator"></div>
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
        <br /><br /><br />
        <br /><br /><br />
        <br /><br />        <br />
        <li>
          <a href="/login">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </li>
      </ul>
      <div className="superadmin-user-account">
        <div className="superadmin-user-profile">
          <img src={profileImg} alt="Profile Image" />
          <div className="superadmin-user-detail">
            <h3>MANOKARARAJAH</h3>
            <span>Super Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SuperAdminSidebar;
