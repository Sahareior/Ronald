import React from 'react';
import { Input, Select, DatePicker, Button } from 'antd';
import { IoSearch } from 'react-icons/io5';
import OrdersTable from './OrdersTable';
import { FaDownload } from 'react-icons/fa';
// import { Input } from 'antd';
const { TextArea } = Input;

const { Option } = Select;
const { RangePicker } = DatePicker;



const Orders = () => {
  return (
    <div className="px-6 py-4">

  <div className='border relative border-[#E5E7EB]'>
      <TextArea className='border-slate-500 border popbold placeholder:text-[#66666666] placeholder:text-[24px] relative placeholder:pt-7 text-black' placeholder='Manage and track all customer orders' rows={5} />
      <Button className='bg-[#CBA135] text-white popmed px-7 absolute top-9 right-6 py-5 '>
      <FaDownload />  Export Now
      </Button>
    </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 py-6 bg-white md:grid-cols-4 gap-4">
        {/* Search Input */}
        <div className="p-4 bg-white rounded  w-full">
          <h1 className="text-sm popmed mb-2">Search Orders</h1>
          <div className="relative">
            <input className="pl-10 h-[48px] border-slate-500 border focus:ring-0 shadow-md rounded-md focus:border-slate-500 w-full" placeholder="Search by order ID or customer" />
            <IoSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 text-lg" />
          </div>
        </div>

        {/* Search Orders Dropdown */}
        <div className="p-4 bg-white rounded  w-full">
          <h1 className="text-sm popmed mb-2">Search Orders</h1>
          <Select
            placeholder="Select order type"
            className="w-full h-[48px] rounded-md shadow-md border-slate-500 border"
            options={[
              { label: 'Online Orders', value: 'online' },
              { label: 'Offline Orders', value: 'offline' },
              { label: 'Pre-Orders', value: 'preorder' },
            ]}
          />
        </div>

        {/* Order Status Dropdown */}
        <div className="p-4 bg-white rounded  w-full">
          <h1 className="text-sm popmed mb-2">Order Status</h1>
          <Select
            placeholder="Select status"
            className="w-full h-[48px] border-slate-500 shadow-md border rounded-md"
            options={[
              { label: 'Processing', value: 'processing' },
              { label: 'Shipped', value: 'shipped' },
              { label: 'Delivered', value: 'delivered' },
              { label: 'Cancelled', value: 'cancelled' },
            ]}
          />
        </div>

        {/* Date Range Picker */}
        <div className="p-4 bg-white rounded  w-full">
          <h1 className="text-sm popmed mb-2">Date Range</h1>
          <DatePicker className="w-full h-[48px] border-slate-500 border shadow-md" />
        </div>
      </div>

      <div className='mt-12 bg-white p-6 shadow-md'>
        <OrdersTable />
      </div>
    </div>
  );
};

export default Orders;
