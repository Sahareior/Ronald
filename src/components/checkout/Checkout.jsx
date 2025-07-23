import React from 'react';
import { Form, Input, Checkbox, Button, Select } from 'antd';
import Breadcrumb from '../others/Breadcrumb';

const { Option } = Select;

const Checkout = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  return (
<div className=' pb-7 px-20'>
     <Breadcrumb />
   <div className='py-4 pb-6'>
    <h2 className='text-[30px] pb-3 font-bold'>Checkout</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, reiciendis?</p>

   </div>
       <div className=' flex gap-4'>
        <div className=" bg-[#E5E7EB] p-6 md:p-5 max-w-2xl mx-auto rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item name="fullname" label="Full Name" rules={[{ required: true, message: 'Please enter your full name' }]}>
            <Input placeholder="Enter full name" />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please enter your phone number' }]}>
            <Input addonBefore={<Select defaultValue="+880" className="w-20">
              <Option value="+880">BD</Option>
              <Option value="+91">IN</Option>
            </Select>} />
          </Form.Item>
        </div>

        <Form.Item name="email" label="Email Address" rules={[{ type: 'email', message: 'Enter a valid email' }]}>
          <Input placeholder="example@email.com" />
        </Form.Item>

        <Form.Item name="street" label="Street Address">
          <Input placeholder="House number and street name" />
        </Form.Item>

        <Form.Item name="landmark" label="Landmark">
          <Input placeholder="Near Central Mosque, opposite University" />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Form.Item name="apartment" label="Apartment name">
            <Input placeholder="Aqua Tower" />
          </Form.Item>

          <Form.Item name="floor" label="Floor Number">
            <Input placeholder="5" />
          </Form.Item>

          <Form.Item name="flat" label="Flat number">
            <Input placeholder="C4" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item name="city" label="City">
            <Input placeholder="Dhaka" />
          </Form.Item>

          <Form.Item name="zip" label="Zip Code">
            <Input placeholder="00000" />
          </Form.Item>
        </div>

        <div className="bg-white p-4 rounded-md border border-gray-300">
          <h3 className="font-medium mb-2">Billing Information</h3>
          <Form.Item name="sameAsShipping" valuePropName="checked" noStyle>
            <Checkbox>Same as shipping address</Checkbox>
          </Form.Item>
        </div>

        <Form.Item className="mt-4">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#CBA135] hover:bg-yellow-600 text-white w-full h-[48px] text-md font-semibold"
          >
            Save Address
          </Button>
        </Form.Item>
      </Form>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
  <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

  {/* Order Items */}
  <div className="space-y-4">
    {[1, 2, 3].map((item, idx) => (
      <div key={idx} className="flex justify-between gap-4">
        <div className="flex gap-4">
          <img src="/image/featured/img1.png" alt="Sofa" className="w-16 h-16 object-cover rounded-md" />
          <div>
            <h4 className="text-sm font-semibold">Luxury Velvet Sectional Sofa</h4>
            <p className="text-xs text-gray-500">by Elegant Furniture Co.</p>
            <p className="text-xs text-gray-500">Qty: 1</p>
          </div>
        </div>
        <p className="text-sm font-semibold text-right">$3000.00</p>
      </div>
    ))}
  </div>

  {/* Price Summary */}
  <div className="border-t border-gray-300 mt-6 pt-4 space-y-2 text-sm text-gray-700">
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

  {/* Total */}
  <div className="flex justify-between items-center mt-4">
    <h4 className="text-base font-semibold">Total</h4>
    <h4 className="text-xl font-bold text-[#CBA135]">$7030.00</h4>
  </div>

  {/* Place Order Button */}
  <button className="w-full bg-[#CBA135] text-white font-semibold text-sm py-3 mt-5 rounded-md hover:bg-yellow-600">
    Place Order
  </button>

  {/* Policy Note */}
  <p className="text-[11px] text-center text-gray-500 mt-2">
    By clicking Place Order, you accept WRIKXO’s <br />
    <a href="#" className="text-blue-500 underline">return & shipping policies</a>
  </p>
</div>

</div>
</div>
  );
};

export default Checkout;
