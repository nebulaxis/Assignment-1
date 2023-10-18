import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const TradeData = () => {
  const [tradeData, setTradeData] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    
    const mockTradeData = [
      { date: '2023-01-01', price: 100 },
      { date: '2023-01-02', price: 105 },
      { date: '2023-01-03', price: 110 },
      
    ];

    setTradeData(mockTradeData);

    
    const labels = mockTradeData.map((entry) => entry.date);
    const prices = mockTradeData.map((entry) => entry.price);

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Trade Price',
          data: prices,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
    };

    setChartData(chartData);
  }, []);

  return (
    <div className="trade-data">
      <h2>Trade Data and Analytics</h2>
      <Line data={chartData} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tradeData.map((entry) => (
            <tr key={entry.date}>
              <td>{entry.date}</td>
              <td>{entry.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeData;