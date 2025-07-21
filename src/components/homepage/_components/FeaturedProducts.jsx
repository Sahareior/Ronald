import { Button } from 'antd';
import React from 'react';

const FeaturedProducts = () => {
    return (
 <div className="p-20 bg-[#FAF8F2] space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-[30px] font-bold">Featured Products</h2>
          <p className="text-[18px] text-gray-600">
            Explore our curated furniture categories
          </p>
        </div>
        <h3 className="text-[#CBA135] font-medium cursor-pointer hover:underline">
          View All
        </h3>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product Card */}
        <div className="bg-white rounded-xl  transition relative">
          {/* Wishlist Icon */}
          <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-sm cursor-pointer hover:text-[#CBA135] transition">
     
          </div>

          {/* Image */}
          <img
            src="/image/featured/img1.png"
            alt="Glass Coffee Table"
            className="w-full h-[192px] object-cover rounded-md mb-4"
          />

<div className='p-5'>
              {/* Title + Subtitle */}
          <h2 className="text-[16px] font-semibold text-gray-800">
            Glass Coffee Table
          </h2>
          <p className="text-sm text-gray-500 mb-3">Round, Chrome Base</p>

          {/* Price + Button */}
          <div className="flex justify-between items-center">
            <h4 className="text-[#CBA135] font-bold text-[16px]">XAF 449</h4>
            <Button className="bg-[#CBA135] text-white border-none px-4 py-1 rounded">
              Add to Cart
            </Button>
          </div>
</div>
        </div>
        <div className="bg-white rounded-xl  transition relative">
          {/* Wishlist Icon */}
          <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-sm cursor-pointer hover:text-[#CBA135] transition">
     
          </div>

          {/* Image */}
          <img
            src="/image/featured/img1.png"
            alt="Glass Coffee Table"
            className="w-full h-[192px] object-cover rounded-md mb-4"
          />

<div className='p-5'>
              {/* Title + Subtitle */}
          <h2 className="text-[16px] font-semibold text-gray-800">
            Glass Coffee Table
          </h2>
          <p className="text-sm text-gray-500 mb-3">Round, Chrome Base</p>

          {/* Price + Button */}
          <div className="flex justify-between items-center">
            <h4 className="text-[#CBA135] font-bold text-[16px]">XAF 449</h4>
            <Button className="bg-[#CBA135] text-white border-none px-4 py-1 rounded">
              Add to Cart
            </Button>
          </div>
</div>
        </div>
        <div className="bg-white rounded-xl  transition relative">
          {/* Wishlist Icon */}
          <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-sm cursor-pointer hover:text-[#CBA135] transition">
     
          </div>

          {/* Image */}
          <img
            src="/image/featured/img1.png"
            alt="Glass Coffee Table"
            className="w-full h-[192px] object-cover rounded-md mb-4"
          />

<div className='p-5'>
              {/* Title + Subtitle */}
          <h2 className="text-[16px] font-semibold text-gray-800">
            Glass Coffee Table
          </h2>
          <p className="text-sm text-gray-500 mb-3">Round, Chrome Base</p>

          {/* Price + Button */}
          <div className="flex justify-between items-center">
            <h4 className="text-[#CBA135] font-bold text-[16px]">XAF 449</h4>
            <Button className="bg-[#CBA135] text-white border-none px-4 py-1 rounded">
              Add to Cart
            </Button>
          </div>
</div>
        </div>
        <div className="bg-white rounded-xl  transition relative">
          {/* Wishlist Icon */}
          <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-sm cursor-pointer hover:text-[#CBA135] transition">
     
          </div>

          {/* Image */}
          <img
            src="/image/featured/img1.png"
            alt="Glass Coffee Table"
            className="w-full h-[192px] object-cover rounded-md mb-4"
          />

<div className='p-5'>
              {/* Title + Subtitle */}
          <h2 className="text-[16px] font-semibold text-gray-800">
            Glass Coffee Table
          </h2>
          <p className="text-sm text-gray-500 mb-3">Round, Chrome Base</p>

          {/* Price + Button */}
          <div className="flex justify-between items-center">
            <h4 className="text-[#CBA135] font-bold text-[16px]">XAF 449</h4>
            <Button className="bg-[#CBA135] text-white border-none px-4 py-1 rounded">
              Add to Cart
            </Button>
          </div>
</div>
        </div>
      </div>
    </div>
    );
};

export default FeaturedProducts;