import React from 'react';
import { Avatar, Button, Input, Select } from 'antd';
import CustomerTable from './CustomerTable';
import { FaPlus } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

const { Option } = Select;

const CustomerList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between px-6 items-center ">
        <div className="space-y-2 ">
          <h2 className="popbold flex items-center gap-2 text-[28px] sm:text-[34px]">
          Customer List
          <span className="flex items-center gap-2 text-[16px] sm:text-[18px]">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
            Active
          </span>
        </h2>

        {/* Avatars */}
        <div className="flex items-center ">
          <Avatar src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" />
          <Avatar src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" />
          <Avatar src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" />
          <Avatar src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" />
          <p className="text-[12px] popreg text-gray-600 ml-2">
            Mubun, Faiza, Ramon +12 others
          </p>
        </div>
        </div>
        <Button className='bg-[#CBA135] flex items-center gap-2 text-white py-5 px-5'><FaPlus /> Create Account</Button>
      </div>

      {/* Filter and Info */}
      <div className="flex rounded-xl bg-white p-5 flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center flex-col sm:flex-row w-1/2 gap-12">
          <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 h-[45px] placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
<Select
  defaultValue="All Status"
  className="w-full h-[45px]"
  suffixIcon={<RiArrowDropDownLine size={22} />}
>
  <Option value="All Status">All Status</Option>
  <Option value="Active">Active</Option>
  <Option value="Trial/Inactive">Trial/Inactive</Option>

</Select>
        </div>
        <p className="text-[14px] popreg text-gray-700">
          Showing 20 of 242 customers
        </p>
      </div>

      <div>
        <CustomerTable />
      </div>
    </div>
  );
};

export default CustomerList;
