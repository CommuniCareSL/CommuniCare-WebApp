import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/SuperAdmin/DarkLogo.png";
import profileImg from "../../assets/SuperAdmin/profile-img.jpg";
import { clearStoredData } from "../../hooks/localStorage";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(() => {
    const savedState = localStorage.getItem("sidebarExpanded");
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem("sidebarExpanded", JSON.stringify(isExpanded));
  }, [isExpanded]);

  const handleLogout = (e) => {
    e.preventDefault();
    clearStoredData();
    navigate("/login");
  };

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-black text-white transition-all duration-400 ease-in-out ${
          isExpanded ? "w-64" : "w-20"
        }`}
      >
        {/* Sidebar Header with Logo and Toggle Button */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center justify-center w-full">
            <img
              src={logo}
              alt="DarkLogo.png"
              className={`w-12 h-12 rounded-full ${isExpanded ? "" : "mx-auto"}`}
            />
          </div>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <span className="material-symbols-outlined">
              {isExpanded ? "chevron_left" : "chevron_right"}
            </span>
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="mt-6 flex flex-col h-[calc(100vh-160px)] overflow-y-auto">
          {[
            { path: "/SuperAdminDashboard", icon: "dashboard", label: "Dashboard" },
            { path: "/NewRegistration", icon: "person_add", label: "New Registration" },
            { path: "/Registered", icon: "verified_user", label: "Registered" },
            { path: "/Report", icon: "assessment", label: "Report" },
          ].map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => handleClick(e, item.path)}
                className={`flex items-center p-3 hover:bg-gray-700 ${
                  location.pathname === item.path ? "bg-gray-700" : ""
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {isExpanded && <span className="ml-4">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>

        {/* Logout Button at Bottom */}
        <div className="mt-auto p-4">
          <a
            href="/login"
            onClick={handleLogout}
            className="flex items-center p-3 hover:bg-gray-700"
          >
            <span className="material-symbols-outlined">logout</span>
            {isExpanded && <span className="ml-4">Logout</span>}
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-black shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center">
            <span className="text-sm mr-4">Welcome, Super Admin</span>
            <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;