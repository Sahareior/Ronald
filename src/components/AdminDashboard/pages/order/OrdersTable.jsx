import React, { useState } from 'react';
import { Table, Select } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

const { Option } = Select;

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'orderId',
    key: 'orderId',
    render: text => <a className="text-[#CBA135]">{text}</a>,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: total => `$${total.toLocaleString()}`,
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    key: 'payment',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <span className={`px-2 py-1 rounded text-xs font-medium ${status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
        {status}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <div className="flex items-center gap-6">
        <FaEdit className="text-[#CBA135] cursor-pointer" size={20} />
        <IoEyeOutline className="text-gray-400 cursor-pointer" size={20} />
        <MdDelete className="text-red-400 cursor-pointer" size={20} />
      </div>
    ),
  },
];

const data = Array.from({ length: 247 }, (_, i) => ({
  key: i + 1,
  orderId: `Wrioko24${i + 1}`,
  customer: ['Fatiha Jahan', 'John Doe', 'Jane Smith'][i % 3],
  date: 'July 15, 2025',
  total: 3290 + (i % 10) * 100,
  payment: ['Mobile banking', 'Cash', 'Card'][i % 3],
  status: ['Paid', 'Processing', 'Pending'][i % 3],
}));

const OrdersTable = () => {
  const [pageSize, setPageSize] = useState(10);

  return (
    <div className="bg-white p-4 rounded relative shadow-md">
      <Table
        columns={columns}
        dataSource={data}
        className='relative'
        pagination={{
          pageSize,
          total: data.length,
          showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          showSizeChanger: false, // hide default pageSize dropdown
          itemRender: (current, type, originalElement) => originalElement, // default buttons
          position: ['bottomRight'],
        }}
        footer={() => (
          <div className="flex justify-between absolute bottom-0 left-5 items-center px-2">
            <div className="flex items-center relative gap-2 text-sm">
              <span>Show</span>
              <Select
                value={pageSize}
                className='relative'
                onChange={(value) => setPageSize(value)}
                size="small"
                style={{ width: 70 }}
              >
                {[10, 20, 50].map(size => (
                  <Option key={size} value={size}>{size}</Option>
                ))}
              
              </Select>
              <RiArrowDropDownLine className='' />
              <span>entries</span>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default OrdersTable;
