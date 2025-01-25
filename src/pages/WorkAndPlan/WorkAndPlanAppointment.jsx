import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../../components/WorkAndPlan/Sidebar';
import { Calendar, CalendarCheck2, CalendarX, CalendarRange} from 'lucide-react';

const stats = [
    {
        title: 'Total Appointments',
        value: '456',
        change: '+5%',
        icon: Calendar,
        color: 'text-green-600',
        bg: 'bg-green-100'
    },
  {
    title: 'Completed Appointments',
    value: '345',
    change: '+12%',
    icon: CalendarCheck2,
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  },
  
  {
    title: 'Ongoing Appointments',
    value: '67',
    change: '+8%',
    icon: CalendarRange,
    color: 'text-purple-600',
    bg: 'bg-purple-100'
  },
  {
    title: 'Canceled Appointments',
    value: '89',
    change: '-2%',
    icon: CalendarX,
    color: 'text-red-600',
    bg: 'bg-red-100'
  }
];

const WorkAndPlanAppointment = () => {
  return (
    <Sidebar>

        <style jsx>{`
            button:hover {
            transform: scale(1.05);
            }
        `}</style>

      {/* Remove duplicate container divs and adjust padding */}
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Appointments Overview</h1>
          <p className="text-gray-500 mt-1">View the appointments made</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">{stat.title}</span>
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              {/* <p className={`text-xs mt-1 flex items-center ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
                <span className="ml-1">vs last month</span>
              </p> */}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity (Smaller Column) */}
            <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
                <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center mr-3">
                        <CalendarCheck2 className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">Complete the Appointment</p>
                        <p className="text-sm text-gray-500">Appointment Category</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Appointment Actions (Larger Column) */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Appointments Actions</h2>
                <div className="grid grid-cols-1 gap-3">
                    {[
                    { label: "Upcoming Appointments", path: "/WorkAndPlanBookedAppointments" },
                    { label: "Today Appointments", path: "/WorkAndPlanTodaysAppointments" },
                    { label: "Ongoing Appointments", path: "/WorkAndPlanOngoingAppointments" },
                    { label: "Completed or Canceled Appointments", path: "/WorkAndPlanCompletedorCanceledAppointments" },
                    ].map(({ label, path }) => (
                    <Link key={path} to={path}>
                        <button
                        className="w-full p-3 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 
                            transition-colors duration-200 text-sm font-medium"
                        >
                        {label}
                        </button>
                    </Link>
                    ))}
                </div>
            </div>
        </div>

      </div>
      
    </Sidebar>
  );
};

export default WorkAndPlanAppointment;
