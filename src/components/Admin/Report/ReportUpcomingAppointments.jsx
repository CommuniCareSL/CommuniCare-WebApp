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
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
      'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Approval of Building Plans',
        data: [35, 42, 56, 67, 70, 85, 90, 56, 75, 80, 92, 65],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // red
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Approving Land Subdivision and Amalgamation Development Plans',
        data: [45, 55, 60, 75, 60, 80, 85, 60, 68, 72, 77, 62],
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // blue
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Issuance of Certificate of Conformity',
        data: [40, 50, 55, 63, 72, 78, 85, 66, 76, 82, 88, 69],
        backgroundColor: 'rgba(255, 159, 64, 0.6)', // orange
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Obtaining a Trade License',
        data: [30, 40, 55, 70, 65, 80, 92, 74, 84, 90, 85, 74],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // green
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Obtaining an Environmental Compliance Certificate',
        data: [50, 60, 65, 75, 80, 90, 100, 80, 85, 88, 94, 81],
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
