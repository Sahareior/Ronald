import React from 'react';
import { Avatar, Input, Select } from 'antd';
import CustomerTable from './CustomerTable';

const { Option } = Select;

const CustomerList = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
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

      {/* Filter and Info */}
      <div className="flex rounded-md bg-white p-5 flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-5">
          <Input placeholder="Search customers" className="w-[300px]" />
          <Select defaultValue="lucy" className="w-[300px]">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">Yiminghe</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
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
