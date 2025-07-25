// BarCharts.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sofa', value: 50 },
  { name: 'Chair', value: 65 },
  { name: 'Table', value: 85 },
  { name: 'Bed', value: 90 },
  { name: 'Table', value: 83 },
  { name: 'Bed', value: 102 },
];

const BarCharts = () => {
  return (
    <div className="bg-white   w-full h-full ">
      {/* <h2 className="text-lg popbold ">Top Product Categories</h2> */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={40}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(tick) => `${tick}%`}
            domain={[0, 110]}
          />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar
            dataKey="value"
            fill="#C89A2A"
            radius={[10, 10, 0, 0]} // Rounded top
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
