import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { RiDashboardFill, RiCalendar2Line, RiServiceLine, RiBarChart2Fill, 
         RiProfileLine, RiLogoutBoxLine, RiFileList2Line, RiMenu2Fill } from 'react-icons/ri';
import { FaRegCommentAlt } from 'react-icons/fa';
import darkLogo from "../../assets/SuperAdmin/DarkLogo.png";
import profileImg from "../../assets/SuperAdmin/profile-img.jpg";
import { clearStoredData } from "../../hooks/localStorage";

const Menus = [
  { title: 'Home', icon: <RiDashboardFill />, path: '/WorkAndPlanDashboard' },
  { title: 'Complaints', icon: <FaRegCommentAlt />, path: '/WorkAndPlanComplaint' },
  { title: 'Appointments', icon: <RiFileList2Line />, path: '/appointment_Officer' },
  { title: 'Service Requests', icon: <RiServiceLine />, path: '/requests_Officer' },
  { title: 'Documents', icon: <RiBarChart2Fill />, path: '/document_Officer' },
  { title: 'Profile', icon: <RiProfileLine />, path: '/dashboard_Officer', spacing: true },
  { title: 'Logout', icon: <RiLogoutBoxLine />, path: '/login' },
];

const Sidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate hook

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent default behavior
    clearStoredData(); // Clear stored data from localStorage
    navigate("/login"); // Redirect user to login page
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen bg-black 
        transition-all duration-300 ease-in-out z-50
        ${sidebarOpen ? 'w-64' : 'w-20'} 
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0`}>
        
        {/* Sidebar toggle button */}
        <button 
          className="absolute -right-3 top-9 hidden lg:block"
          onClick={toggleSidebar}
        >
          <BsArrowLeftShort 
            className={`text-2xl bg-white rounded-full 
              transition-transform duration-300
              ${!sidebarOpen && 'rotate-180'}`}
          />
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center p-4">
          <img 
            src={darkLogo} 
            alt="logo" 
            className={`transition-all duration-300 ${sidebarOpen ? 'w-32' : 'w-12'}`} 
          />
        </div>

        {/* Search */}
        <div className="px-4 py-2">
          <div className="relative">
            <BsSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="search"
              placeholder="Search"
              className={`w-full rounded-md bg-gray-700 py-2 pl-10 pr-4 
                text-white placeholder-gray-400
                ${!sidebarOpen && 'hidden'}`}
            />
          </div>
        </div>

        {/* Menu Items */}
        <ul className="pt-2">
          {Menus.map((menu, index) => {
            const isActive = location.pathname === menu.path;
            return (
              <li
                key={index}
                className={`relative text-gray-300 text-sm flex items-center
                  cursor-pointer transition-colors duration-150
                  ${menu.spacing ? 'mt-8' : 'mt-2'}
                  ${isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
              >
                <Link 
                  to={menu.path} 
                  className="flex items-center w-full p-4 gap-4"
                  onClick={(e) => {
                    if (menu.title === 'Logout') {
                      handleLogout(e); // Trigger logout if 'Logout' is clicked
                    } else {
                      setMobileMenuOpen(false); // Close mobile menu for other links
                    }
                  }}
                >
                  <span className={`text-xl ${isActive && 'text-blue-500'}`}>
                    {menu.icon}
                  </span>
                  <span className={`text-base font-medium duration-200
                    ${!sidebarOpen && 'hidden'} 
                    ${isActive && 'text-blue-500'}`}>
                    {menu.title}
                  </span>
                  {isActive && (
                    <div className="absolute left-0 top-0 w-1 h-full bg-blue-500" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main Content Area with Navbar */}
      <div className={`flex-1 transition-all duration-300
        ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}
        ${mobileMenuOpen ? 'ml-0' : 'ml-0'}`}>
        
        {/* Navbar */}
        <div className="sticky top-0 bg-black shadow-md h-16 z-40">
          <div className="flex justify-between items-center h-full px-4">
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-gray-600 hover:text-gray-800"
              onClick={toggleMobileMenu}
            >
              <RiMenu2Fill className="text-2xl" />
            </button>

            {/* Right side profile section */}
            <div className="flex items-center gap-3 ml-auto">
              <div className="hidden md:block text-right">
                <h3 className="text-sm font-semibold text-gray-800">John Doe</h3>
                <p className="text-xs text-gray-600">Civil Officer</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img src={profileImg} alt="profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4">
          {children}
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
