import React, { useState } from 'react';
import { Table } from 'antd';
import TableModal from '../../../AdminDashboard/pages/Overview/_subComponents/TableModal';

const VendorTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: 'Request Date',
      dataIndex: 'requestDate',
      key: 'requestDate',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span
          className={`text-sm font-medium ${
            status === 'Delivered'
              ? 'text-green-600'
              : status === 'Pending'
              ? 'text-yellow-600'
              : 'text-red-500'
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
  ];

  const data = [
    {
      key: '1',
      requestDate: '2025-07-20',
      amount: '$500',
      status: 'Delivered',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-00123ABC',
    },
    {
      key: '2',
      requestDate: '2025-07-21',
      amount: '$320',
      status: 'Pending',
      paymentMethod: 'PayPal',
      transactionId: 'TXN-00456XYZ',
    },
    {
      key: '3',
      requestDate: '2025-07-22',
      amount: '$150',
      status: 'Cancelled',
      paymentMethod: 'Skrill',
      transactionId: 'TXN-00789LMN',
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
      <TableModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default VendorTable;
