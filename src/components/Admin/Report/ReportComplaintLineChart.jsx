import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const Utils = {
  numbers: ({ count, min, max }) =>
    Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min + 1) + min)
    ),
  weekdays: () => ["Mon", "Tue", "Wed", "Thu", "Fri"], // Working days of the week
  namedColor: (index) => ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"][index % 6],
  transparentize: (color, opacity) => `${color}${Math.floor(opacity * 255).toString(16)}`,
};

const NUMBER_CFG = { count: 5, min: 0, max: 100 }; // 5 working days

const labels = Utils.weekdays();

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

const ReportComplaintLineChart = () => {
  const chartRef = useRef(null);

  return (
    <div className="p-4 w-full h-[100%]">
      <h2 className="text-lg font-semibold mb-4">Weekly Complaint Trend</h2>
      <Line ref={chartRef} data={initialData} options={config} />
    </div>
  );
};

export default ReportComplaintLineChart;
