import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import Calendar from 'react-calendar';
import DoughnutChart from '../../components/Admin/DoughnutChart';
import 'react-calendar/dist/Calendar.css';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

const AdminReport = () => {
    const [date, setDate] = useState(new Date());
    const [greeting, setGreeting] = useState('');
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  
    useEffect(() => {
      const hour = new Date().getHours();
      if (hour < 11) setGreeting('Good morning Admin');
      else if (hour < 13) setGreeting('Good afternoon Admin');
      else if (hour < 17) setGreeting('Good evening Admin');
      else setGreeting('Good night Admin');
    }, []);
  
    const cardData = [
      { title: 'Total Users', value: 12, icon: 'bx bx-user' },
      { title: 'Total Officers', value: 5, icon: 'bx bxs-user-detail' },
      { title: 'Number of complaints', value: 12, icon: 'bx bxs-error' },
    ];
  
    const lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Users',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 2],
        borderColor: '#0991FF',
        tension: 0.1
      }]
    };
  
    const pieChartData = {
      labels: ['Male', 'Female'],
      datasets: [{
        data: [120, 84],
        backgroundColor: ['rgba(54, 162, 235, 0.9)', 'rgba(54, 162, 235, 0.5)'],
      }]
    };
  
    const barChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Monthly Complaints',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 2],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }]
    };
  
    return (
  <div>
  <Sidebar/>
  <div className='admin-table-home-page'>
        
  
        <div className={`flex bg-gray-100 min-h-screen transition-all ${isSidebarHovered ? 'ml-64' : 'ml-16'}`}>
          <div className="flex-1 p-4 lg:p-10 min-h-screen">
            <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-6 ml-4 sm:ml-16">{greeting}!</h1>
  
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
                    {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4 lg:p-6 flex items-center justify-between"
                    >
                        <div>
                        <h2 className="text-base lg:text-lg font-semibold text-gray-700">{card.title}</h2>
                        <p className="text-2xl lg:text-3xl font-bold text-blue-500">{card.value}</p>
                        </div>
                        <i className={`${card.icon} text-3xl lg:text-4xl text-blue-400`}></i>
                    </div>
                    ))}
                </div>
            </div>
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
              <div className="6bg-white rounded-lg shadow-md p-4 lg:p-6 flex flex-col items-center">
                <h2 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">Users Registration by Month</h2>
                <div className="h-64">
                  <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
              </div>
  
              <div className="bg-white rounded-lg shadow-md p-4 lg:p-6 flex flex-col items-center">
                <h2 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">Complaints</h2>
                <div className="flex items-center justify-center h-96 w-full">
                  <DoughnutChart />
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
                  tileClassName="text-black-600 hover:bg-blue-100"
                  navigationLabel={({ date }) => <span className="text-blue-600">{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    );
}

export default AdminReport
