import React from 'react';
import Breadcrumb from '../others/Breadcrumb';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import TextArea from 'antd/es/input/TextArea';
import { Button, Input, Radio } from 'antd';

const Cart = () => {
  const clicked = false
  return (
    <div className="bg-[#FAF8F2] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb />

        <h2 className="text-3xl font-bold mt-4">My Cart</h2>
        <p className="text-gray-600 mb-8">Review your selected items before checkout</p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Cart Items */}
{
  clicked? (<div className="bg-gray-200 w-full sm:w-2/3 p-6 rounded-xl shadow-sm space-y-4">
  <div className="max-w-md space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-800">Sahareior Sijan</h3>
      <button className="text-blue-600 hover:text-blue-800">
        <AiOutlineEdit size={20} />
      </button>
    </div>

    <div>
      <h4 className="text-md font-medium text-gray-700">Home: Abc Street, Badda</h4>
      <p className="text-sm text-gray-600 mt-1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ratione minus commodi.
      </p>
    </div>

    <div className="w-full">
      <Button className="h-[48px] w-full bg-[#CBA135] text-white font-semibold hover:bg-yellow-600">
        Add New Address
      </Button>
    </div>
  </div>
</div>

):          <div className="flex-1 p-5 bg-[#E5E7EB]">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl mt-6 p-5 flex items-center gap-6 shadow-sm"
              >
                <img
                  src="/image/featured/img1.png"
                  alt="Product"
                  className="h-32 w-32 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold">Luxury Velvet Sectional Sofa</h2>
                  <p className="text-sm text-gray-500">by Elegant Furniture Co.</p>
                  <p className="text-xl font-bold text-[#CBA135] mt-2">$3000.00</p>
                </div>

                {/* Quantity + Remove */}
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full hover:bg-gray-100">
                    <AiOutlineMinus size={16} />
                  </button>
                  <span className="px-2 font-medium">1</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full hover:bg-gray-100">
                    <AiOutlinePlus size={16} />
                  </button>
                  <button className="ml-3 text-gray-400 hover:text-red-500">
                    <AiOutlineClose size={20} />
                  </button>
                </div>
              </div>
            ))}

            {/* Delivery Instructions */}
            <div className="bg-white rounded-2xl mt-6 p-6 shadow-sm">
              <h4 className="text-base font-medium text-gray-800 mb-2">
                Delivery Instructions <span className="text-sm text-gray-500">(optional)</span>
              </h4>
              <TextArea
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={4}
                placeholder="Add any specific delivery notes here..."
              />
            </div>
          </div>
}

          {/* Right: Order Summary */}
<div className='flex flex-col gap-12'>
            <div className="w-full lg:w-[350px] bg-white p-6 rounded-xl shadow-sm h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal (3 items)</span>
                <span>$9000</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$50</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$120</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mt-5">
              <div className="flex gap-2">
                <Input className="flex-1 h-[50px]" placeholder="Promo code" />
                <Button className="h-[50px] bg-gray-100 hover:bg-gray-200">Apply</Button>
              </div>
            </div>

            <div className="flex justify-between text-lg font-semibold mt-6">
              <h3>Total</h3>
              <h3 className='text-[#CBA135]'>$9170</h3>
            </div>

            {/* Checkout Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <Button className="h-[56px] bg-[#CBA135] text-white font-semibold hover:bg-yellow-600">
                Proceed to Checkout
              </Button>
              <Button className="h-[56px] border-gray-300">Save for Later</Button>
            </div>
          </div>
 <div className="bg-white p-4 py-8 rounded-lg shadow-sm space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">Delivery Type</h3>
      <Radio.Group className="flex flex-col  gap-4">
        <Radio value="standard">Standard</Radio>
        <Radio value="express">Express</Radio>
        <Radio value="pickup">Pickup</Radio>
      </Radio.Group>
    </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
