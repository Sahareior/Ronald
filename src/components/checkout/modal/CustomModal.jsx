import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';

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
      <Button type='primary' onClick={showModal}>
        Open Modal
      </Button>

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
            <label htmlFor='order-id' className='block text-sm font-medium text-gray-700 mb-2'>
              Enter your Order ID
            </label>
            <Input
              id='order-id'
              placeholder='#Wriko240001'
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className='rounded-md'
            />
          </div>

          <Button
            type='primary'
            className='bg-[#CBA135] w-full mt-4'
            size='large'
            onClick={() => {
              // Add tracking logic here
              console.log('Tracking Order:', orderId);
              handleOk();
            }}
          >
            Track My Order
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;
