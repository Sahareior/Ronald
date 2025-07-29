import React from 'react';
import { FaBoxOpen, FaUndoAlt, FaShippingFast, FaMoneyBillAlt, FaTools, FaExchangeAlt } from 'react-icons/fa';
import Breadcrumb from '../../others/Breadcrumb';

const policyPoints = [
  {
    icon: <FaUndoAlt className="text-white" />,
    title: '7-Day Return Window',
    description: 'Returns must be initiated within 7 days of delivery',
  },
  {
    icon: <FaBoxOpen className="text-white" />,
    title: 'Original Packaging',
    description: 'Items must be unused and in original packaging',
  },
  {
    icon: <FaShippingFast className="text-white" />,
    title: 'Free Return Shipping',
    description: 'We can instead have free pickup for the return.',
  },
  {
    icon: <FaTools className="text-white" />,
    title: 'Assembly Costs',
    description: 'Furniture assembly costs are non-refundable',
  },
  {
    icon: <FaMoneyBillAlt className="text-white" />,
    title: 'Refund Processing',
    description: 'Refunds processed within 3–5 business days',
  },
  {
    icon: <FaExchangeAlt className="text-white" />,
    title: 'Exchanges Available',
    description: 'Exchange for different size or color when available',
  },
];

const ReturnPolicyOverview = () => {
  return (
<div className=''>
      <div className='px-6 py-3'>
        <Breadcrumb />
      </div>
      <div className="max-w-3xl bg-[#EAE7E1] mx-auto  p-6 rounded-xl my-24 shadow-md">
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
        Return Policy Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {policyPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-yellow-500 rounded-full p-2">
              <div className="text-lg">{point.icon}</div>
            </div>
            <div>
              <p className="font-semibold text-gray-800">{point.title}</p>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
</div>
  );
};

export default ReturnPolicyOverview;
