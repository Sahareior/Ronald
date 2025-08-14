import React from 'react';
import { Form, Input, Checkbox, Button, Select } from 'antd';
import Breadcrumb from '../others/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;

const Checkout = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Form Values:', values);
    navigate('/cart/checkout1')
  };

  return (
<div className='bg-[#FAF8F2] pb-12'>
  <div className=' pb-7 md:px-20 '>
     <Breadcrumb />
   <div className='py-4 pb-6'>
    <h2 className='text-[30px] pb-3 popbold font-bold'>Checkout</h2>
    <p className='popreg'>Almost there! Confirm your details to complete your order</p>

   </div>
       <div className=' flex gap-8'>
        <div className=" bg-[#EAE7E1] p-6 md:p-5 w-full  mx-auto rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item name="fullname" label="Full Name" rules={[{ required: true, message: 'Please enter your full name' }]}>
            <Input className='h-[40px] custom-input' placeholder="Enter full name" />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please enter your phone number' }]}>
<Input className='h-[40px] custom-input' placeholder="Enter phone number" />
          </Form.Item>
        </div>

        <Form.Item name="email" label="Email Address" rules={[{ type: 'email', message: 'Enter a valid email' }]}>
          <Input className='h-[40px] custom-input' placeholder="example@email.com" />
        </Form.Item>

        <Form.Item name="street" label="Street Address">
          <Input className='h-[40px] custom-input' placeholder="House number and street name" />
        </Form.Item>

        <Form.Item name="landmark" label="Landmark">
          <Input className='h-[40px] custom-input' placeholder="Near Central Mosque, opposite University" />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Form.Item name="apartment" label="Apartment name">
            <Input className='h-[40px] custom-input' placeholder="Aqua Tower" />
          </Form.Item>

          <Form.Item name="floor" label="Floor Number">
            <Input className='h-[40px] custom-input' placeholder="5" />
          </Form.Item>

          <Form.Item name="flat" label="Flat number">
            <Input className='h-[40px] custom-input' placeholder="C4" />
          </Form.Item>
        </div>

        <div className="grid w-8/12 grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item name="city" label="City">
            <Input className='h-[40px] custom-input' placeholder="Dhaka" />
          </Form.Item>

          <Form.Item name="zip" label="Zip Code">
            <Input className='h-[40px] custom-input' placeholder="00000" />
          </Form.Item>
        </div>

        <div className="bg-white p-4 py-6 rounded-md border border-gray-300">
          <h3 className="font-medium mb-2">Billing Information</h3>
          <Form.Item name="sameAsShipping" valuePropName="checked" noStyle>
            <Checkbox>Same as shipping address</Checkbox>
          </Form.Item>
        </div>

        <Form.Item className="mt-4 mx-auto flex justify-center items-center">
          <button
            type="primary"
            htmlType="submit"
            className="bg-[#CBA135] hover:bg-yellow-600 mx-auto text-white rounded-md px-16 h-[48px] text-md font-semibold"
          >
            Save Address
          </button>
        </Form.Item>
      </Form>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
  <h3 className="text-lg popbold font-semibold mb-4">Order Summary</h3>

  {/* Order Items */}
  <div className="space-y-4">
    {[1, 2, 3].map((item, idx) => (
      <div key={idx} className="flex justify-between gap-4">
        <div className="flex gap-4">
          <img src="/image/featured/img1.png" alt="Sofa" className="w-16 h-16 object-cover rounded-md" />
          <div>
            <h4 className="text-sm popmed">Luxury Velvet Sectional Sofa</h4>
            <p className="text-xs popreg text-gray-500">by Elegant Furniture Co.</p>
            <p className="text-xs popreg text-gray-500">Qty: 1</p>
          </div>
        </div>
        <p className="text-sm popreg text-[#666666] font-semibold text-right">$3000.00</p>
      </div>
    ))}
  </div>

  {/* Price Summary */}
  <div className="border-t border-gray-300 popreg mt-6 pt-4 space-y-2 text-sm text-gray-700">
    <div className="flex justify-between">
      <span>Subtotal (3 items)</span>
      <span>$7000.00</span>
    </div>
    <div className="flex justify-between">
      <span>Delivery fee</span>
      <span>$80.00</span>
    </div>
    <div className="flex justify-between">
      <span>Tax</span>
      <span>$50.00</span>
    </div>
    <div className="flex justify-between">
      <span>Total Discount</span>
      <span className="text-green-600">-$100.00</span>
    </div>
  </div>
<div className='h-[0.8px] mt-2 bg-black w-full' />
  {/* Total */}
  <hr />
  <div className="flex justify-between items-center mt-4">
    <h4 className="text-base popbold font-semibold">Total</h4>
    <h4 className="text-xl font-bold text-[#CBA135]">$7030.00</h4>
  </div>

  {/* Place Order Button */}
<Link to='/confirm-order'>
  <button className="w-full bg-[#CBA135] popbold text-white font-semibold text-sm py-3 mt-5 rounded-md hover:bg-yellow-600">
    Place Order
  </button>
</Link>

  {/* Policy Note */}
  <p className="text-[11px] popreg text-center text-gray-500 mt-2">
    By clicking Place Order, you accept WRIKXO’s <br />
    <a href="#" className="text-[#CBA135] underline">return & shipping policies</a>
  </p>
</div>

</div>
</div>




</div>
  );
};

export default Checkout;
