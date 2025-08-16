import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import OrderHistory from './OrderHistory';

const CustomerModal = ({ isModalOpen, setIsModalOpen }) => {
  const [isOrderHistoryOpen, setIsOrderHistoryOpen] = useState(false);

  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>

      {/* Customer Details Modal */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={900}
      >
        <div className="bg-[#f9f8f6] rounded-md pb-12 pt-5 w-full border-[#E5E7EB] p-4 mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center border-b-2 border-[#E5E7EB] px-4  pb-5">
            <h2 className="text-2xl popbold text-gray-900">Customer Details</h2>
          </div>

          {/* Content */}
          <div className="p-6 bg-white shadow-sm rounded mt-4">
            <h3 className="text-lg popbold popmed mb-4">Customer</h3>

            <div className="grid grid-cols-3 gap-y-4 text-sm text-gray-700">
              <div>
                <p className="text-[#666666] popmed">Customer Name</p>
                <p className="text-gray-800 flex items-center gap-1">
                  <span className="text-red-500 text-lg">●</span> Fathiha jahan
                </p>
              </div>
              <div>
                <p className="text-[#666666] popmed">Email</p>
                <p className="text-gray-800">xyz@gmail.com</p>
              </div>
              <div>
                <p className="text-[#666666] popmed">Signup Date</p>
                <p className="text-gray-800">July 15, 2025</p>
              </div>

              <div>
                <p className="text-[#666666] popmed">Customer ID</p>
                <p className="text-blue-600">1234567</p>
              </div>
              <div>
                <p className="text-[#666666] popmed">Last activity</p>
                <p className="text-gray-800">1 day ago</p>
              </div>
              <div>
                <p className="text-[#666666] popmed">Status</p>
                <p className="text-green-600 font-semibold">Active</p>
              </div>

              <div>
                <p className="text-[#666666] popmed">Total Orders</p>
                <p className="text-gray-800">03</p>
              </div>
              <div>
                <p className="text-[#666666] popmed">Total Spend</p>
                <p className="text-gray-800">$17,000</p>
              </div>
              <div>
                <p className="text-[#666666] popmed"> </p>
                <button
                  className="text-yellow-600 underline text-[#666666] popmed"
                  onClick={() => setIsOrderHistoryOpen(true)}
                >
                  Order History
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Order History Modal */}
      <Modal
        open={isOrderHistoryOpen}
        onCancel={() => setIsOrderHistoryOpen(false)}
        footer={null}
        width={600}
      >
        <OrderHistory />
      </Modal>
    </>
  );
};

export default CustomerModal;
