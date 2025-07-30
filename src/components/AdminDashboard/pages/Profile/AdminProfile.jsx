import { Switch } from 'antd';
import React, { useState } from 'react';
import { FiUpload, FiUser } from 'react-icons/fi';

const AdminProfile = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="bg-[#F9F6EF] min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl popbold font-bold mb-2">My AdminProfile</h2>
        <p className="text-sm popreg text-gray-600 mb-6">
          Manage your personal information and account settings
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[16px] popmed text-[#666666]  font-medium block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="text-[16px] popmed text-[#666666] font-medium block mb-1">Phone number</label>
            <input
              type="text"
              placeholder="123456789"
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="text-[16px] popmed text-[#666666] font-medium block mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="text-[16px] popmed text-[#666666] font-medium block mb-1">Another number</label>
            <input
              type="text"
              placeholder="123456789"
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="text-[16px] popmed text-[#666666] font-medium block mb-1">Website Name</label>
            <input
              type="text"
              placeholder="Wrioko"
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
        </div>

        {/* Upload Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div>
            <label className="text-[16px] popmed text-[#666666] font-medium block mb-2">Platform Logo</label>
            <div className="flex items-center gap-4">
              <img
                src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                alt="Platform Logo"
                className="h-10 w-auto"
              />
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700">
                <FiUpload /> Upload New Logo
              </button>
            </div>
          </div>
          <div>
            <label className="text-[16px] popmed text-[#666666] font-medium block mb-2">Your Photo</label>
            <div className="flex items-center gap-4">
              <img
                src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700">
                <FiUpload /> Upload New Photo
              </button>
            </div>
          </div>
        </div>

        {/* Currency */}
        <div className="mt-6">
          <label className="text-[16px] popmed text-[#666666] font-medium block mb-1">Default Currency</label>
          <input
            type="text"
            placeholder="XAF"
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Toggle */}
      <div className="flex items-center justify-between mt-6 border rounded-md px-4 py-3">
  <div>
    <h4 className="font-medium text-[16px] popmed text-[#666666]">Maintenance Mode</h4>
    <p className="text-xs popreg text-gray-500">
      Temporarily disable access to your platform
    </p>
  </div>

  <Switch
    checked={maintenanceMode}
    onChange={(checked) => setMaintenanceMode(checked)}
    className="bg-gray-200"
    checkedChildren=""
    unCheckedChildren=""
  />
</div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-yellow-500 popreg hover:bg-yellow-600 text-white font-medium px-5 py-2 rounded-md">
            Save Changes
          </button>
          <button className="bg-gray-200 popreg hover:bg-gray-300 text-gray-800 font-medium px-5 py-2 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
