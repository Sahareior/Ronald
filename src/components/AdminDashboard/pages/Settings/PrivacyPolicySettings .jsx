import { Switch } from 'antd';
import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import EditSection from './editor/EditSection';

const PrivacyPolicySettings = () => {
  const [clicked, setClicked] = useState(false)

    const onChange = checked => {
  console.log(`switch to ${checked}`);
};
  return (
    <div className="bg-[#FAF8F2] shadow rounded-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex bg-white p-5 shadow-sm items-center justify-between">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <FaLock className="text-yellow-500" />
          Privacy Policy Settings
        </div>
        <button onClick={()=> setClicked(state => !state)} className="flex items-center gap-1 px-4 py-2 text-sm font-medium bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
          <FiEdit />
          Edit Policy
        </button>
      </div>

      {/* Toggle List */}
      <div className="space-y-4 bg-white p-5 shadow-sm">
        <div className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="font-medium">Registration Page</p>
            <p className="text-sm text-gray-500">Show privacy policy link on user registration</p>
          </div>
          <Switch defaultChecked onChange={onChange} />
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="font-medium">Checkout Page</p>
            <p className="text-sm text-gray-500">Display privacy policy during checkout process</p>
          </div>
          <Switch defaultChecked onChange={onChange} />
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="font-medium">Vendor Signup Form</p>
            <p className="text-sm text-gray-500">Include privacy policy in vendor registration</p>
          </div>
          <Switch defaultChecked onChange={onChange} />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Require Acceptance</p>
            <p className="text-sm text-gray-500">Users must accept privacy policy before account creation</p>
          </div>
          <Switch defaultChecked onChange={onChange} />
        </div>
      </div>

      {/* Policy Content */}
{
  clicked? <EditSection /> :
        <div className="bg-[#F9FAFB] border rounded p-4">
        <div className="flex justify-between items-center mb-3">
          <p className="font-medium">Privacy Policy Content</p>
          <p className="text-sm text-gray-500">Last updated: July 15, 2025</p>
        </div>
        <div className='h-[0.7px] bg-black w-full my-3' />
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold">1. Introduction</p>
            <p>
              Welcome to WIROKO. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our marketplace platform.
            </p>
          </div>

          <div>
            <p className="font-semibold">2. What Information We Collect</p>

            <div className="pl-4">
              <p className="font-medium">Personal Information</p>
              <ul className="list-disc list-inside">
                <li>Name, email address, phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Profile information and preferences</li>
              </ul>

              <p className="font-medium mt-2">Order & Payment Data</p>
              <ul className="list-disc list-inside">
                <li>Purchase history and transaction details</li>
                <li>Payment method information (encrypted)</li>
                <li>Order preferences and delivery instructions</li>
              </ul>

              <p className="font-medium mt-2">Location & Device Info</p>
              <ul className="list-disc list-inside">
                <li>GPS location for delivery services</li>
                <li>Device type, OS, browser info</li>
                <li>IP address and usage analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default PrivacyPolicySettings;
