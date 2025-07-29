import React, { useState } from 'react';
import Breadcrumb from '../others/Breadcrumb';
import { MdOutlineDone } from 'react-icons/md';
import { Button } from 'antd';
import { BiCopy } from "react-icons/bi";
import { FaArrowDownLong } from 'react-icons/fa6';
import CustomModal from './modal/CustomModal';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
  const products = [
    {
      name: 'Luxury Velvet Sectional Sofa',
      price: 3000,
      qty: 1,
    },
    {
      name: 'Luxury Velvet Sectional Sofa',
      price: 3000,
      qty: 1,
    },
    {
      name: 'Luxury Velvet Sectional Sofa',
      price: 3000,
      qty: 1,
    },
  ];



  const handleCopy = (text) => {
  navigator.clipboard.writeText(text);
 
};


  return (
<div className='bg-[#FAF8F2] '>
        <div className='mx-40  pb-10'>
       <div className=''>
         <Breadcrumb />
       </div>
      <div className='max-w-6xl bg-white mx-auto px-4'>

        <div className=' max-w-3xl mx-auto rounded-2xl p-8 mt-6'>
          <div className='flex flex-col items-center justify-center gap-3 mb-6'>
            <span className='h-12 w-12 flex items-center justify-center bg-[#CBA135] rounded-full text-white text-lg'>
              <MdOutlineDone />
            </span>
            <div>
              <h3 className='text-2xl text-center font-bold'>Order Placed Successfully!</h3>
              <p className='text-gray-600 text-center'>Thank you for your order.</p>
            </div>
          </div>

          <div className='mb-6 w-6/12'>
            <h4 className='text-lg py-5 font-semibold'>Order Details</h4>
            <div className='flex justify-between text-sm text-gray-700 mb-2'>
              <span>Order ID:</span>
              <span className='font-medium flex justify-center items-center gap-2'>#Wriko240001 <BiCopy onClick={()=> handleCopy("#Wriko240001")} className='cursor-pointer' size={18} /></span>
            </div>
            <div className='flex justify-between text-sm text-gray-700 mb-2'>
              <span>Estimated Delivery</span>
              <span className='font-medium'>Jul 20-07, 2025</span>
            </div>
          </div>

          <hr className='my-4' />

          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Product List</h4>
            {products.map((item, index) => (
              <div key={index} className='flex justify-between items-center  p-1 rounded-xl'>
                <div>
                  <p className='font-medium'>{item.name}</p>
                  <p className='text-sm text-gray-600'>Qty: {item.qty}</p>
                </div>
                <p className='text-right font-semibold'>${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>

          <hr className='my-6' />

          <div className='space-y-2 text-sm text-gray-800'>
            <div className='flex justify-between'>
              <span>Subtotal (3 items)</span>
              <span>$9000.00</span>
            </div>
            <div className='flex justify-between'>
              <span>Delivery Fee</span>
              <span>$80.00</span>
            </div>
            <div className='flex justify-between'>
              <span>Tax</span>
              <span>$50.00</span>
            </div>
            <div className='flex justify-between '>
              <span>Total Discount</span>
              <span>-$100.00</span>
            </div>
          </div>

          <hr className='my-6' />

          <div className='flex justify-between items-center text-lg font-bold'>
            <span>Total</span>
            <span className='text-[#CBA135]'>$9030.00</span>
          </div>

          <div className='mt-14 flex flex-col justify-center items-center   gap-4'>
            <p className='flex justify-center text-[#CBA135] text-[16px] items-center gap-1'>  <FaArrowDownLong  /> Download </p>
            <button onClick={()=> setIsModalOpen(true)} type='primary' className='bg-[#CBA135] rounded-md hover:bg-yellow-600 w-60 h-[46px] text-white px-12 py-2'>
              Track My Order
            </button>
  <Link to='/'>
            <Button type='default' className=' w-60 h-[46px] px-20 py-2'>
              Continue Shopping
            </Button>
  </Link>
            <p className='text-[16px]'>“A confirmation has been sent to your email and WhatsApp.”</p>
          </div>
        </div>
      </div>
    </div>
    <CustomModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
</div>
  );
};

export default ConfirmationPage;
