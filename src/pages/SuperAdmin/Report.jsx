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

    // Set canvas sizes
    document.getElementById('genderChart').width = 400;
    document.getElementById('genderChart').height = 400;
    document.getElementById('categoryChart').width = 400;
    document.getElementById('categoryChart').height = 400;

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
        maintainAspectRatio: true,
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
        maintainAspectRatio: true,
      }
    });

    const genderChart = new Chart(genderChartCtx, {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          data: [60, 40],
          backgroundColor: ['rgba(9, 145, 255, 0.2)', 'black'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      }
    });

    const categoryChart = new Chart(categoryChartCtx, {
      type: 'pie',
      data: {
        labels: ['Category 1', 'Category 2','Category 2'],
        datasets: [{
          data: [40,30, 30],
          backgroundColor: ['rgba(9, 145, 255, 0.2)', 'black','beige'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
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
      <div className="report-content">
        <div className="graph-container">
          <div className="graph-card">
            <h3>Users Registration by Month</h3>
            <canvas id="usersChart"></canvas>
          </div>
          <div className="graph-card">
            <h3>Number of Complaints by Month</h3>
            <canvas id="complaintsChart"></canvas>
          </div>
          <div className="graph-card">
            <h3>Users by Gender</h3>
            <canvas id="genderChart" className="pie-chart"></canvas>
          </div>
          <div className="graph-card">
            <h3>Number of Complaints by Category</h3>
            <canvas id="categoryChart" className="pie-chart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
