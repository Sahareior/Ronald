import React from 'react';
import { Input, Select, DatePicker, Button } from 'antd';
import { IoSearch } from 'react-icons/io5';
import OrdersTable from './OrdersTable';
import { FaDownload } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
// import { Input } from 'antd';
const { TextArea } = Input;

const { Option } = Select;
const { RangePicker } = DatePicker;



const Orders = () => {
  return (
    <div className="px-6 py-4">

  <div className='border w-full relative py-14 bg-[#FFFFFF] rounded-xl border-[#E5E7EB]'>
  <div className='flex justify-between w-full items-center absolute top-5  p-4'>
    <p className='popbold text-slate-400 text-xl'>Manage and track all customer orders</p>
          <Button className='bg-[#CBA135] text-white popmed px-7 right-6 py-5 '>
      <FaDownload />  Export Now
      </Button>
  </div>
    </div>

      <div className="flex rounded-xl bg-white p-5 flex-col sm:flex-row mt-6 justify-between items-start sm:items-center gap-4">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-4 sm:px-10">
  {/* Search Orders */}
  <div className="w-full">
    <p className="text-sm font-medium text-gray-700 mb-1">Search Orders</p>
    <input
      placeholder="Enter First Name"
      className="w-full border popreg border-[#D1D5DB] rounded-md px-4 h-[45px] placeholder:text-sm focus:outline-none focus:ring-0 focus:border-[#CBA135]"
    />
  </div>

  {/* Order Status Select */}
  <div className="w-full">
    <p className="text-sm font-medium text-gray-700 mb-1">Order Status</p>
    <Select
      defaultValue="Select"
      className="w-full popreg h-[45px]"
      suffixIcon={<RiArrowDropDownLine size={22} />}
    >
      <Option value="jack">Processing</Option>
      <Option value="lucy">Shipped</Option>

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
        <OrdersTable />
      </div>
    </div>
  );
};

export default Orders;
