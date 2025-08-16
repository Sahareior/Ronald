import React, { useState, useEffect } from 'react';
import { Table, Select, Button, message } from 'antd';
import { FaStar } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

import VendorModal from './VendorModal/VendorModal';
import { useGetAllVendorsQuery } from '../../../../redux/slices/Apis/dashboardApis';

const { Option } = Select;

const VendorTable = () => {
  const [pageSize, setPageSize] = useState(10);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: vendors } = useGetAllVendorsQuery();

  // Transform API data for table
  const dataSource = vendors?.results?.map((v, index) => ({
    key: index + 1,
    id: v.user_id,
    vendor: v.vendor_name,
    status: v.approval_status, // approved/pending/rejected
    products: v.products_count,
    orders: v.orders_count,
    rating: v.ratings,
    actions: v.actions,
  })) || [];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a className="text-[16px] popmed">{text}</a>,
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 'vendor',
      render: text => (
        <div>
          <a className="popmed text-[16px]">{text}</a>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <span
          className={`px-3 py-1 popmed rounded-xl text-[16px] font-medium ${
            status === 'approved'
              ? 'bg-green-100 text-green-600'
              : status === 'pending'
              ? 'bg-yellow-100 text-yellow-600'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'products',
      render: text => <span className="popmed text-[16px]">{text}</span>,
    },
    {
      title: 'Orders',
      dataIndex: 'orders',
      key: 'orders',
      render: text => <span className="popmed text-[16px]">{text}</span>,
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: rating => (
        <div className="flex items-center">
          <span className="px-2 text-[16px] popmed">{rating}</span>
          <FaStar
            className={rating > 0 ? 'text-yellow-400' : 'text-gray-300'}
            size={14}
          />
        </div>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <IoEyeOutline
            onClick={() => setIsModalOpen(true)}
            className="text-gray-400 cursor-pointer"
            size={20}
          />
          <MdDelete
            className="text-red-400 cursor-pointer"
            size={20}
            onClick={() => handleDelete([record.key])}
          />
        </div>
      ),
    },
  ];

  const handleDelete = (keys) => {
    message.success(`${keys.length} row(s) deleted.`); 
    // ⚡️ You’ll need to call API delete here instead of just showing message
  };

  const handleBulkAction = (action) => {
    if (selectedRowKeys.length === 0) {
      message.warning('Please select at least one row.');
      return;
    }
    if (action === 'delete') {
      handleDelete(selectedRowKeys);
    } else if (action === 'edit') {
      message.info('Bulk edit not implemented in this example.');
    }
  };

  return (
    <div className="bg-white p-4 rounded relative shadow-md">
      {/* Bulk Actions Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Select
            placeholder="Bulk Actions"
            size="small"
            className="min-w-[140px]"
            onChange={handleBulkAction}
            suffixIcon={<RiArrowDropDownLine />}
          >
            <Option value="delete">Delete</Option>
            <Option value="edit">Edit</Option>
          </Select>
          <span className="text-sm text-gray-500">
            {selectedRowKeys.length} selected
          </span>
        </div>
      </div>

      {/* Table */}
      <Table
        rowSelection={{
          selectedRowKeys,
          onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
        }}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize,
          total: dataSource.length,
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          showSizeChanger: false,
          position: ['bottomRight'],
        }}
        footer={() => (
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center relative gap-2 text-sm">
              <span>Show</span>
              <Select
                value={pageSize}
                onChange={(value) => setPageSize(value)}
                size="small"
                style={{ width: 70 }}
                suffixIcon={<RiArrowDropDownLine />}
              >
                {[10, 20, 50].map((size) => (
                  <Option key={size} value={size}>
                    {size}
                  </Option>
                ))}
              </Select>
              <span>entries</span>
            </div>
          </div>
        )}
      />
      <VendorModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
};

export default VendorTable;
