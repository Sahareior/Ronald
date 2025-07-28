import React from 'react';
import { Avatar, Button, Input, Select } from 'antd';
import CustomerTable from '../CustomerList/CustomerTable';
import VendorTable from './VendorTable';
import { FaChevronDown, FaDownload } from 'react-icons/fa';
// import CustomerTable from './CustomerTable';

const { Option } = Select;

const VendorList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between mt-3 px-2 items-center">
        <h2 className="popbold flex items-center gap-2 text-[28px] sm:text-[34px]">
          Vendor list
        </h2>

    <Button className='bg-[#CBA135] popmed text-[16px] flex items-center text-white px-7 py-5'><FaDownload /> Vendor Data</Button>
      </div>

      {/* Filter and Info */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 rounded-md shadow-sm">
  {/* Left: Search + Filter */}
  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
    {/* Search Input */}
    <input
      type="text"
      placeholder="Search Vendor"
      className="w-full sm:w-[340px] h-10 px-4 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
    />

    {/* Status Filter */}
    <div className="relative w-full sm:w-[220px]">
      <Select
        defaultValue="All Status"
        className="w-full h-10 rounded-md border border-gray-300 focus:border-blue-500"
      >
        <Option value="All Status">All Status</Option>
        <Option value="Active">Active</Option>
        <Option value="Trial/Inactive">Trial/Inactive</Option>
      </Select>
      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
  </div>

  {/* Right: Info Text */}
  <p className="text-sm text-gray-700">
    Showing <span className="font-medium">20</span> of <span className="font-medium">242</span> customers
  </p>
</div>

      <div>
        <VendorTable />
      </div>
    </div>
  );
};

export default VendorList;
