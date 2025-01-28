import React, { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { getStoredData } from "../../../hooks/localStorage";
import axios from "axios";
import { BASE_URL } from "../../../constants/config";

const Utils = {
  namedColor: (index) => ["#4BC0C0", "#36A2EB", "#FFCE56", "#FF6384", "#9966FF", "#FF9F40"][index % 6],
  transparentize: (color, opacity) => `${color}${Math.floor(opacity * 255).toString(16)}`,
};

const ReportComplaintBarchart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);
  const [allData, setAllData] = useState(null); // To store the full data from API
  const { sabhaId } = getStoredData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/admin-chart/monthly/${sabhaId}`);
        const data = response.data;

        // Store the full data for future use
        setAllData({
          labels: data.labels,
          datasets: data.datasets.map((dataset, i) => ({
            ...dataset,
            borderColor: Utils.namedColor(i),
            backgroundColor: Utils.transparentize(Utils.namedColor(i), 0.5),
          })),
        });

        // Set initial data (first two months)
        setChartData({
          labels: data.labels.slice(0, 1), // First two months
          datasets: data.datasets.map((dataset, i) => ({
            ...dataset,
            data: dataset.data.slice(0, 1), // Data for the first two months
            borderColor: Utils.namedColor(i),
            backgroundColor: Utils.transparentize(Utils.namedColor(i), 0.5),
          })),
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [sabhaId]);

  const actions = [
    {
      name: "Add Month",
      handler() {
        if (chartRef.current && allData) {
          const chart = chartRef.current;
          const currentCount = chart.data.labels.length;

          if (currentCount < allData.labels.length) {
            // Add the next month
            chart.data.labels.push(allData.labels[currentCount]);
            chart.data.datasets.forEach((dataset, index) => {
              dataset.data.push(allData.datasets[index].data[currentCount]);
            });
            chart.update();
          } else {
            alert("You can only have up to 12 months of data.");
          }
        }
      },
    },
    {
      name: "Remove Month",
      handler() {
        if (chartRef.current) {
          const chart = chartRef.current;

          if (chart.data.labels.length > 1) {
            // Remove the last month
            chart.data.labels.pop();
            chart.data.datasets.forEach((dataset) => dataset.data.pop());
            chart.update();
          } else {
            alert("At least one month of data is required.");
          }
        }
      },
    },
  ];

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 w-full h-[80%]">
      <h2 className="text-lg font-semibold mb-4">Complaint Monthly Summary</h2>
      <Bar ref={chartRef} data={chartData} options={{ responsive: true }} />
      <div className="flex space-x-2 mt-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.handler}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            {action.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReportComplaintBarchart;
