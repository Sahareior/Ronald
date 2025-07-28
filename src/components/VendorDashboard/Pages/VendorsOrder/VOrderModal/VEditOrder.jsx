import React, { useState } from 'react';
import { Input, Select, Button } from 'antd';

const { Option } = Select;

const VEditOrder = () => {
  const [form, setForm] = useState({
    customerName: 'Fatiha jahan',
    categoryName: 'Living Room',
    date: 'Jul 15, 2025',
    payment: 'Paid',
    price: '$3290',
    quantity: '1',
    orderId: '#Wrioko240001',
    status: 'Processing',
    file: null,
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = () => {
    console.log('Saved Data:', form);
  };

  return (
    <div className="mx-auto   rounded-md ">
      <h2 className="text-center text-lg font-semibold mb-6">Edit Order</h2>

      <div className="space-y-4 p-6 bg-white">
    <div>
      <p className='text-sm popbold py-1'>Customer Name </p>
              <input
        className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
          placeholder="Customer Name"
          value={form.customerName}
          onChange={(e) => handleChange('customerName', e.target.value)}
        />
    </div>

<div>
   <p className='text-sm popbold py-1'>Customer Name </p>
          <input
        className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
          placeholder="Category Name"
          value={form.categoryName}
          onChange={(e) => handleChange('categoryName', e.target.value)}
        />
</div>

        <div className="grid grid-cols-2 gap-4">
<div>
   <p className='text-sm popbold py-1'>Customer Name </p>
            <input
          className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
            placeholder="Date"
            value={form.date}
            onChange={(e) => handleChange('date', e.target.value)}
          />
</div>
<div>
   <p className='text-sm popbold py-1'>Customer Name </p>
            <input
          className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
            placeholder="Payment"
            value={form.payment}
            onChange={(e) => handleChange('payment', e.target.value)}
          />
</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
<div>
   <p className='text-sm popbold py-1'>Customer Name </p>
            <input
          className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
            placeholder="Price"
            value={form.price}
            onChange={(e) => handleChange('price', e.target.value)}
          />
</div>
<div>
   <p className='text-sm popbold py-1'>Customer Name </p>
            <input
          className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
            placeholder="Quantity"
            value={form.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
          />
</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
<div>
   <p className='text-sm popbold py-1'>Customer Name </p>
            <input
          className="w-full border border-[#D1D5DB] rounded-md px-4 py-2 placeholder:pl-1 focus:outline-none focus:ring-0 focus:border-[#D1D5DB]"
            placeholder="Order ID"
            value={form.orderId}
            onChange={(e) => handleChange('orderId', e.target.value)}
          />
</div>
<div>
   <p className='text-sm popbold py-1'>Customer Name </p>
            <Select
            value={form.status}
            onChange={(value) => handleChange('status', value)}
            className="w-full"
          >
            <Option value="Processing">Processing</Option>
            <Option value="Shipped">Shipped</Option>
            <Option value="Delivered">Delivered</Option>
            <Option value="Cancelled">Cancelled</Option>
          </Select>
</div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">Product Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm"
          />
        </div>

        <div className="flex gap-3 mt-4">
          <Button
            type="primary"
            className="bg-[#CBA135] text-white w-full"
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
          <Button className="w-full" danger>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VEditOrder;
