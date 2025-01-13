import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Sidebar from '../../components/SuperAdmin/Sidebar';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 17) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const cardData = [
    { title: 'Total Users', value: 204, icon: 'person_outline' },
    { title: 'Total Officers', value: 56, icon: 'badge' },
    { title: 'Number of complaints', value: 12, icon: 'warning' },
    { title: 'Make Appointments', value: 25, icon: 'calendar_month' }
  ];

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Users',
      data: [10, 5, 15, 12, 8, 20, 25, 18, 24, 30, 22, 28],
      borderColor: '#0991FF',
      tension: 0.1
    }]
  };

  const pieChartData = {
    labels: ['Male', 'Female'],
    datasets: [{
      data: [120, 84],
      backgroundColor: ['rgba(54, 162, 235, 0.9)', 'rgba(54, 162, 235, 0.5)']
    }]
  };

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Monthly Complaints',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(54, 162, 235, 0.5)'
    }]
  };

  return (
    <Sidebar>
      <div className="pt-16 p-6 overflow-y-auto">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {cardData.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
              <div>
                <h2 className="text-gray-700 font-semibold">{card.title}</h2>
                <p className="text-3xl font-bold text-blue-500">{card.value}</p>
              </div>
              <span className="material-symbols-outlined text-4xl text-blue-400">
                {card.icon}
              </span>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Users Registration</h2>
            <div className="h-64">
              <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Users by Gender</h2>
            <div className="h-64">
              <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Complaints</h2>
            <div className="h-64">
              <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Calendar</h2>
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full border-none"
              tileClassName="text-black hover:bg-blue-100"
            />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;