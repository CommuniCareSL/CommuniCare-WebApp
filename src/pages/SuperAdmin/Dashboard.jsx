// Dashboard.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/SuperAdmin/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const cardData = [
    { title: 'Total Users', value: 204, icon: 'bx bx-user' },
    { title: 'Total Officers', value: 56, icon: 'bx bxs-user-detail' },
    { title: 'Pending Complaints', value: 12, icon: 'bx bxs-error' },
    { title: 'Appointments', value: 25, icon: 'bx bx-calendar' },
  ];

  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Complaints',
      data: [12, 19, 3, 5, 2, 3, 7],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const pieChartData = {
    labels: ['Male', 'Female'],
    datasets: [{
      data: [120, 84],
      backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)'],
    }]
  };

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Monthly Complaints',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 lg:p-10 lg:ml-64"> {/* Adjust left margin for sidebar */}
        <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-6">{greeting}, Admin!</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
          {cardData.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 lg:p-6 flex items-center justify-between">
              <div>
                <h2 className="text-base lg:text-lg font-semibold text-gray-700">{card.title}</h2>
                <p className="text-2xl lg:text-3xl font-bold text-blue-500">{card.value}</p>
              </div>
              <i className={`${card.icon} text-3xl lg:text-4xl text-blue-400`}></i>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">Weekly Complaints</h2>
            <div className="h-64">
              <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">Users by Gender</h2>
            <div className="h-64">
              <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">Monthly Complaints</h2>
            <div className="h-64">
              <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">Calendar</h2>
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full border-none"
              tileClassName="text-blue-600 hover:bg-blue-100"
              navigationLabel={({ date }) => <span className="text-blue-600">{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;