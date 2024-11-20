import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import '../../styles/pages/SuperAdmin/Report.css';
import Sidebar from '../../components/SuperAdmin/Sidebar';

const Report = () => {
  useEffect(() => {
    const usersChartCtx = document.getElementById('usersChart').getContext('2d');
    const complaintsChartCtx = document.getElementById('complaintsChart').getContext('2d');
    const genderChartCtx = document.getElementById('genderChart').getContext('2d');
    const categoryChartCtx = document.getElementById('categoryChart').getContext('2d');

    const usersChart = new Chart(usersChartCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Users Registration by Month',
          data: [10, 5, 15, 12, 8, 20, 25, 18, 24, 30, 22, 28],
          borderColor: 'rgba(9, 145, 255, 0.9)',
          backgroundColor: 'rgba(9, 145, 255, 0.2)',
          fill: true,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });

    const complaintsChart = new Chart(complaintsChartCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Number of Complaints by Month',
          data: [8, 6, 12, 10, 14, 9, 11, 13, 15, 17, 19, 21],
          borderColor: 'black',
          backgroundColor: 'rgba(9, 145, 255, 0.5)',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });

    const genderChart = new Chart(genderChartCtx, {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          data: [60, 40],
          backgroundColor: ['rgba(9, 145, 255, 0.2)', 'rgba(54, 162, 235, 0.9)'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });

    const categoryChart = new Chart(categoryChartCtx, {
      type: 'pie',
      data: {
        labels: ['Road hazards', 'Stray animals', 'Garbage disposal'],
        datasets: [{
          data: [40, 30, 30],
          backgroundColor: ['rgba(9, 145, 255, 0.2)', 'rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 0.5)'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });

    // Cleanup function to destroy charts when component unmounts
    return () => {
      usersChart.destroy();
      complaintsChart.destroy();
      genderChart.destroy();
      categoryChart.destroy();
    };
  }, []);

  return (
   <div>
      <Sidebar />
      <div className='admin-table-home-page'>
      <div className="flex">
    
    <div className="flex-1 p-6 ml-64 lg:ml-200" style={{marginLeft:'0'}}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

        <div className="bg-white p-4 shadow rounded-lg" >
          <h3 className="text-lg font-bold mb-2">Users Registration by Month</h3>
          <div className="relative" style={{ height: '260px' }}>
            <canvas id="usersChart"></canvas>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg" >
          <h3 className="text-lg font-bold mb-2">Number of Complaints by Month</h3>
          <div className="relative" style={{ height: '260px' }}>
            <canvas id="complaintsChart"></canvas>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg " >
          <h3 className="text-lg font-bold mb-2">Users by Gender</h3>
          <div className="relative" style={{ height: '260px' }}>
            <canvas id="genderChart"></canvas>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg" >
          <h3 className="text-lg font-bold mb-2">Number of Complaints by Category</h3>
          <div className="relative" style={{ height: '260px' }}>
            <canvas id="categoryChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
   </div>
  );
};

export default Report;
