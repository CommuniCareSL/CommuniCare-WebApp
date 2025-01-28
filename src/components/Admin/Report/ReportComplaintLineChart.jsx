import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { getStoredData } from "../../../hooks/localStorage";
import axios from "axios";
import { BASE_URL } from "../../../constants/config";

const Utils = {
  numbers: ({ count, min, max }) =>
    Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min + 1) + min)
    ),
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

const NUMBER_CFG = { count: 7, min: 0, max: 100 }; // 7 days of data

const ReportComplaintLineChart = () => {
  const chartRef = useRef(null);
  const { sabhaId } = getStoredData();

  // Generate labels (last 7 days) and random data
  const labels = Utils.lastSevenDays();
  const initialData = {
    labels: labels,
    datasets: [
      {
        label: "Complaint Count",
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.namedColor(0),
        backgroundColor: Utils.transparentize(Utils.namedColor(0), 0.5),
      },
    ],
  };

  const config = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div className="p-4 w-full h-[100%]">
      <h2 className="text-lg font-semibold mb-4">Weekly Complaint Trend</h2>
      <Line ref={chartRef} data={initialData} options={config} />
    </div>
  );
};

export default ReportComplaintLineChart;