import React from 'react';
import { Radio } from 'antd';
import { LockOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Breadcrumb from '../others/Breadcrumb';
import { FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ConfirmOrder = () => {
  return (
<div className='bg-[#F5F1E9] pb-16'>
  <div className='  p mx-40'>
  <Breadcrumb />
  <div className='p-5 space-y-3 '>
    <h4 className='text-[30px] font-bold'>Confirm Order</h4>
    <h5 className='text-[16px]'>Almost there! Confirm your details to complete your order</h5>
  </div>
      <div className=" bg-[#EAE7E1] p-6 md:p-10 py- max-w-3xl mx-auto rounded-xl space-y-6">
      {/* Header */}
<div className='bg-white p-4'>
        <div className="flex items-center py-4 gap-2">
        <LockOutlined className="text-[#CBA135]" />
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <span className="text-sm text-[#CBA135] text-[16px] font-semibold">Secure & Encrypted</span>
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
      <div className="bg-[#FAF8F2] border border-[#E5E7EB] rounded-md p-5 mt-5 flex items-start text-sm text-[#CBA135]">
        <FaShieldAlt  className="mt-1 mr-2 " />
        <p>Your payment information is encrypted and secure</p>
      </div>
</div>

      {/* Confirm Button */}
<div className='flex justify-center items-center'>
<Link to='/order-confirmation'>
        <button className=" px-8 mx-auto bg-[#CBA135] text-white font-semibold text-sm py-3 rounded-md hover:bg-yellow-600">
        Confirm Order
      </button>
</Link>
</div>
    </div>
</div>
</div>
  );
};

export default ConfirmOrder;
