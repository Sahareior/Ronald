import { Select } from 'antd';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';
import LineCharts from './_components/LineChart';
import BarCharts from './_components/BarCharts';
import { IoIosWarning } from "react-icons/io";
import {
 
  MdOutlineShoppingCart,
  MdPeopleAlt,
  MdStore,
  MdInventory,
  MdReplay,
} from "react-icons/md";

const Analytics = () => {

  const dashboardStats = [
  {
    title: "Total Customers",
    value: "12,847",
  },
  {
    title: "Total Sellers",
    value: "2,341",
  },
];


  const topProducts = [
  { name: 'Sofa', percentage: 72 },
  { name: 'Bed', percentage: 62 },
  { name: 'Table', percentage: 77 },
  { name: 'Chair', percentage: 98 },
  { name: 'Cabinet', percentage: 69 },
];


const cards = [
  {
    title: "Total Revenue",
    value: "$127,500",
    change: "+12.5%",
    color: "#16A34A",
    icon: <MdOutlineAttachMoney className="text-[#CBA135]" size={26} />,
    footerText: "Increase in sales revenue",
  },
  {
    title: "Total Orders",
    value: "3,420",
    change: "+8.2%",
    color: "#3B82F6",
    icon: <MdOutlineShoppingCart className="text-[#3B82F6]" size={26} />,
    footerText: "More orders received",
  },
  {
    title: "Active Sellers",
    value: "1,120",
    change: "+5.7%",
    color: "#10B981",
    icon: <MdPeopleAlt className="text-[#10B981]" size={26} />,
    footerText: "Growth in customer base",
  },
  {
    title: "Low Stock",
    value: "15",
    // change: "-3.2%",
    color: "#EF4444",
    icon: <IoIosWarning className="text-[#EF4444]" size={26} />,
    footerText: "Product",
  },

];

    return (
        <div>

 <div className="flex flex-col md:flex-row justify-between shadow-md items-center gap-4 py-6 mt-9 px-4 bg-white rounded-md ">
      {/* Left: Label with Icon */}
      <p className="flex items-center gap-2 text-gray-700 text-[18px] popbold ">
        <FaCalendar className="text-[#CBA135]" />
        Date Range Filter
      </p>

      {/* Right: Dropdown */}
      <Select
        defaultValue="lucy"
        className="w-[180px] popreg h-10 text-[16px]"
        size="middle"
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'Yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
    </div>

{/* 
                      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        className="bg-white p-9 rounded-xl shadow-md hover:shadow-lg transition duration-300 space-y-3  w-full"
                      >
                        <div className="flex items-center pr-9 justify-between">
                          <p className="text-sm font-medium text-gray-700">{card.title}</p>
                          <MdOutlineAttachMoney className="text-[#CBA135]" size={26} />
                        </div>
                        <h3 className="text-3xl font-extrabold popbold text-gray-800">{card.value}</h3>
                        <p className="text-sm font-medium" style={{ color: card.color }}>
                          {card.change} from last month
                        </p>
                      </div>
                    ))}
                  </div> */}

<div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-white p-9 rounded-xl shadow-md hover:shadow-lg transition duration-300 space-y-3  w-full"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700">{card.title}</p>
        {card.icon}
      </div>
      <h3 className="text-3xl font-extrabold popbold text-gray-800">{card.value}</h3>
      <p className="text-sm font-medium" style={{ color: card.color }}>
        {card.change}  {card.footerText}
      </p>
    </div>
  ))}
</div>




                  {/*.....................................  */}

   <div className="flex flex-col lg:flex-row gap-6 mt-6">
      {/* Vendor Performance Card */}
      <div className="bg-white p-6 rounded-md shadow w-full lg:w-2/3">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[18px] font-semibold popbold text-gray-800">Vendor Performance</h3>
          <Select
            defaultValue="lucy"
            className="w-[180px] h-10 text-[16px] popreg"
            size="middle"
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'Yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </div>

        {/* Table Head */}
        <div className="grid grid-cols-4 text-gray-600 bg-[#E5E7EB] py-3 text-[14px] popreg border-b pb-2">
          <p className="text-center">Vendor</p>
          <p className="text-center">Products Sold</p>
          <p className="text-center">Revenue</p>
          <p className="text-center">Status</p>
        </div>

        {/* Table Rows */}
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="grid grid-cols-4 text-[15px] text-gray-700 popreg items-center border-b py-3">
            <p className="text-center">ModernLiving Co.</p>
            <p className="text-center">1,247</p>
            <p className="text-center">$12,470</p>
            <p className="text-center bg-green-100 rounded-full p-2 text-green-600 font-medium">Active</p>
          </div>
        ))}
      </div>

      {/* Customer Insights Card */}
      <div className="bg-white p-6 rounded-md shadow w-full lg:w-1/3">
        <p className="text-[18px] font-semibold popbold mb-5 text-gray-800">Customer Insights</p>
        <div className="grid grid-cols-1 gap-4">
          {dashboardStats.map((_, i) => (
            <div key={i} className="p-5 bg-[#EAE7E1] rounded-md">
              <p className="text-[14px] text-gray-600 popreg">Total Customers</p>
              <p className="text-[24px] text-gray-900 popbold">12,847</p>
            </div>
          ))}
        </div>
      </div>

    </div>
    {/* charts */}

<div className="py-4">
  <div className="flex items-center gap-6">
    {/* Line Chart */}
    <div className="w-[50%] bg-white p-5 shadow-md h-[400px] flex flex-col">
      <p className="popbold text-[20px] mb-4">Furniture Sales Comparison</p>
      <div className="flex-1">
        <LineCharts />
      </div>
    </div>

    {/* Bar Chart */}
    <div className="w-[50%] bg-white p-5 shadow-md h-[400px] flex flex-col">
      <p className="popbold text-[20px] mb-4">Top Product Categories</p>
      <div className="flex-1">
        <BarCharts />
      </div>
    </div>
  </div>
</div>


    <div>

    </div>
<div className="bg-white p-6 rounded-xl mt-6 shadow-md">
      <h2 className="text-[20px] popbold mb-4">Top Product over the last month</h2>
      <hr />
      <div className="space-y-4 mt-4">
        {topProducts.map((product, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700">{product.name}</span>
              <span className="font-semibold">{product.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="h-2 rounded bg-gradient-to-r from-yellow-400 to-yellow-600"
                style={{ width: `${product.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

        </div>
    );
};

export default Analytics;