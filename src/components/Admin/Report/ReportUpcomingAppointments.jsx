import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportUpcomingAppointments = () => {
  // Define holidays (example: YYYY-MM-DD format)
  const holidays = [
    '2025-01-30', // Example holiday date
    '2025-02-02', // Another example
  ];

  // Function to check if a date is a weekend or holiday
  const isWeekendOrHoliday = (date) => {
    const day = date.getDay(); // Get the day of the week (0 - Sunday, 6 - Saturday)
    const dateString = date.toISOString().split('T')[0]; // Get date in YYYY-MM-DD format
    return day === 0 || day === 6 || holidays.includes(dateString);
  };

  // Function to get the next 5 weekdays (excluding weekends and holidays)
  const getUpcomingWeekdays = () => {
    const today = new Date();
    const upcomingDays = [];
    let dayCounter = 0;

    // Start from tomorrow and check the next 5 weekdays
    while (upcomingDays.length < 5) {
      today.setDate(today.getDate() + 1);
      if (!isWeekendOrHoliday(today)) {
        upcomingDays.push(today.toISOString().split('T')[0]);
      }
    }

    return upcomingDays;
  };

  const upcomingDates = getUpcomingWeekdays();

  const data = {
    labels: upcomingDates, // Using the upcoming weekdays for x-axis labels
    datasets: [
      {
        label: 'Approval of Building Plans',
        data: [35, 42, 56, 67, 70], // Adjust data for each date
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // red
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Approving Land Subdivision and Amalgamation Development Plans',
        data: [45, 55, 60, 75, 60], // Adjust data for each date
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // blue
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Issuance of Certificate of Conformity',
        data: [40, 50, 55, 63, 72], // Adjust data for each date
        backgroundColor: 'rgba(255, 159, 64, 0.6)', // orange
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Obtaining a Trade License',
        data: [30, 40, 55, 70, 65], // Adjust data for each date
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // green
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Obtaining an Environmental Compliance Certificate',
        data: [50, 60, 65, 75, 80], // Adjust data for each date
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // purple
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Upcoming Appointments Report',
      },
    },
  };

  return (
    <div className="p-4 w-[90%] h-[90%]">
      <h2 className="text-lg font-semibold mb-4">Report on Upcoming Appointments</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ReportUpcomingAppointments;
