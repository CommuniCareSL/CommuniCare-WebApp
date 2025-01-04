import React, { useState } from 'react';
import Sidebar from '../../components/Health/Sidebar';
import { BarChart, Users, Calendar, MessageSquare, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const stats = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      title: 'Appointments',
      value: '456',
      change: '+5%',
      icon: Calendar,
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      title: 'Complaints',
      value: '89',
      change: '-2%',
      icon: MessageSquare,
      color: 'text-orange-600',
      bg: 'bg-orange-100'
    },
    {
      title: 'Revenue',
      value: '$34,567',
      change: '+8%',
      icon: TrendingUp,
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar onCollapse={(collapsed) => setIsCollapsed(collapsed)} />
      
      {/* Main Content - Adjusts based on sidebar state */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'} pt-16`}>
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
              <p className="text-gray-500 mt-1">Welcome back to your dashboard</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">{stat.title}</span>
                    <div className={`p-2 rounded-lg ${stat.bg}`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <p className={`text-xs mt-1 flex items-center ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                    <span className="ml-1">vs last month</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">New user registered</p>
                        <p className="text-sm text-gray-500">2 minutes ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Add User', 'New Appointment', 'Create Report', 'View Analytics'].map((action) => (
                    <button
                      key={action}
                      className="p-4 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 
                        transition-colors duration-200 text-sm font-medium"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;