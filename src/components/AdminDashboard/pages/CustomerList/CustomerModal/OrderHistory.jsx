import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { FiCopy } from 'react-icons/fi';

const OrderHistory = () => {
  return (
    <div className="flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-[#f9f8f6] max-w-2xl w-full rounded-md shadow-lg">
        {/* Header */}
        <div className="border-b-4 border-blue-500 px-6 py-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">Order History!</h2>
          <p className="text-sm text-gray-600">Thank You for Your Order!</p>
        </div>

        {/* Body */}
        <div className="px-6 py-6 bg-white rounded-b-md">
          {/* Order Details */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">Order Details</h3>
            <div className="flex justify-between text-sm text-gray-800">
              <div>
                <p className="font-medium">Order ID</p>
                <p className="flex items-center gap-1 text-gray-700">
                  #Wrike240001 <FiCopy className="text-gray-500 cursor-pointer" size={14} />
                </p>
              </div>
              <div>
                <p className="font-medium">Estimated Delivery</p>
                <p>Jul 20–07, 2025</p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Product List */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">Products list</h3>
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex justify-between items-start text-sm text-gray-800 mb-2">
                <div>
                  <p className="font-semibold">Luxury Velvet Sectional Sofa</p>
                  <p className="text-gray-600 text-xs">Qty: 1</p>
                </div>
                <p>$3000.00</p>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          {/* Price Breakdown */}
          <div className="text-sm text-gray-800 space-y-2">
            <div className="flex justify-between">
              <p>Subtotal (3 items)</p>
              <p>$7000.00</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery fee</p>
              <p>$80.00</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>$50.00</p>
            </div>
            <div className="flex justify-between">
              <p>Total Discount</p>
              <p>-$100.00</p>
            </div>

            <div className="flex justify-between border-t pt-4 mt-2 font-semibold text-lg text-yellow-600">
              <p>Total</p>
              <p>$7030.00</p>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mt-6">
            <button className="text-yellow-600 text-sm flex items-center gap-1 mx-auto hover:underline">
              <FiDownload size={16} /> Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
