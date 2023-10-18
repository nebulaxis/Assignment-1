import React from 'react';
import { Line } from 'react-chartjs-2';

const Analytics = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="analytics">
      <h2>Data Analytics</h2>
      <Line data={data} />
    </div>
  );
};

export default Analytics;