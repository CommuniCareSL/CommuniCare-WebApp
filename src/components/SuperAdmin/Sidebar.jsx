import React from 'react';
import '../../styles/components/SuperAdmin/Sidebar.css';
import logo from '../../assets/SuperAdmin/DarkLogo.png';
import profileImg from '../../assets/SuperAdmin/profile-img.jpg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="DarkLogo.png" />
      </div>
      <ul className="sidebar-links">
        <h4>
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
            <span className="material-symbols-outlined">assessment</span>
            Report
          </a>
        </li>

        {/* Add more menu items here as needed */}

        <li className="logout-item">
          <a href="/login">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </li>
      </ul>
      <div className="user-account">
        <div className="user-profile">
          <img src={profileImg} alt="Profile" style={{ marginRight: '20px' }} />
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
