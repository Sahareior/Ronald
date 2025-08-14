import { Button } from 'antd';
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import Breadcrumb from '../others/Breadcrumb';
import { MdDelete } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';





const Checkout1 = () => {
  const location = useLocation();
  const { 
    cartItems = [], 
    subtotal = 0, 
    deliveryFee = 0, 
    tax = 0, 
    total = 0,
    coupon = null 
  } = location.state || {};

  // Calculate total items count
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  console.log(cartItems,"asda")

  return (
    <div className='bg-[#FAF8F2] pb-10'>
      <div className='mx-40'>
        <div className='pb-5 space-y-3'>
          <Breadcrumb />
          <h3 className='text-[30px] popbold'>Checkout</h3>
          <p>Almost there! Confirm your details to complete your order</p>
        </div>
        
        <div className='flex gap-6'>
          {/* Address Section */}
          <div className="bg-[#EAE7E1] p-6 rounded-xl shadow-sm space-y-4 flex-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Sahareior Sijan</h3>
                <div className="text-blue-600 flex gap-2 hover:text-blue-800">
                  <AiOutlineEdit className='text-[#CBA135]' size={20} />
                  <MdDelete className='text-[#F87171]' size={20} />
                </div>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-700">Home: Abc Street, Badda</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ratione minus commodi.
                </p>
              </div>

              <div className="w-full">
                <Link to='/checkout'>
                  <button className="h-[48px] w-full rounded-md bg-[#CBA135] text-white font-semibold hover:bg-yellow-600">
                    Add New Address
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h3 className="text-lg popbold font-semibold mb-4">Order Summary</h3>

            {/* Order Items */}
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex justify-between gap-4">
                  <div className="flex gap-4">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-16 h-16 object-cover rounded-md" 
                    />
                    <div>
                      <h4 className="text-sm popmed">{item.title}</h4>
                      <p className="text-xs popreg text-gray-500">by {item.brand}</p>
                      <p className="text-xs popreg text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-sm popreg text-[#666666] font-semibold text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="border-t border-gray-300 popreg mt-6 pt-4 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              {coupon && (
                <div className="flex justify-between">
                  <span>Total Discount ({coupon.code})</span>
                  <span className="text-green-600">-${coupon.discount.toFixed(2)}</span>
                </div>
              )}
            </div>
            
            <div className='h-[0.8px] mt-2 bg-black w-full' />
            
            {/* Total */}
            <div className="flex justify-between items-center mt-4">
              <h4 className="text-base popbold font-semibold">Total</h4>
              <h4 className="text-xl font-bold text-[#CBA135]">${total.toFixed(2)}</h4>
            </div>

            {/* Place Order Button */}
            <button className="w-full bg-[#CBA135] popbold text-white font-semibold text-sm py-3 mt-5 rounded-md hover:bg-yellow-600">
              Place Order
            </button>

            {/* Policy Note */}
            <p className="text-[11px] popreg text-center text-gray-500 mt-2">
              By clicking Place Order, you accept WRIKXO's <br />
              <a href="#" className="text-[#CBA135] underline">return & shipping policies</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout1;