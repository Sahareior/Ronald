import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EditSection from "./editor/EditSection";

const TermsConditions = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
      {/* Header */}
      <div className="flex justify-between items-start border-b pb-4 mb-4">
        <div>
          <h2 className="text-lg popbold text-gray-800">
            Terms & Conditions Document
          </h2>
          <p className="text-sm popreg text-gray-500 mt-1">
            Manage your platform’s terms and conditions that govern user interactions.
          </p>
        </div>
        <div className="text-sm text-gray-500 text-right">
          <p className="text-xs text-[#6B7280] popreg">Last updated</p>
          <p className="popmed">July 18, 2025</p>
        </div>
      </div>

      {/* Display Settings */}
      <div className="mb-6 bg-[#F9FAFB] p-5">
        <p className="popmed text-[#111827] mb-2">Display Settings</p>
        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2 text-sm popreg text-gray-700">
            <input type="checkbox" className="accent-[#CBA135] " />
            Show on Registration
          </label>
          <label className="flex items-center gap-2 popreg text-sm text-gray-700">
            <input type="checkbox" className="accent-[#CBA135]" />
            Show on Vendor Onboarding
          </label>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5">
        {/* Edit Icon */}
        <button onClick={()=> setClicked(state => !state)} className="absolute right-0 top-0 text-yellow-600 hover:text-yellow-700">
          <FaEdit size={17}/>
        </button>

 {
  clicked? <EditSection /> :
   <div>
          <ol className="space-y-5 text-[20px] text-gray-800 leading-relaxed pl-4 list-decimal">
          <li>
            <strong className="popbold text-[20px]">Introduction</strong><br />
            Welcome to WRIKOO. These Terms and Conditions govern your use of our marketplace platform. By accessing or using our services, you agree to be bound by these terms.
          </li>
          <li>
            <strong>Eligibility & Account Registration</strong><br />
            You must be at least 18 years old to use our platform. All information provided during registration must be accurate and complete.
          </li>
          <li>
            <strong>Vendor Responsibilities</strong><br />
            Vendors are responsible for accurate product descriptions, timely order fulfillment, and maintaining quality standards as outlined in our vendor guidelines.
          </li>
          <li>
            <strong>Product Listings & Accuracy</strong><br />
            All product information must be accurate, including descriptions, pricing, and availability. Misleading information may result in account suspension.
          </li>
          <li>
            <strong>Order Fulfillment & Shipping</strong><br />
            Orders must be processed within the specified timeframe. Shipping policies must be clearly communicated to buyers.
          </li>
          <li>
            <strong>Returns & Refunds</strong><br />
            Return and refund policies are governed by individual vendor terms, subject to our platform guidelines and applicable consumer protection laws.
          </li>
          <li>
            <strong>Payment Terms</strong><br />
            Payments are processed securely through our platform. Commission fees and payment schedules are outlined in the vendor agreement.
          </li>
        </ol>
  </div>
 }
      </div>
    </div>
  );
};

export default TermsConditions;
