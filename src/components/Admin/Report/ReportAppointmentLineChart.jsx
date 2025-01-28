import React, { useEffect, useRef } from 'react';
import { Chart, Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, Tooltip, Legend, Title, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, Tooltip, Legend, Title, CategoryScale, LinearScale, PointElement);

const ReportAppointmentLineChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Completed Appointment',
        data: [30, 50, 40, 60, 70], // Example data, update as needed
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.5)',
      },
      {
        label: 'Cancel Appointment',
        data: [10, 15, 12, 8, 20], // Example data, update as needed
        borderColor: '#F44336',
        backgroundColor: 'rgba(244, 67, 54, 0.5)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Weekly Appointment Trends',
      }
    }
  };

  return (
    <div className="w-[90%] h-[70%]">
      <h2 className="text-lg font-semibold">Last Week Appointment final Status</h2>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ReportAppointmentLineChart;
