import React, { useState } from 'react';
import { Button, Modal } from 'antd';


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
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={900}
      >
        <div className="bg-[#f9f8f6] rounded-md w-full max-w-3xl p-4 mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center border-b-4 border-blue-500 px-4 pb-2">
            <h2 className="text-lg font-semibold text-gray-900">Customer Details</h2>
          </div>

          {/* Content */}
          <div className="p-6 bg-white shadow-sm rounded mt-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Customer</h3>

            <div className="grid grid-cols-3 gap-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium">Customer Name</p>
                <p className="text-gray-800 flex items-center gap-1">
                  <span className="text-red-500 text-lg">●</span> Fathiha jahan
                </p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-800">xyz@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Signup Date</p>
                <p className="text-gray-800">July 15, 2025</p>
              </div>

              <div>
                <p className="font-medium">Customer ID</p>
                <p className="text-blue-600">1234567</p>
              </div>
              <div>
                <p className="font-medium">Last activity</p>
                <p className="text-gray-800">1 day ago</p>
              </div>
              <div>
                <p className="font-medium">Status</p>
                <p className="text-green-600 font-semibold">Active</p>
              </div>

              <div>
                <p className="font-medium">Total Orders</p>
                <p className="text-gray-800">03</p>
              </div>
              <div>
                <p className="font-medium">Total Spend</p>
                <p className="text-gray-800">$17,000</p>
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
            </div>
          </div>
        </div>
      </Modal>

    </>
  );
};

export default VendorModal;
