import React, { useState } from 'react';
import { Table } from 'antd';
import TableModal from './TableModal';

const DashTable = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
      render: text => <a>{text}</a>,
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span className={`text-sm font-medium ${status === 'Delivered' ? 'text-green-600' : status === 'Pending' ? 'text-yellow-600' : 'text-red-500'}`}>
          {status}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <p
          onClick={() => setIsModalOpen(true)}
          className="text-sm popreg text-[#CBA135] hover:cursor-pointer"
        >
          View
        </p>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      orderId: '#A1023',
      customer: 'John Brown',
      date: '2025-07-20',
      status: 'Delivered',
    },
    {
      key: '2',
      orderId: '#B2045',
      customer: 'Jim Green',
      date: '2025-07-21',
      status: 'Pending',
    },
    {
      key: '3',
      orderId: '#C3067',
      customer: 'Joe Black',
      date: '2025-07-22',
      status: 'Cancelled',
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <TableModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default DashTable;
