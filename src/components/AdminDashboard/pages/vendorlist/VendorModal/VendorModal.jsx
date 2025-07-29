import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { LiaStarSolid } from "react-icons/lia";


const VendorModal = ({ isModalOpen, setIsModalOpen }) => {
  const [isOrderHistoryOpen, setIsOrderHistoryOpen] = useState(false);

  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>

      {/* Customer Details Modal */}
      <Modal
        open={isModalOpen}
        title ={
          <div className='px-12 py-9'>
            <p className='text-2xl popbold'>Vendor Details</p>
          </div>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={900}
      >
        <div className="bg-[#f9f8f6] rounded-md w-full max-w-3xl  pb-10 mx-auto">
          {/* Header */}

          {/* Content */}
          <div className="p-6 bg-white shadow-sm rounded mt-4">
            <h3 className="text-lg popbold text-gray-700 mb-4">Vendor</h3>

            <div className="grid grid-cols-3 gap-y-4 text-sm text-gray-700">
              <div>
                <p className="popmed text-[#666666]">Vendor Name</p>
                <p className="text-[#0F0F0F] flex popreg text-[16px] items-center gap-1">
                   Home Decor Master
                </p>
              </div>
              <div>
                <p className="popmed text-[#666666]">Email</p>
                <p className="text-[#666666] popreg text-[16px]">xyz@gmail.com</p>
              </div>
              <div>
                <p className="popmed text-[#666666]">Signup Date</p>
                <p className="text-gray-800 popreg text-[16px]">July 15, 2025</p>
              </div>

              <div>
                <p className="popmed text-[#666666]">Vendor ID</p>
                <p className="text-[#0F0F0F] popreg text-[16px]">1234567</p>
              </div>
              <div>
                <p className="popmed text-[#666666]">Product</p>
                <p className="text-gray-800 popreg text-[16px]">120</p>
              </div>
              <div>
                <p className="popmed text-[#666666]">Status</p>
                <p className="text-green-600 font-semibold popreg text-[16px]">Active</p>
              </div>

              <div>
                <p className="popmed text-[#666666]">Total Orders</p>
                <p className="text-gray-800 popreg text-[16px]">03</p>
              </div>
              <div>
                <p className="popmed text-[#666666]">Total Delivery</p>
                <p className="text-gray-800 popreg text-[16px]">170</p>
              </div>
              <div>
                <p className="popmed text-[#666666]"> Rating</p>
                <button
                  className="text-yellow-600 flex items-center gap-1 underline font-medium"
                  onClick={() => setIsOrderHistoryOpen(true)}
                >
                 <LiaStarSolid size={16} /> <span className='text-black text-sm popreg'>2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

    </>
  );
};

export default VendorModal;
