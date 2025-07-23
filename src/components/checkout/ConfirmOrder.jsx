import React from 'react';
import { Radio } from 'antd';
import { LockOutlined, InfoCircleOutlined } from '@ant-design/icons';

const ConfirmOrder = () => {
  return (
    <div className="bg-[#F5F1E9] p-6 md:p-10 max-w-3xl mx-auto rounded-xl space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <LockOutlined className="text-[#CBA135]" />
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <span className="text-sm text-green-600 ml-auto">Secure & Encrypted</span>
      </div>

      {/* Payment Options */}
      <Radio.Group className="w-full space-y-4" style={{ width: '100%' }}>
        <div className="border rounded-md p-4 hover:shadow transition">
          <Radio value="mobile" className="w-full">
            <div>
              <span className="font-medium">Mobile Money</span>
              <p className="text-sm text-gray-500 mt-1">M-Pesa, Airtel Money, MTN MoMo</p>
            </div>
          </Radio>
        </div>

        <div className="border rounded-md p-4 hover:shadow transition">
          <Radio value="card" className="w-full">
            <div>
              <span className="font-medium">Credit/Debit Card</span>
              <p className="text-sm text-gray-500 mt-1">Visa, Mastercard, Verve</p>
            </div>
          </Radio>
        </div>

        <div className="border rounded-md p-4 hover:shadow transition">
          <Radio value="bank" className="w-full">
            <div>
              <span className="font-medium">Bank Transfer</span>
              <p className="text-sm text-gray-500 mt-1">Direct bank transfer</p>
            </div>
          </Radio>
        </div>
      </Radio.Group>

      {/* Security Notice */}
      <div className="bg-yellow-100 border border-yellow-300 rounded-md p-3 flex items-start text-sm text-yellow-700">
        <InfoCircleOutlined className="mt-1 mr-2" />
        <p>Your payment information is encrypted and secure</p>
      </div>

      {/* Confirm Button */}
      <button className="w-full bg-[#CBA135] text-white font-semibold text-sm py-3 rounded-md hover:bg-yellow-600">
        Confirm Order
      </button>
    </div>
  );
};

export default ConfirmOrder;
