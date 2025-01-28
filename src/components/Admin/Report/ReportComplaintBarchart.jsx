import React, { useRef } from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Utils = {
  numbers: ({ count, min, max }) =>
    Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min + 1) + min)
    ),
  months: ({ count }) =>
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].slice(0, count),
  namedColor: (index) => ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"][index % 6],
  transparentize: (color, opacity) => `${color}${Math.floor(opacity * 255).toString(16)}`,
};

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const labels = Utils.months({ count: DATA_COUNT });
const datasetLabels = ["Unseen", "In Progress", "Completed", "Other"];

const initialData = {
  labels: labels,
  datasets: datasetLabels.map((label, i) => ({
    label, // Assigning labels from the array
    data: Utils.numbers(NUMBER_CFG),
    borderColor: Utils.namedColor(i),
    backgroundColor: Utils.transparentize(Utils.namedColor(i), 0.5),
  })),
};

const ReportComplaintBarchart = () => {
  const chartRef = useRef(null);

  const actions = [
    {
      name: "Add Month",
      handler() {
        if (chartRef.current) {
          const chart = chartRef.current;
          if (chart.data.labels.length < 12) { // Maximum limit is 12 months
            const nextMonth = Utils.months({ count: chart.data.labels.length + 1 }).pop();
            chart.data.labels.push(nextMonth);
            chart.data.datasets.forEach((dataset) => 
              dataset.data.push(Utils.numbers({ count: 1, min: 0, max: 100 })[0])
            );
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
          if (chart.data.labels.length > 1) { // Minimum limit is 1 month
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
  

  return (
    <div className="p-4 w-full h-[80%]">
      <h2 className="text-lg font-semibold mb-4">Complaint Monthly Summery</h2>
      <Bar ref={chartRef} data={initialData} options={{ responsive: true }} />
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
