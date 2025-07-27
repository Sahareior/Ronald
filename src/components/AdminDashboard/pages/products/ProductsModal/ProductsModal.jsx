import React, { useState } from 'react';
import { Button, Modal } from 'antd';


const ProductsModal = ({ isModalOpen, setIsModalOpen }) => {
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
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={900}
      >
        <div className="bg-[#f9f8f6] rounded-md w-full  p-4 mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center border-b-2 border-[#E5E7EB] px-4 pb-2">
            <h2 className="text-2xl popbold text-gray-900">Customer Details</h2>
          </div>

          <div className='flex py-4 justify-end items-center gap-2'>
            <Button className='bg-[#CBA135] text-white'>Approve</Button>
            <Button className='bg-[#F87171] text-white'>Reject</Button>
          </div>

          {/* Content */}
          <div className="p-6 bg-white shadow-sm rounded mt-4">
            <h3 className="text-lg popbold text-gray-700 mb-4">Customer</h3>

            <div className="grid grid-cols-3 gap-y-4 text-sm text-gray-700">
              <div>
                <p className="popmed text-sm">Product Name</p>
                <p className=" flex text-sm popreg items-center gap-1">
                  <span className="text-red-500 text-lg">●</span> Fathiha jahan
                </p>
              </div>
              <div>
                <p className="popmed text-sm">Email</p>
                <p className="text-sm popreg">xyz@gmail.com</p>
              </div>
              <div>
                <p className="popmed text-sm">Signup Date</p>
                <p className="text-sm popreg">July 15, 2025</p>
              </div>

              <div>
                <p className="popmed text-sm">Customer ID</p>
                <p className="text-blue-600">1234567</p>
              </div>
              <div>
                <p className="popmed text-sm">Last activity</p>
                <p className="text-sm popreg">1 day ago</p>
              </div>
              <div>
                <p className="popmed text-sm">Status</p>
                <p className="text-green-600 font-semibold">Active</p>
              </div>

              <div>
                <p className="popmed text-sm">Total Orders</p>
                <p className="text-sm popreg">03</p>
              </div>
              <div>
                <p className="popmed text-sm">Total Spend</p>
                <p className="text-sm popreg">$17,000</p>
              </div>
              <div>
                <p className="font-medium"> </p>
                <button
                  className="text-yellow-600 underline font-medium"
                  onClick={() => setIsOrderHistoryOpen(true)}
                >
                  Order History
                </button>
              </div>
                            <div>
                <p className="popmed text-sm">Total Orders</p>
                <p className="text-sm popreg">03</p>
              </div>
                            <div>
                <p className="popmed text-sm">Total Orders</p>
                <p className="text-sm popreg">03</p>
              </div>
                            <div>
                <p className="popmed text-sm">Total Orders</p>
                <p className="text-sm popreg">03</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>


    </>
  );
};

export default ProductsModal;
