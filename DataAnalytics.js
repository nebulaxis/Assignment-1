// DataAnalytics.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const DataAnalytics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales Data',
        data: [30, 40, 35, 55, 50, 60],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="data-analytics">
      <h2>Data Analytics Dashboard</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default DataAnalytics;