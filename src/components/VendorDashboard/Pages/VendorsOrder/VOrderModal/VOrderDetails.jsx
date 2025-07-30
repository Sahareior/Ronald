import { Avatar, Button, Popover } from 'antd';
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const VOrderDetails = () => {
    const [open, setOpen] = useState(false);

     const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = newOpen => {
    setOpen(newOpen);
  };
  return (
    <div className=" p-2 rounded-md   space-y-6 text-sm text-gray-700">
      
      {/* Customer Summary */}
      <div className='flex justify-end items-center gap-4'>
         </div>
      <div className='bg-white p-6 shadow-sm'>
        <h3 className="text-lg popbold font-semibold text-black mb-4">Order Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className=" popmed text-[#666666] mb-1">Customer Name</p>
            <div className="flex items-center gap-2 text-[16px] popreg font-medium">
              <Avatar
                src="https://images.unsplash.com/profile-1451876131683-25cba7051674?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60"
                className="w-6 h-6"
              />
              Fatiha Jahan
            </div>
          </div>
  
          <div>
            <p className=" popmed text-[#666666] mb-1">Order Date</p>
            <p className="font-medium text-[16px] popreg">July 15, 2025</p>
          </div>
          <div>
            <p className=" popmed text-[#666666] mb-1">Order Status</p>
            <p className="font-medium text-[16px] popreg">Processing</p>
          </div>

          <div>
            <p className="popmed text-[#666666] mb-1">Payment Status</p>
            <p className="font-medium text-[16px] popreg">Paid</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5 pt-3 border-t">
          <h4 className="text-base popbold font-semibold">Total</h4>
          <h5 className="text-lg font-bold text-yellow-600">$3578</h5>
        </div>
      </div>

      {/* Product Summary */}
      <div className='py-9 shadow-sm bg-white p-5'>
        <h3 className="text-lg font-semibold text-black mb-4">Product Summary</h3>
        <div className="grid grid-cols-4 font-semibold text-gray-600 text-sm border-b pb-2">
          <span>Product</span>
          <span className="text-center">Qty</span>
          <span className="text-center">Price</span>
          <span className="text-right">Subtotal</span>
        </div>
        <div className="grid grid-cols-4 items-center text-sm mt-3">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="product"
              className="w-12 h-12 rounded object-cover"
            />
            <span className="popbold text-[13px] text-[#333333]">Luxury Velvet Sectional Sofa</span>
          </div>
          <span className="text-center">1</span>
          <span className="text-center">$8,500</span>
          <span className="text-right font-semibold">$17,000</span>
        </div>
      </div>

      {/* Shipping Info */}

      
    </div>
  );
};

export default VOrderDetails;
