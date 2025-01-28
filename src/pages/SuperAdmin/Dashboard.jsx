import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Sidebar from '../../components/SuperAdmin/Sidebar';
import { holidayService } from '../../service/superAdmin/holidayService';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const [holidays, setHolidays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [holidayReason, setHolidayReason] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 17) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    fetchHolidays();
  }, []);

  const fetchHolidays = async () => {
    try {
      const data = await holidayService.getAllHolidays();
      setHolidays(data);
    } catch (error) {
      console.error('Error fetching holidays:', error);
    }
  };

  const cardData = [
    { title: 'Total Users', value: 26, icon: 'person_outline' },
    { title: 'Total Officers', value: 36, icon: 'badge' },
    { title: 'Number of complaints', value: 12, icon: 'warning' },
    { title: 'Number of Appointments', value: 25, icon: 'calendar_month' }
  ];

  const lineChartData = {
    labels: ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan'],
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
    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [{
      label: 'Monthly Complaints',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(54, 162, 235, 0.5)'
    }]
  };

  const isDateDisabled = (date) => {
    const today = new Date();
    const sixDaysFromNow = new Date();
    sixDaysFromNow.setDate(today.getDate() + 6);

    if (date < today) return true;
    if (date <= sixDaysFromNow) return true;

    const day = date.getDay();
    if (day === 0 || day === 6) return true;

    return false;
  };

  const formatDateToString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const isHoliday = (date) => {
    const dateString = formatDateToString(date);
    return holidays.includes(dateString); // Check if the date string exists in the array
  };

  const handleDateClick = (value) => {
    if (isDateDisabled(value) || isHoliday(value)) return; // Disable popup for disabled or already marked holidays
    
    setSelectedDate(value);
    setIsModalOpen(true);
  };

  const handleSaveHoliday = async () => {
    if (!selectedDate || !holidayReason.trim()) return;

    setIsLoading(true);
    try {
      await holidayService.addHoliday(
        formatDateToString(selectedDate),
        holidayReason
      );
      await fetchHolidays();
      setHolidayReason('');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding holiday:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (isDateDisabled(date)) {
        return 'text-gray-400';
      }

      if (isHoliday(date)) {
        return 'bg-red-100 text-red-600 font-bold hover:bg-red-200';
      }
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month' && isHoliday(date)) {
      return (
        <div className="text-xs text-red-400">
          Holiday
        </div>
      );
    }
  };

  return (
    <Sidebar>
      <div className="pt-6 p-6 overflow-y-auto">
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
              tileClassName={tileClassName}
              tileContent={tileContent}
              onClickDay={handleDateClick}
            />
          </div>
        </div>

        {/* Holiday Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96">
              <h3 className="text-lg font-semibold mb-4">Mark as Holiday</h3>
              <p className="mb-4">Selected Date: {selectedDate?.toDateString()}</p>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                placeholder="Enter holiday reason"
                value={holidayReason}
                onChange={(e) => setHolidayReason(e.target.value)}
              />
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                  onClick={() => {
                    setIsModalOpen(false);
                    setHolidayReason('');
                  }}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
                  onClick={handleSaveHoliday}
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Sidebar>
  );
};

export default Dashboard;