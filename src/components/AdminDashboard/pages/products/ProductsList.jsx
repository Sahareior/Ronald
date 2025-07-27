import React from 'react';
import ProductsTable from './ProductsTable';
import { Button, Select } from 'antd';

const { Option } = Select;

const ProductsList = () => {
  return (
    <div className="space-y-8 ">

<div className='flex justify-end pt-4'>
       <Button className='bg-[#CBA135] flex justify-end py-5 text-end text-white'>Add New Products</Button>

</div>
           {/* Form Filters */}
      <div className="grid grid-cols-1 p-6 bg-white items-center rounded-md md:grid-cols-3 gap-5">
        {/* First Name */}
        <div>
          <label className="block mb-1  font-semibold text-sm text-gray-700">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Job Title */}
        <div>
          <label className="block mb-1 font-semibold text-sm text-gray-700">Job Title *</label>
          <Select
            placeholder="Select Your Role"
            className="w-full"
            size="large"
            defaultValue="Categories"
          >
            <Option value="owner">Owner</Option>
            <Option value="manager">Manager</Option>
            <Option value="designer">Designer</Option>
          </Select>
        </div>

        {/* Department */}
        <div>
          <label className="block mb-1 font-semibold text-sm text-gray-700">Department</label>
          <Select
            placeholder="Select Department"
            className="w-full"
            size="large"
             defaultValue="All Status"
          >
            <Option value="sales">Sales</Option>
            <Option value="development">Development</Option>
            <Option value="marketing">Marketing</Option>
          </Select>
        </div>
      </div>

      {/* Product Table Section */}
      <div>
        <ProductsTable />
      </div>
    </div>
  );
};

export default ProductsList;
                    