import { Button, Input, Select, Steps } from 'antd';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaCar, FaCloudUploadAlt } from 'react-icons/fa';
import { FaHandshakeSimple } from 'react-icons/fa6';

const { Option } = Select;

const SellerReg = () => {
  const description = 'This is a description.';

  return (
    <div className="bg-[#FAF8F2] px-6 md:px-20 py-10">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="flex justify-center text-[#CBA135] mb-3">
          <FaHandshakeSimple size={48} />
        </div>
        <h2 className="text-[32px] md:text-[48px] popbold mb-3">🛍️ Partner with WIROKO</h2>
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
              // subTitle: 'Left 00:00:08',
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
                   <div className='mt-2'>
            <label className="block mb-1 popbold text-[14px] text-gray-700">First Name</label>
            <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>

                  <div className='mt-2'>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Last Name *</label>
            <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>

          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Job Title *</label>
            <Select placeholder="Select Your Role" className="w-full h-[44px]">
              <Option value="owner">Owner</Option>
              <Option value="manager">Manager</Option>
              <Option value="designer">Designer</Option>
            </Select>
          </div>

                  <div className='mt-2'>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Email Address *</label>
            <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>
          
        </div>
                  <div className='mt-2'>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Phone Number *</label>
            <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
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
            <label className="block mb-1 popbold text-[14px] text-gray-700">Legal Business Name *</label>
            <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>

                            <div className='mt-2'>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Business Address *</label>
                 <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>
        
        <div className="grid md:grid-cols-2 mt-3 gap-4">
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Country *</label>
                <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">City/Town *</label>
                 <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">State/Province *</label>
            <Select placeholder="Select Your Role" className="w-full h-[44px]">
              <Option value="owner">Owner</Option>
              <Option value="manager">Manager</Option>
              <Option value="designer">Designer</Option>
            </Select>
          </div>
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Postal Code *</label>
                 <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>
          
        </div>
        <div className="grid md:grid-cols-2 mt-3 gap-4">
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Date*</label>
                <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Business Type *</label>
                 <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Taxpayer Number*</label>
            <Select placeholder="Select Your Role" className="w-full h-[44px]">
              <Option value="owner">Owner</Option>
              <Option value="manager">Manager</Option>
              <Option value="designer">Designer</Option>
            </Select>
          </div>
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Trade register number*</label>
                 <input placeholder="Enter First Name" className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
          </div>
          
        </div>

      </div>
{/* ...........................................Uploading System............................................ */}

        <div className="max-w-3xl mx-auto mt-9 bg-white p-6 rounded-xl shadow-xl">
<div className='flex items-center gap-3'>
  <p className='bg-[#CBA135] h-10 w-10 rounded-full flex justify-center items-center text-white'>
    <FaCar />
  </p>
  <div>
    <h3 className='popbold text-[24px]'>Verify Information</h3>
  <h4 className='text-sm popreg'>Your shipping and fulfillment capabilities</h4>
</div>
</div>

<div className="space-y-3 mt-7">
  <h2 className="popbold text-[18px] text-gray-800">Front of National ID</h2>

  <div className="bg-[#EAE7E1] rounded-xl border border-dashed border-gray-400 p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-md transition-all">
    <FaCloudUploadAlt className="text-4xl text-[#CBA135]" />

    <p className="popmed text-[16px] text-gray-700">Drag & drop images here</p>
    <p className="popreg text-[14px] text-gray-600 text-center">
      or click to browse (Min 1, Max 6 images)
    </p>

    <Button className="bg-[#CBA135] hover:bg-[#b8962e] text-white px-6 py-2 rounded-md shadow-sm transition-all">
      Browse Files
    </Button>
  </div>
</div>
{/* .................. */}
<div className="space-y-3 mt-7">
  <h2 className="popbold text-[18px] text-gray-800">Back of national ID</h2>

  <div className="bg-[#EAE7E1] rounded-xl border border-dashed border-gray-400 p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-md transition-all">
    <FaCloudUploadAlt className="text-4xl text-[#CBA135]" />

    <p className="popmed text-[16px] text-gray-700">Drag & drop images here</p>
    <p className="popreg text-[14px] text-gray-600 text-center">
      or click to browse (Min 1, Max 6 images)
    </p>

    <Button className="bg-[#CBA135] hover:bg-[#b8962e] text-white px-6 py-2 rounded-md shadow-sm transition-all">
      Browse Files
    </Button>
  </div>
</div>
{/* .................. */}
<div className="space-y-3 mt-7">
  <h2 className="popbold text-[18px] text-gray-800">Business owner</h2>

  <div className="bg-[#EAE7E1] rounded-xl border border-dashed border-gray-400 p-6 flex flex-col items-center justify-center space-y-3 hover:shadow-md transition-all">
    <FaCloudUploadAlt className="text-4xl text-[#CBA135]" />

    <p className="popmed text-[16px] text-gray-700">Drag & drop images here</p>
    <p className="popreg text-[14px] text-gray-600 text-center">
      or click to browse (Min 1, Max 6 images)
    </p>

    <Button className="bg-[#CBA135] hover:bg-[#b8962e] text-white px-6 py-2 rounded-md shadow-sm transition-all">
      Browse Files
    </Button>
  </div>
</div>
{/* .................. */}

<div className="flex flex-col sm:flex-row mt-6 gap-4">
  <div className="flex-1 mt-2">
    <label className="block mb-1 popbold text-[14px] text-gray-700">
     Home localization plan *
    </label>
    <input
      placeholder="Enter First Name"
      className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
    />
  </div>

  <div className="flex-1 mt-2">
    <label className="block mb-1 popbold text-[14px] text-gray-700">
      Business Localization plan *
    </label>
    <input
      placeholder="Enter Last Name"
      className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
    />
  </div>
</div>


<div className="flex flex-col sm:flex-row mt-6 gap-4">
  {/* First Name Section */}
  <div className="flex-1">
    <label className="block mb-1 popbold text-[14px] text-gray-700">
      Taxpayer number*
    </label>
    <div className="flex gap-2">
      <Button className="bg-[#676767] text-white px-4 py-5 whitespace-nowrap">
        Choose File
      </Button>
      <input
        placeholder="Enter First Name"
        className="flex-1 border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
      />
    </div>
  </div>

  {/* Last Name Section */}
  <div className="flex-1">
    <label className="block mb-1 popbold text-[14px] text-gray-700">
      Trade register number *
    </label>
    <div className="flex gap-2">
      <Button className="bg-[#676767] text-white px-4 py-5 whitespace-nowrap">
        Choose File
      </Button>
      <input
        placeholder="Enter Last Name"
        className="flex-1 border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
      />
    </div>
  </div>
</div>


  <p className='text-center py-5 pt-7 popreg'>Upload a high-quality image </p>
      </div>
  <div className="  mt-6 bg-[#FAF8F2] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-lg popbold mb-6">Verify here</h2>

        <div className="border rounded-md p-5 w-full max-w-sm space-y-3">
          {/* Captcha text */}
          <div className="text-2xl font-mono popbold">ZWzybux6</div>

          {/* Label */}
          <div className="bg-gray-200 text-sm px-2  rounded">ReCaptcha text enter below</div>

          {/* Input */}
          <input
            type="text"
            placeholder="Type text"
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CBA135] placeholder:px-1"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-[#CBA135] hover:bg-[#b8932f] text-white font-medium py-2 px-6 rounded shadow">
            Verify
          </button>
        </div>
      </div>
    </div>
<div>
</div>
      <div className='p-5 flex mt-8 justify-center flex-col gap-4 items-center'>
        <Button className='border-[#CBA135] bg-[#FAF8F2] py-6 px-11'>Apply Now</Button>
        <p className='popreg text-[14px]'>Your information will be kept confidential and secure.</p>
      </div>
    </div>
  );
};

export default SellerReg;
