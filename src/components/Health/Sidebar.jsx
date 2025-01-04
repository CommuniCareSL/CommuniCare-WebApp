import React, { useState } from 'react';
import { Menu, X, Home, MessageSquare, Calendar, LogOut, User, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ onCollapse }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  const menuItems = [
    { title: 'Dashboard', icon: Home, path: '/WorkAndPlanDashboard' },
    { title: 'Complaints', icon: MessageSquare, path: '/complaints' },
    { title: 'Services', icon: Home, path: '/services' },
    { title: 'Appointments', icon: Calendar, path: '/appointments' },
  ];

  const handleNavigation = (path) => {
    setActivePath(path);
    // You can add your navigation logic here
  };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b h-16 
        flex items-center justify-between px-4 transition-all duration-300 z-40">
        <div className="flex items-center">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-2 rounded-lg lg:hidden hover:bg-gray-100"
          >
            {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-medium text-gray-700">John Doe</span>
          <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center 
            border hover:bg-gray-50">
            <User size={20} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100%-4rem)] bg-white border-r 
        ${isCollapsed ? 'w-20' : 'w-64'} 
        transition-all duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 shadow-md z-30`}
      >
        {/* Logo Section */}
        <div className="p-4 border-b">
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
            <img
              src="/api/placeholder/48/48"
              alt="Company Logo"
              className="w-12 h-12 rounded-full"
            />
            {!isCollapsed && (
              <span className="font-semibold text-xl text-gray-800">Company</span>
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="mt-6 px-2">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.path);
              }}
              className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} 
                px-4 py-3 rounded-lg mb-2 group relative
                transition-colors duration-200
                ${activePath === item.path 
                  ? 'bg-gray-100 text-gray-800 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <item.icon size={24} className={activePath === item.path ? 'text-gray-800' : 'text-gray-500'} />
              {!isCollapsed && <span>{item.title}</span>}
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full ml-2 p-2 bg-gray-800 text-white text-sm rounded-md 
                  invisible group-hover:visible whitespace-nowrap z-50">
                  {item.title}
                </div>
              )}
            </a>
          ))}
        </nav>

        {/* Collapse Toggle Button */}
        <button
          onClick={() => {
            setIsCollapsed(!isCollapsed);
            onCollapse?.(!isCollapsed);  // Added onCollapse handler
          }}
          className="absolute -right-3 top-20 bg-white text-gray-600 p-1 rounded-full shadow-md 
            hover:bg-gray-50 hidden lg:block border"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        {/* Logout Button */}
        <div className={`absolute bottom-4 w-full px-2 ${isCollapsed ? 'text-center' : ''}`}>
          <button 
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} 
              text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg w-full
              transition-colors duration-200 group relative`}
          >
            <LogOut size={24} />
            {!isCollapsed && <span>Logout</span>}
            
            {/* Tooltip for collapsed state */}
            {isCollapsed && (
              <div className="absolute left-full ml-2 p-2 bg-gray-800 text-white text-sm rounded-md 
                invisible group-hover:visible whitespace-nowrap z-50">
                Logout
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;