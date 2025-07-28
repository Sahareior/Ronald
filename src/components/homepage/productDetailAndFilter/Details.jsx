import { Button, Rate, Tag } from 'antd';
import React, { useState } from 'react';
import { FaLongArrowAltDown } from "react-icons/fa";
import Customers from '../_components/Customers';
import { LiaStarSolid } from 'react-icons/lia';
import Similier from './_components/Similier';
import PreviouslyBought from './_components/PreviouslyBought';
import Breadcrumb from '../../others/Breadcrumb';
import DetailsModal from './_components/DetailsModal';

const Details = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const productSpecs = [
  { label: 'Dimensions (W×H×D)', value: '88" × 35" × 38"' },
  { label: 'Assembly Required', value: 'Minimal (Legs only)' },
  { label: 'Material', value: 'Premium Velvet, Hardwood Frame' },
  { label: 'Warranty', value: '2 Years Limited' },
  { label: 'Color', value: 'Navy Blue' },
  { label: 'Care Instructions', value: 'Professional Cleaning' },
  { label: 'Weight', value: '145 lbs' },
  { label: 'Country of Origin', value: 'Italy' },
];

  return (
<div className='bg-[#FAF8F2] '>
          <div className='px-40'>

          </div>
        <div className="p-6 w-full px-40 mx-auto rounded-lg">
      <div className="flex flex-col md:flex-row  gap-9">
        {/* Product Image */}
        <div className="flex-1">
          <img
            className="w-full  mx-auto h-[550px] object-cover md:mx-0 rounded-lg"
            src="/image/featured/img1.png"
            alt="Luxury Velvet Sectional Sofa"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-9">
          <div>
            <h2 className="text-3xl popbold text-gray-800">Luxury Velvet Sectional Sofa</h2>
            <h3 className="text-lg popreg text-gray-500 mb-1">by Elegant Furniture Co.</h3>
            <div className='flex mt-8 gap-2'>
                <Rate defaultValue={4} disabled className="text-yellow-500" /> 
                <p>•</p>
                <p className='popreg'>127 reviews</p>
            </div>
          </div>

          <h3 className="text-4xl popbold text-[#CBA135] font-bold">$3000.00</h3>

          {/* Color Options */}
          <div>
            <h4 className="text-md popmed mb-1 text-gray-700">Color</h4>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-fuchsia-500 border-2 border-gray-300 cursor-pointer" />
              <div className="w-10 h-10 rounded-lg bg-[#1E40AF] border-2 border-gray-300 cursor-pointer" />
              <div className="w-10 h-10 rounded-lg bg-[#374151] border-2 border-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Size Options */}
          <div>
            <h4 className="text-sm popmed mb-1 text-gray-700">Size</h4>
            <div className="flex gap-3 popmed flex-wrap">
              <Button className="border-gray-300 bg-[#CBA135] px-12 text-white">3 Seater</Button>
              <Button className="border-gray-300 px-12">2 Seater</Button>
              <Button className="border-gray-300 px-12">L Shape</Button>
            </div>
          </div>

          {/* Stock & Wishlist */}
          <div className="flex justify-between max-w-[28rem] items-center">
            <div className='flex gap-2'>
                            <Tag className='popmed' color="green">In Stock</Tag>
            <p className="text-sm popreg text-gray-400">* Only 3 left</p>
            </div>
            <p className="text-sm text-[#CBA135] popreg cursor-pointer hover:underline">Move to Wishlist</p>
          </div>
          

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Button type="primary" className="bg-yellow-600 px-20 popbold rounded-xl h-[56px] hover:bg-yellow-700">
              Add to Cart
            </Button>
            <Button className="border-yellow-600 px-20 h-[56px] popbold rounded-xl text-white bg-[#2B2B2B]">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

       <div className='mt-24'>
        {/* description */}
       <div className=''>
         <p className='border-b-2 text-[#CBA135] text-[16px] popmed border-[#CBA135] w-24'>Description</p>
         <div className='w-full -mt-1 shadow-md h-1' />
       </div>
       <div className='p-9 mt-7 bg-white rounded-2xl shadow-xl'>
        <h2 className='text-[24px] popbold mb-5'>Product Description</h2>
        <div className='space-y-2 popreg text-[#666666]'>
            <p>Experience ultimate comfort and sophistication with our Luxury Velvet Sectional Sofa. Crafted with premium velvet upholstery and a solid hardwood frame, this piece combines durability with elegance.</p>
            <p>Experience ultimate comfort and sophistication with our Luxury Velvet Sectional Sofa. Crafted with premium velvet upholstery and a solid hardwood frame, this piece combines durability with elegance.</p>
            <p>Experience ultimate comfort and sophistication with our Luxury Velvet Sectional Sofa. Crafted with premium velvet upholstery and a solid hardwood frame, this piece combines durability with elegance.</p>
        </div>
       </div>
    </div>
       <div className='mt-24'>
        {/* description */}
       <div className=''>
         <div className='flex justify-between'>
            <p className='border-b-2 text-[#CBA135] text-[16px] popmed border-[#CBA135] w-24'>Specifications</p>
            <p className=' w-24 text-[#CBA135] flex gap-2 justify-center items-center font-semibold'><FaLongArrowAltDown size={18} /> Download </p>
         </div>
         <div className='w-full -mt-1 shadow-md h-1' />
       </div>
       {/* ......................... */}
<div className="p-6 md:p-8 mt-7 bg-white rounded-2xl shadow-xl">
  <h2 className="text-2xl popbold mb-6">Product Specifications</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4  pt-5">
    {productSpecs.map((item, index) => (
      <div key={index} className="flex justify-between  border-b-2 items-baseline py-2.5">
        <span className="popmed  text-sm md:text-base">{item.label}</span>
        <span className="text-[#666666] popreg text-sm md:text-base text-right max-w-[60%]">
          {item.value}
        </span>
      </div>
    ))}
  </div>
</div>
    {/* ................. */}
    </div>


<div className='mt-24'>
               <div className=''>
         <div className='flex popmed w-full justify-between'>
            <p className='border-b-2 text-[#CBA135] border-[#CBA135] w-36'>Review (127)</p>
            <p onClick={()=> setIsModalOpen(true)} className='text-[#CBA135] hover:text-yellow-700 cursor-pointer popbold w-36'>Write a Review</p>
         </div>
         <div className='w-full -mt-1 shadow-md h-1' />
       </div>
       {/* reviews */}
<div className='grid grid-cols-3 gap-7 mt-10 justify-items-center'>
                    {[1,2,3].map((item, idx) => (
                        <div
                            key={idx}
                            className=" w-full  p-6  bg-[#FFFFFF]  transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    className="w-12 h-12 object-cover rounded-full"
                                    src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60"
                                    alt="Customer profile"
                                />
                                <div>
                                    <h4 className="popreg text-[16px] text-gray-800">Sahareior Sijan</h4>
                                    <div className="flex gap-1 text-[14px] popreg text-[#CBA135]">
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#4B5563] popreg  mb-4">
                                “Absolutely love my new sofa! The quality is exceptional and it fits perfectly in my living room.”
                            </p>
                            <img
                                className="w-16 h-16 object-cover rounded-lg "
                                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60"
                                alt="Product"
                            />
                        </div>
                    ))}
</div>
</div>
    </div>
   <div>
    <div className=' px-40 mt-24'>
                       <div className=''>
         <div className='flex justify-between'>
            <p className='border-b-2 text-[#CBA135] popmed border-[#CBA135] w-36'>You also bought</p>
            <p className='text-[#CBA135] popbold w-24'>View all</p>
         </div>
         <div className='w-full -mt-1 shadow-md h-1' />
       </div>
        <Similier />
    </div>
    <div className=' px-40 mt-24'>
                       <div className=''>
         <div className='flex justify-between'>
            <p className='border-b-2 text-[#CBA135] popmed border-[#CBA135] w-36'>Compare Similar</p>
            <p className=' w-24 text-[#CBA135] font-semibold'>View all</p>
         </div>
         <div className='w-full -mt-1 shadow-md h-1' />
       </div>
        <PreviouslyBought />
    </div>
   </div>
   <DetailsModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
</div>
  );
};

export default Details;
