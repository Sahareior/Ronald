import { Button } from 'antd';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { GoHeart } from 'react-icons/go';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    return (
 <div className="p-20 bg-[#FAF8F2] space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-[30px] popbold font-extrabold">Featured Products</h2>
          <p className="text-[18px] text-gray-600">
            Explore our curated furniture categories
          </p>
        </div>
      <Link to='filter'>
        <h3 className="text-[#CBA135] font-medium cursor-pointer hover:underline">
          View All
        </h3>
      </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product Card */}

{
  [1,2,3,4].map(items => (
    <div>
        <div className="bg-white rounded-xl  transition relative">
          {/* Wishlist Icon */}
<div className="absolute top-3 right-3 rounded-full p-2 shadow-sm cursor-pointer transition text-white bg-white/10 backdrop-blur-md hover:text-red-400">
  <AiFillHeart size={18} />
</div>


          {/* Image */}
       <Link  to='details'>
          <img
            src="/image/featured/img1.png"
            alt="Glass Coffee Table"
            className="w-full h-[192px] object-cover rounded-md mb-4"
          />

       </Link>
<div className='p-5'>
              {/* Title + Subtitle */}
          <h2 className="text-[16px] popbold text-gray-800">
            Glass Coffee Table
          </h2>
          <p className="text-sm popreg text-gray-500 mb-3">Round, Chrome Base</p>

          {/* Price + Button */}
          <div className="flex justify-between items-center">
            <h4 className="text-[#CBA135] popbold text-[16px]">XAF 449</h4>
            <button className="bg-[#CBA135] popbold text-white border-none px-4 py-1 rounded">
              Add to Cart
            </button>
          </div>
</div>
        </div>
</div>
  ))
}
      </div>
    </div>
    );
};

export default FeaturedProducts;