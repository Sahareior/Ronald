import React from 'react';
import ProductsTable from './VProductsTable';
import { Button, Select } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;

const VProductsList = () => {
  return (
    <div className="space-y-8 ">

<div className='flex justify-between items-center pt-4'>
  <p className='text-[34px] popbold'>Products List</p>
      <Link to='/vendor-dashboard/addproducts'>
       <Button className='bg-[#CBA135] flex justify-end py-5 text-end text-white'>Add New Products</Button>
      </Link>

</div>
           {/* Form Filters */}
      <div className="grid grid-cols-1 p-6 bg-white items-center rounded-md md:grid-cols-3 gap-5">
        {/* First Name */}
        <div>
   
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Job Title */}
        <div>
    

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
          
          <Select
            placeholder="Select Department"
            className="w-full"
            size="large"
             defaultValue="All"
          >
            <Option value="All">All Status</Option>
            <Option value="None">Active</Option>
            <Option value="In Stock">Pending</Option>
            <Option value="Out of stock">Rejected</Option>
           
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

export default VProductsList;
                    