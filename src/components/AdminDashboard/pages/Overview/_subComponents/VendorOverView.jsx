import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { FaEdit, FaTrash, FaWallet } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';


const notifications = [
  {
    id: 1,
    title: 'New Order Received',
    description: 'Order #WKO20250715 – ৳12,800 from Tanvir Rahman',
    time: 'Just now',
  },
  {
    id: 2,
    title: 'New Order Received',
    description: 'Order #WKO20250715 – ৳12,800 from Tanvir Rahman',
    time: 'Just now',
  },
  {
    id: 3,
    title: 'New Order Received',
    description: 'Order #WKO20250715 – ৳12,800 from Tanvir Rahman',
    time: 'Just now',
  },
];

const VendorOverViewModal = ({ isModalOpen, setIsModalOpen,location }) => {
      const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [note, setNote] = useState('');
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={500}
        closable={false}
        className="rounded-lg"
      >
<div>
    {
        location? <div className="w-full bg-white rounded-md shadow-md p-4 pb-14 border text-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-[16px] popbold text-gray-800">Notification</h2>
        <FiBell size={18} className="text-black" />
      </div>
<hr className='my-3' />
      {notifications.map((notification) => (
        <div key={notification.id} className="mb-8 pb-3 border-b last:border-none">
          <div className="flex justify-between">
            <h3 className="font-semibold text-gray-900">{notification.title}</h3>
            <span className="text-xs text-gray-500">{notification.time}</span>
          </div>
          <p className="text-gray-600 mt-1">{notification.description}</p>
        </div>
      ))}
    </div> :       <div className="w-full mx-auto  rounded-xl p-8 text-[#1E1E1E] font-medium">
      <h2 className=" popbold text-xl font-semibold mb-1">Request Payout</h2>
      <p className="text-sm popreg text-gray-500 mb-4">Withdraw your earnings to your preferred account</p>

      <div className="bg-white border border-[#EFE8D9] flex justify-between rounded-lg p-4 mb-4">
  <div>
          <p className="text-sm popreg text-gray-500">Available to Withdraw</p>
        <p className="text-2xl popbold font-bold text-[#C29D2A]">$12,500</p>
  </div>
        <FaWallet className='text-[#C29D2A]' />
      </div>

      <div className="mb-4">
        <label className="text-sm popmed mb-1 block">Enter Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="00000"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <p className="text-xs popreg text-gray-400 mt-1">Maximum: $12,500</p>
      </div>

      <div className="mb-4">
        <label className="text-sm popmed mb-1 block">Select Payout Method</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="">Choose method...</option>
          <option value="paypal">PayPal</option>
          <option value="bank">Bank Transfer</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-sm popmed mb-1 block">Note to Admin (Optional)</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Any additional information..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div className="text-sm text-gray-600 popreg mb-4 space-y-1">
        <p>⚠️ Payouts are processed every Monday & Thursday</p>
        <p>🔒 Your account details are securely stored</p>
      </div>

      <div className="flex justify-between gap-4">
        <button className="w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
          Cancel
        </button>
        <button className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
          Submit Request
        </button>
      </div>
    </div>
    }
</div>
      </Modal>
    </>
  );
};

export default VendorOverViewModal;
