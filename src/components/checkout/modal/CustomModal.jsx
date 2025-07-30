import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';

const CustomModal = ({ isModalOpen, setIsModalOpen }) => {
  const [orderId, setOrderId] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    // Optional: Add validation here before closing
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
        closable
       
        aria-labelledby='track-order-title'
        bodyStyle={{ padding: '24px' }}
      >
        <div className=' p-16 rounded-lg'>
<div className='mb-4'>
              <h3 id='track-order-title' className='text-[20px] font-semibold text-gray-800 mb-1'>
            Track Your Order
          </h3>
    <div className='h-[2px] w-full bg-slate-400' />
</div>
          <div className='mb-4'>
            <label htmlFor='order-id' className='block text-[16px] popmed text-[#666666] mb-2'>
              Enter your Order ID
            </label>
           <input
  id="order-id"
  type="text"
  placeholder="#Wriko240001"
  value={orderId}
  onChange={(e) => setOrderId(e.target.value)}
  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-0 focus:border-gray-400 custom-input"
/>

          </div>

    <Link to='/order-track'>
              <button
            type='primary'
            className='bg-[#CBA135] w-full popbold text-[16px] py-3 text-white rounded-md mt-4'
            size='large'
            onClick={() => {
              // Add tracking logic here
              console.log('Tracking Order:', orderId);
              handleOk();
            }}
          >
            Track My Order
          </button>
    </Link>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
