import React from 'react';
import Breadcrumb from '../others/Breadcrumb';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

const Cart = () => {
  return (
    <div className="bg-[#FAF8F2] min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb />
        <h2 className="text-[30px] font-bold mt-4">My Cart</h2>
        <p className="text-gray-600 mb-8">Review your selected items before checkout</p>

        {/* Cart Item */}
<div>
            <div className="bg-[#E5E7EB] rounded-xl p-5 flex items-center gap-6 relative">
          <img src="/image/featured/img1.png" alt="" className="h-32 w-32 object-cover rounded" />

          <div className="flex-1">
            <h2 className="text-lg font-semibold">Luxury Velvet Sectional Sofa</h2>
            <p className="text-sm text-gray-500">by Elegant Furniture Co.</p>
            <p className="text-xl font-bold text-[#CBA135] mt-2">$3000.00</p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center bg-white border rounded hover:bg-gray-200">
              <AiOutlineMinus size={16} />
            </button>
            <span className="px-2 font-medium">1</span>
            <button className="w-8 h-8 flex items-center justify-center bg-white border rounded hover:bg-gray-200">
              <AiOutlinePlus size={16} />
            </button>
          </div>

          {/* Remove Button */}
          <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
            <AiOutlineClose size={20} />
          </button>
        </div>
    {/* adfaughdfu */}
    
</div>
      </div>
    </div>
  );
};

export default Cart;
