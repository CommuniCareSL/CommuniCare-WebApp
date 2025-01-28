import React, { useEffect, useRef } from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ReportAppointmentDoughnutChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: [
      'Approval of Building Plans',
      'Approving Land Subdivision and Amalgamation Development Plans',
      'Issuance of Certificate of Conformity',
      'Obtaining a Trade License',
      'Obtaining an Environmental Compliance Certificate'
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: [20, 30, 25, 15, 10], // Example data, update as needed
        backgroundColor: ['#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB'],
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          generateLabels: (chart) => {
            return chart.data.labels.map((label, index) => ({
              text: label.split('\n'),
              fillStyle: chart.data.datasets[0].backgroundColor[index],
              hidden: false,
              index: index
            }));
          }
        }
      },
      title: {
        display: true,
        text: 'Last Week Appointments',
        font: {
          size: 18,
          weight: 'bold'
        }
      }
    }
  };

  return (
    <div className="w-[95%] h-[95%]">
        <Doughnut ref={chartRef} data={data} options={options}  className="w-full h-full" style={{ width: '290px', height: '290px' }}/>
    </div>
  );
};

export default ReportAppointmentDoughnutChart;
