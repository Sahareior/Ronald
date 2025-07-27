import React from 'react';
import { Avatar, Button, Input, Select } from 'antd';
import CustomerTable from '../CustomerList/CustomerTable';
import VendorTable from './VendorTable';
// import CustomerTable from './CustomerTable';

const { Option } = Select;

const VendorList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between mt-3 items-center">
        <h2 className="popbold flex items-center gap-2 text-[28px] sm:text-[34px]">
          Customer List
        </h2>

    <Button className='bg-[#CBA135] popmed text-[16px] text-white px-7 py-5'>Vendor Data</Button>
      </div>

      {/* Filter and Info */}
      <div className="flex rounded-md bg-white p-5 flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-5">
          <Input placeholder="Search customers" className="w-[300px]" />
          <Select defaultValue="All Status" className="w-[300px]">
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
        <VendorTable />
      </div>
    </div>
  );
};

export default VendorList;
