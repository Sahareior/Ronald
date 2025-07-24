import React from 'react';
import { FaChair } from 'react-icons/fa6';

const features = [
  {
    icon: <FaChair className="text-3xl text-[#CBA135]" />,
    title: 'List Products',
    description: 'Upload images, set pricing, and manage variations easily.',
  },
  {
    icon: <FaChair className="text-3xl text-[#CBA135]" />,
    title: 'Manage Orders',
    description: 'Track and fulfill orders with real-time status updates.',
  },
  {
    icon: <FaChair className="text-3xl text-[#CBA135]" />,
    title: 'Manage Orders',
    description: 'Track and fulfill orders with real-time status updates.',
  },
  {
    icon: <FaChair className="text-3xl text-[#CBA135]" />,
    title: 'Insights & Reports',
    description: 'Analyze your sales performance and customer behavior.',
  },
  {
    icon: <FaChair className="text-3xl text-[#CBA135]" />,
    title: 'Insights & Reports',
    description: 'Analyze your sales performance and customer behavior.',
  },
  {
    icon: <FaChair className="text-3xl text-[#CBA135]" />,
    title: 'Insights & Reports',
    description: 'Analyze your sales performance and customer behavior.',
  },
 
];

const VendorFeatureOverview = () => {
  return (
    <div className="bg-[#EAE7E1] py-16">
      <div className="px-40 mx-auto ">
        <h3 className="text-3xl md:text-4xl popbold text-center mb-12">
          Vendor Features Overview
        </h3>
        <div className="grid justify-items-center grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 w-12/12  rounded-xl shadow-md text-start hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-start">{feature.icon}</div>
              <h4 className="text-xl popbold font-extrabold mb-2">{feature.title}</h4>
              <p className="text-gray-700 popreg" >{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorFeatureOverview;
