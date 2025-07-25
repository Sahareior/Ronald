import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Fri', value: 250000 },
  { day: 'Sat', value: 290000 },
  { day: 'Sun', value: 310000 },
  { day: 'Mon', value: 350000 },
  { day: 'Tue', value: 330000 },
  { day: 'Wed', value: 340000 },
  { day: 'Thu', value: 360000 },
];

const SalesOverview = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Sales Overview</h2>
        <select className="border px-3 py-1 rounded-md text-sm text-gray-700">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>This year</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#CBA135" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#CBA135" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" stroke="#888888" />
          <YAxis tickFormatter={(val) => `$${val / 1000}k`} stroke="#888888" />
          <Tooltip formatter={(val) => `$${val.toLocaleString()}`} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#CBA135"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverview;
