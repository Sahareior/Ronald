import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Text
} from 'recharts';
import { useVendorSellsPerfomenceQuery } from '../../../../../redux/slices/Apis/vendorsApi';

const SalesOverview = () => {
  const { data, isLoading, error } = useVendorSellsPerfomenceQuery();

  // Check if all values are zero
  const allZero = data?.sales_performance?.every(item => item.value === 0);

  return (
    <div className="bg-white p rounded-xl shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Sales Overview</h2>
        <select className="border px-3 py-1 rounded-md text-sm text-gray-700">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>This year</option>
        </select>
      </div>

      {isLoading ? (
        <div className="h-[350px] flex items-center justify-center">
          <p>Loading sales data...</p>
        </div>
      ) : error ? (
        <div className="h-[350px] flex items-center justify-center">
          <p className="text-red-500">Error loading sales data</p>
        </div>
      ) : allZero ? (
        <div className="h-[350px] flex flex-col items-center justify-center">
          <p className="text-gray-500 mb-2">No sales data available</p>
          <p className="text-sm text-gray-400">Your sales chart will appear here when you make sales</p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data?.sales_performance}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#CBA135" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#CBA135" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              stroke="#888888"
              tick={<CustomizedAxisTick />}
            />
            <YAxis 
              tickFormatter={(val) => `$${val / 1000}k`} 
              stroke="#888888"
              domain={['auto', 'auto']}
            />
            <Tooltip 
              formatter={(val) => [`$${val.toLocaleString()}`, 'Sales']}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#CBA135"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

// Custom XAxis tick component to handle month names better
const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <Text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#666"
        fontSize={12}
      >
        {payload.value.substring(0, 3)}
      </Text>
    </g>
  );
};

export default SalesOverview;