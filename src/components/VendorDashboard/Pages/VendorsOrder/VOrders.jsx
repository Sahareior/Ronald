import React from 'react';
import { Input, Select, DatePicker, Button } from 'antd';
import { IoSearch } from 'react-icons/io5';

import { FaDownload } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import VOrdersTable from './VOrdersTable';
import { FiSearch } from 'react-icons/fi';
// import { Input } from 'antd';
const { TextArea } = Input;

const { Option } = Select;
const { RangePicker } = DatePicker;



const VOrders = () => {
  return (
    <div className="px-6 py-4">

  <div className='border relative border-[#E5E7EB]'>
      <TextArea className='border-slate-500 border popmed placeholder:text-[#66666666] placeholder:text-[20px] relative placeholder:pt-7 text-black' placeholder='Manage and track all customer orders' rows={5} />
      <Button className='bg-[#CBA135] text-white popmed px-7 absolute top-9 right-6 py-5 '>
      <FaDownload />  Export Now
      </Button>
    </div>

      <div className="flex rounded-xl bg-white p-5 flex-col sm:flex-row mt-6 justify-between items-start sm:items-center gap-4">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-4 sm:px-10">
  {/* Search Orders */}
<div className="w-full">
  <p className="text-sm font-medium text-gray-700 mb-1">Search Orders</p>
  <div className="relative">
    <input
      placeholder="Enter First Name"
      className="w-full border popreg border-[#D1D5DB] rounded-md px-4 pl-10 h-[45px] placeholder:text-sm focus:outline-none focus:ring-0 focus:border-[#CBA135]"
    />
    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
  </div>
</div>

  {/* Order Status Select */}
  <div className="w-full">
    <p className="text-sm font-medium text-gray-700 mb-1"> Order Status</p>
    <Select
      defaultValue="select"
      className="w-full popreg h-[45px]"
      suffixIcon={<RiArrowDropDownLine size={22} />}
    >
      <Option value="jack">All</Option>
      <Option value="lucy">None</Option>
      <Option value="Yiminghe">Paid</Option>
      <Option value="Yiminghe">Unpaid</Option>

    </Select>
  </div>

  {/* Date Picker */}
  <div className="w-full">
    <p className="text-sm font-medium text-gray-700 mb-1">Date Range</p>
    <DatePicker
      placeholder="mm/dd/yyyy"
      className="w-full h-[45px] rounded-md border popreg border-[#D1D5DB]"
      style={{ height: '45px', width: '100%' }}
    />
  </div>
</div>

      </div>

      <div className='mt-12 bg-white p-6 shadow-md'>
        <VOrdersTable />
      </div>
    </div>
  );
};

export default VOrders;
