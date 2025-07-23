import { Input, Select, Steps } from 'antd';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaHandshakeSimple } from 'react-icons/fa6';

const { Option } = Select;

const SellerReg = () => {
  const description = 'This is a description.';

  return (
    <div className="bg-[#FAF8F2] px-6 md:px-20 py-10">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="flex justify-center text-[#CBA135] mb-3">
          <FaHandshakeSimple size={24} />
        </div>
        <h2 className="text-[32px] md:text-[48px] font-semibold mb-3">🛍️ Partner with WIROKO</h2>
        <p className="text-[18px] md:text-[20px] text-gray-700">
          Join our curated network of premium furniture vendors and reach customers worldwide
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto mb-12">
        <Steps
          current={1}
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'In Progress',
              description,
              subTitle: 'Left 00:00:08',
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        />
      </div>

      {/* Contact Info Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <p className='p-2 rounded-full  bg-[#CBA135]'><CgProfile  size={20} className="text-white " /></p>
          <div>
            <p className="text-[20px] font-bold">Contact Information</p>
            <p className="text-[14px] text-gray-600">Tell us how to reach you</p>
          </div>
        </div>

        {/* Form */}
        <div className="grid md:grid-cols-2  gap-4">
          <div>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">First Name</label>
            <Input placeholder="Enter First Name" className="h-[44px]" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">Last Name *</label>
            <Input placeholder="Enter Last Name" className="h-[44px]" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">Job Title *</label>
            <Select placeholder="Select Your Role" className="w-full h-[44px]">
              <Option value="owner">Owner</Option>
              <Option value="manager">Manager</Option>
              <Option value="designer">Designer</Option>
            </Select>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">Email Address *</label>
            <Input placeholder="Enter Email Address" className="h-[44px]" />
          </div>
          
        </div>
                  <div className='mt-2'>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">First Name</label>
            <Input placeholder="Enter First Name" className="h-[44px]" />
          </div>
      </div>
      {/* Business */}

            <div className="max-w-3xl mx-auto mt-9 bg-white p-6 rounded-xl shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <p className='p-2 rounded-full  bg-[#CBA135]'><CgProfile  size={20} className="text-white " /></p>
          <div>
            <p className="text-[20px] font-bold">Business Information</p>
            <p className="text-[14px] text-gray-600">Details about your company</p>
          </div>
        </div>

        {/* Form */}

                  <div className='mt-2'>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">First Name</label>
            <Input placeholder="Enter First Name" className="h-[44px]" />
          </div>

                            <div className='mt-2'>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">First Name</label>
            <Input placeholder="Enter First Name" className="h-[44px]" />
          </div>
        
        <div className="grid md:grid-cols-2 mt-3 gap-4">
          <div>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">First Name</label>
            <Input placeholder="Enter First Name" className="h-[44px]" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">Last Name *</label>
            <Input placeholder="Enter Last Name" className="h-[44px]" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">Job Title *</label>
            <Select placeholder="Select Your Role" className="w-full h-[44px]">
              <Option value="owner">Owner</Option>
              <Option value="manager">Manager</Option>
              <Option value="designer">Designer</Option>
            </Select>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-[14px] text-gray-700">Email Address *</label>
            <Input placeholder="Enter Email Address" className="h-[44px]" />
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default SellerReg;
