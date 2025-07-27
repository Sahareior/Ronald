import React from 'react';
import { Button, Switch } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FaFileUpload } from 'react-icons/fa';

const AddnewProducts = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-[#CBA135] text-white space-y-2 p-5 rounded-t-md">
        <p className="text-[24px] popbold">Add New Products</p>
        <p className="text-[16px] popreg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, molestias!
        </p>
      </div>

      {/* Main Form */}
      <div className="p-6 bg-white space-y-6 shadow-sm rounded-b-md">

        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Product Name</label>
            <input
              placeholder="Enter Product Name"
              className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 popbold text-[14px] text-gray-700">Category</label>
            <input
              placeholder="Enter Category"
              className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Descriptions */}
        <div>
          <label className="block mb-2 popbold text-[14px] text-gray-700">Short Description</label>
         <textarea class="border border-gray-300 w-full rounded-md px-4 py-5 focus:outline-none focus:border-black focus:ring-0" placeholder="Type here..."></textarea>

        </div>
        <div>
          <label className="block mb-2 popbold text-[14px] text-gray-700">Full Description</label>
            <textarea class="border border-gray-300 w-full rounded-md px-4 py-11 focus:outline-none focus:border-black focus:ring-0" placeholder="Type here..."></textarea>
        </div>

        {/* Image Upload Section */}
        <div className="bg-[#EAE7E1] p-6 flex flex-col items-center gap-2 rounded-md border border-dashed border-[#CBA135]">
          <FaFileUpload size={32} className="text-[#CBA135]" />
          <p className="text-gray-700 text-sm">Drag and drop product images here</p>
          <p className="text-gray-500 text-sm">or click to browse</p>
          <Button className="bg-[#CBA135] text-white mt-2">Browse Files</Button>
        </div>

        {/* Pricing Section */}
        <div>
          <h3 className="text-[20px] popbold mb-2">Pricing</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <label className="block mb-1 popbold text-[14px] text-gray-700">Price Option {item}</label>
                <input
                  placeholder="Enter Price"
                  className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Section */}
        <div>
          <h3 className="text-[20px] popbold mb-2">Inventory & Variants</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <label className="block mb-1 popbold text-[14px] text-gray-700">Option {item}</label>
                <input
                  placeholder="Enter Detail"
                  className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* In Stock Switch */}
        <div className="flex items-center gap-2">
          <Switch defaultChecked />
          <p className="text-gray-700">In Stock</p>
        </div>

        {/* Delivery Options */}
        <div className="pt-4 py-6 border-t">
          <h4 className="popbold text-[16px] mb-3">Delivery Options</h4>
          <div className=" gap-4">
            {['Home Delivery', 'Pickup', 'Partner Delivery'].map((label, index) => (
              <label key={index} className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" />
                {label}
                <input className=' border border-[#D1D5DB] rounded-md  w-12  focus:outline-none ' />
              </label>
            ))}
            <div className="md:col-span-3 mt-5">
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Estimated Delivery Time (days)
              </label>
              <input
                placeholder="e.g., 3-5"
                className="w-52 border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* SEO Section */}
        <div className="pt-4 border-t">
          <h4 className="popbold text-[16px] mb-3">SEO & Tags <span className="text-gray-500">(Optional)</span></h4>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">SEO Title</label>
              <input
                placeholder="SEO optimized title"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">Meta Description</label>
                 <textarea class="border border-gray-300 w-full rounded-md px-4 py-8 focus:outline-none focus:border-black focus:ring-0" placeholder="Type here..."></textarea>

            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">Tags</label>
              <input
                placeholder="furniture, modern, oak, dining (comma-separated)"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <Button className="bg-white border border-gray-400">Save as Draft</Button>
          <Button className="bg-[#CBA135] text-white">Submit Product</Button>
        </div>
      </div>
    </div>
  );
};

export default AddnewProducts;
