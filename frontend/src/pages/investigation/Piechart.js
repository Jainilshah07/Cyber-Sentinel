import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Cloud', value: 400 },
  { name: 'Social Media', value: 300 },
  { name: 'Dating/Betting', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RePieChart = () => {
  return (
    <PieChart width={600} height={400}>
      <Pie dataKey="value" data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default RePieChart;
