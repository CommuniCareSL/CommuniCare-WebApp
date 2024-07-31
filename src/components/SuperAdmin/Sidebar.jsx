// Sidebar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Admin/DarkLogo.png';
import profileImg from '../../assets/Admin/profile-img.jpg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsOpen(false);
        setIsMinimized(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-[#130E2A] text-white rounded-md lg:hidden"
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <aside 
        className={`bg-[#130E2A] text-white h-screen fixed top-0 left-0 z-40 transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          ${isMinimized ? 'w-20' : 'w-64'}
          lg:translate-x-0`}
      >
        <div className="p-4 flex justify-between items-center">
          <img src={logo} alt="DarkLogo.png" className={`transition-all duration-300 ${isMinimized ? 'w-10 h-10' : 'w-3/4'}`} />
          <button
            onClick={toggleMinimize}
            className="p-1 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            {isMinimized ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
              </svg>
            )}
          </button>
        </div>

        <nav className="mt-6">
          <SidebarLink href="/SuperAdminDashboard" icon="dashboard" isMinimized={isMinimized} isActive={location.pathname === '/SuperAdminDashboard'}>Dashboard</SidebarLink>
          <SidebarLink href="/NewRegistration" icon="person_add" isMinimized={isMinimized} isActive={location.pathname === '/NewRegistration'}>New Registration</SidebarLink>
          <SidebarLink href="/Registered" icon="verified_user" isMinimized={isMinimized} isActive={location.pathname === '/Registered'}>Registered</SidebarLink>
          <SidebarLink href="/Report" icon="overview" isMinimized={isMinimized} isActive={location.pathname === '/Report'}>Report</SidebarLink>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <SidebarLink href="#" icon="logout" isMinimized={isMinimized} isActive={false}>Logout</SidebarLink>
          <div className={`flex items-center mt-4 ${isMinimized ? 'justify-center' : ''}`}>
            <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full" />
            {!isMinimized && (
              <div className="ml-3">
                <h3 className="font-semibold text-sm">MANOKARARAJAH</h3>
                <span className="text-xs text-gray-400">Super Admin</span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

const SidebarLink = ({ href, icon, children, isMinimized, isActive }) => (
  <Link 
    to={href} 
    className={`flex items-center py-2 px-4 rounded-lg transition-colors duration-200
      ${isActive ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-gray-700'}
      ${isMinimized ? 'justify-center' : ''}`}
  >
    <span className="material-symbols-outlined">{icon}</span>
    {!isMinimized && <span className="ml-3">{children}</span>}
  </Link>
);

export default Sidebar;