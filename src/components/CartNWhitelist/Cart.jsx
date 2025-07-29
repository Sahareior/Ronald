import React from 'react';
import Breadcrumb from '../others/Breadcrumb';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import TextArea from 'antd/es/input/TextArea';
import { Button, Input, Radio, Rate } from 'antd';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Cart = () => {
  const brands = ['Home Decor Masters', 'Modern Living Co.', 'Vintage Comfort', 'Elite Furniture', 'Elegant Furniture Co.', 'other' , 'hudai', 'bata'];

    const products = Array.from({ length: 4 }).map((_, index) => ({
  id: index + 1,
  title: `Sofa ${index + 1}`,
  brand: brands[index % brands.length],
  price: 1200 + index * 200,
  rating: (3 + (index % 3)),
  img: 'https://images.unsplash.com/photo-1577977404260-4bf12328b122?q=80&w=1169&auto=format&fit=crop'
}));

  const clicked = false
  return (
    <div className="bg-[#FAF8F2] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
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
      <button className="h-[48px] w-full bg-[#CBA135] text-white font-semibold hover:bg-yellow-600">
        Add New Address
      </button>
    </div>
  </div>
</div>

):          <div className="flex-1 p-5 bg-[#EAE7E1]">
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
              <textarea
                className="w-full border border-[#CBA135] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#CBA135] resize-none"
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
                <input placeholder="Promo code" className="w-full border border-[#D1D5DB] rounded-md px-4 h-[40px] placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]" />
                <Button className="h-[40px] text-white bg-[#2B2B2B] hover:bg-gray-200">Apply</Button>
              </div>
            </div>

            <div className="flex justify-between text-lg font-semibold mt-6">
              <h3>Total</h3>
              <h3 className='text-[#CBA135]'>$9170</h3>
            </div>

            {/* Checkout Buttons */}
            <div className="mt-6 flex flex-col gap-3">
<Link to='checkout1' className='w-full block'>
  <button className="h-[56px] rounded-md w-full bg-[#CBA135] text-white font-semibold hover:bg-yellow-600">
    Proceed to Checkout
  </button>
</Link>

              <button className="h-[56px] hover:bg-slate-100 border rounded-md border-gray-300">Save for Later</button>
            </div>
          </div>
<div className="bg-white p-4 py-8 rounded-lg shadow-sm space-y-3">
  <h3 className="text-lg font-semibold text-gray-800">Delivery Type</h3>
  <Radio.Group className="flex flex-col gap-4 custom-radio">
    <Radio value="standard">Standard</Radio>
    <Radio value="express">Express</Radio>
    <Radio value="pickup">Pickup</Radio>
  </Radio.Group>
</div>
</div>
        </div>
<div className='py-9'>
          <div className='flex py-9 justify-between '>
          <h4 className='popmed text-[30px]'>You may also need</h4>
          <h5 className='popbold text-[16px] text-[#CBA135]'>View All</h5>
        </div>

                  <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white  rounded-2xl shadow-md relative">
              <img src={product.img} alt={product.title} className="w-full rounded-t-2xl h-64 object-cover  mb-4" />
             <div className='px-4 space-y-2 pb-5'>
                 <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
  
                <div className='flex justify-between items-center gap-10'>
                                  <p className="text-lg text-[#CBA135] font-bold mb-3">${product.price}</p>
              <Button type="primary" block className="bg-yellow-600 max-w-[10rem] py-4 hover:bg-yellow-700">
                Add to Cart
              </Button>
                </div>
             </div>
              {/* Wishlist icon (top right) */}
            <div className="absolute top-2 right-2 text-red-600 w-6 h-6 flex items-center justify-center hover:text-red-500 bg-slate-200 rounded-full cursor-pointer text-lg">
  ♡
</div>

            </div>
          ))}
        </div>
</div>


      </div>


<div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-10 bg-[#E6E3DD] px-5 sm:px-10 md:px-10 lg:px-20 xl:px-60 py-12  w-full">
  {/* Left Block */}
  <div className="flex flex-col gap-4 w-full lg:max-w-md text-center lg:text-left">
    <div className="flex items-center justify-center lg:justify-start gap-3">
      <img src="/image/hand.png" alt="hand" className="w-10 h-10" />
      <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] popmed">Shopping Assistance</h2>
    </div>
    <p className="text-[14px] sm:text-[15px] md:text-[16px] popmed">
      Have a question before you checkout? We’re here to help!
    </p>
    <button className="flex items-center justify-center lg:justify-start gap-2 text-[#CBA135] text-[15px] sm:text-[16px] hover:underline">
      <IoChatbubblesOutline className="text-xl" /> Chat Now
    </button>
  </div>

  {/* Right Block */}
  <div className="flex flex-col gap-4 w-full lg:max-w-md text-center lg:text-right">
    <div className="flex items-center justify-center lg:justify-end gap-3">
      <img src="/image/hand.png" alt="hand" className="w-10 h-10" />
      <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] popmed">30- Day Returns</h2>
    </div>
    <p className="text-[14px] text-start sm:text-[15px] md:text-[16px] popmed">
      Not lovinging it? We offer return for most item within 30 Days delivery for a refund or store credit.
    </p>
    <button className="flex items-center justify-center lg:justify-end gap-2 text-[#CBA135] text-[15px] sm:text-[16px] hover:underline">
      Learn more
    </button>
  </div>
</div>
    </div>
  );
};

export default Cart;
