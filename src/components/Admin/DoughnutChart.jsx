import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const DoughnutChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ['Completed', 'Inprogress', 'Unseen'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
          '#0991ff', 
          '#60a2ff', 
          '#abc6ff' 
        ],
        hoverBackgroundColor: [
          '#0991ff',
          '#60a2ff',
          '#abc6ff' 
        ]
        }
      ]
    };
    const options = {
      cutout: '60%'
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card flex justify-content-center">
      <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
    </div>
  );
}

export default DoughnutChart;
