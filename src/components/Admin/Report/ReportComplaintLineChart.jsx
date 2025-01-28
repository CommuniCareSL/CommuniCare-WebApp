import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { getStoredData } from "../../../hooks/localStorage";
import axios from "axios";
import { BASE_URL } from "../../../constants/config";

const Utils = {
  lastSevenDays: () => {
    const today = new Date();
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      days.push(day.toLocaleDateString("en-US", { weekday: "short" })); // e.g., "Mon", "Tue"
    }
    return days.reverse(); // Reverse to show the oldest date first
  },
  namedColor: (index) => ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"][index % 6],
  transparentize: (color, opacity) => `${color}${Math.floor(opacity * 255).toString(16)}`,
};

const ReportComplaintLineChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null); // For storing the fetched chart data
  const { sabhaId } = getStoredData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/admin-chart/complaints/weekly/${sabhaId}`);
        const data = response.data;

        // Map backend data to chart.js format
        const labels = Utils.lastSevenDays();
        const datasets = [
          {
            label: "Complaint Count",
            data: labels.map((label) => data[label] || 0), // Match data to labels, fallback to 0
            borderColor: Utils.namedColor(0),
            backgroundColor: Utils.transparentize(Utils.namedColor(0), 0.5),
          },
        ];

        setChartData({ labels, datasets });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [sabhaId]);

  const config = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      y: {
        min: 0,
        max: 100, // Adjust max dynamically if needed based on fetched data
      },
    },
  };

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 w-full h-[100%]">
      <h2 className="text-lg font-semibold mb-4">Weekly Complaint Trend</h2>
      <Line ref={chartRef} data={chartData} options={config} />
    </div>
  );
};

export default ReportComplaintLineChart;
