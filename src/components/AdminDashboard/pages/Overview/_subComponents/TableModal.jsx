import React from 'react';
import { Modal, Button } from 'antd';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TableModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={900}
        closable={false}
        className="rounded-lg"
      >
        <div className="p-6  space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl popbold">Order Details – #Wrioko240001</h2>
  
          </div>
<hr />
          <div className="space-x-2 flex justify-end">

            <p className='flex items-center bg-[#CBA135] text-white gap-2 text-sm px-2 rounded-md py-1'><FaEdit /> Edit</p>
            <p className='flex items-center gap-2 bg-[#F87171] px-2 text-sm rounded-md text-white'><FaTrash /> Delete</p>
           
            </div>
          {/* Order Summary */}
          <div className="border rounded-md p-4 bg-gray-50">
            <h3 className="text-[18px] popbold popbold mb-3">Order Summary</h3>
            <div className="grid grid-cols-3 gap-y-5 text-sm">
              <p className='flex flex-col  gap-2 text-[16px] popreg text-[#333333]'><span className="popmed text-sm text-[#666666]">Customer Name:</span> Fatiha jahan</p>
              <p className='flex flex-col gap-2 text-[16px] popreg text-[#333333]'><span className="popmed text-sm text-[#666666]">Email:</span> xyz@gmail.com</p>
              <p className='flex flex-col gap-2 text-[16px] popreg text-[#333333]'><span className="popmed text-sm text-[#666666]">Order Date:</span> July 15, 2025</p>
              <p className='flex flex-col gap-2 text-[16px] popreg text-[#333333]'><span className="popmed text-sm text-[#666666]">Order Status:</span> Processing</p>
              <p className='flex flex-col gap-2 text-[16px] popreg text-[#333333]'><span className="popmed text-sm text-[#666666]">Payment Method:</span> Mobile banking</p>
              <p className='flex flex-col gap-2 text-[16px] popreg text-[#333333]'><span className="popmed text-sm text-[#666666]">Payment Status:</span> Paid</p>
            </div>
            <div className='h-[0.8px] w-full bg-slate-300 my-6' />
            <div className="text-right flex justify-between text-lg text-[#666666] popbold ">Total: <span className='text-yellow-500 text-2xl'>$3290</span></div>
          </div>

          {/* Product Summary */}
          <div className="border rounded-md p-4 bg-white">
            <h3 className="text-[18px] popbold mb-6">Product Summary</h3>
            <div className="grid grid-cols-4 gap-x-4 font-semibold text-sm border-b pb-2">
              <p>Product</p>
              <p>Qty</p>
              <p>Price</p>
              <p>Subtotal</p>
            </div>
            <div className="grid grid-cols-4 gap-x-4 items-center mt-3 text-[16px] popmed">
              <div className="flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" className="w-12 h-12 rounded" />
                <span>Luxury Velvet Sectional Sofa</span>
              </div>
              <p>1</p>
              <p>$8,500</p>
              <p>$17,000</p>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border rounded-md p-4 bg-white">
            <h3 className="text-[18px] popbold mb-3">Shipping Information</h3>
            <div className="grid grid-cols-2 gap-y-5 text-sm">
              <p className='flex flex-col text-[16px] text-[#2B2B2B]'><span className="text-[#555555] text-[14px] ">Delivery Address:</span> xyz xyz xyz</p>
              <p className='flex flex-col text-[16px] text-[#2B2B2B]'><span className="text-[#555555] text-[14px] ">Delivery Option:</span> Home Delivery</p>
              <p className='flex flex-col text-[16px] text-[#2B2B2B]'><span className="text-[#555555] text-[14px] ">Expected Delivery:</span> July 20, 2025</p>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-right">
            <Button type="link" className="text-yellow-500 font-medium">
              ⬇ Download
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TableModal;
