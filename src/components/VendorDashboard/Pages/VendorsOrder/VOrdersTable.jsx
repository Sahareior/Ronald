import React, { useState } from 'react';
import { Table, Select, message } from 'antd';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import VOrderModal from './VOrderModal/VOrderModal';
import { useGetVendorOrdersQuery } from '../../../../redux/slices/Apis/vendorsApi';

const { Option } = Select;

const VOrdersTable = () => {
  const [pageSize, setPageSize] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [target, setTarget] = useState("");
  const { data, isLoading, error } = useGetVendorOrdersQuery();

  // Transform API data to match table structure
  const dataSource = data?.results?.map(order => ({
    key: order.id,
    orderId: order.order_id,
    customer: order.customer_name,
    seller: order.vendor_name,
    date: new Date(order.order_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    total: parseFloat(order.total || 0),
    payment: order.payment_method_display || 'N/A',
    status: order.order_status_display,
    originalData: order // Keep original data for reference
  })) || [];

  const handleDelete = (keys) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // In a real app, you would call a delete API here
        // For now, we'll just show a success message
        setSelectedRowKeys([]);
        message.success(`${keys.length} order(s) deleted.`);
        Swal.fire({
          title: "Deleted!",
          text: "Your order has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const handleBulkAction = (action) => {
    if (selectedRowKeys.length === 0) {
      message.warning('Please select at least one row.');
      return;
    }

    if (action === 'delete') {
      handleDelete(selectedRowKeys);
    } else if (action === 'edit') {
      message.info('Bulk edit not implemented.');
    }
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
      render: text => (
        <div>
          <a className="text-[#CBA135]">{text}</a>
        </div>
      ),
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      render: text => (
        <div>
          <a className="popmed text-[16px]">{text}</a>
        </div>
      ),
    },
    {
      title: 'Seller',
      dataIndex: 'seller',
      key: 'seller',
      render: text => (
        <div>
          <a className="popmed text-[16px]">{text}</a>
        </div>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => (
        <div>
          <a className="popmed text-[16px]">{text}</a>
        </div>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: text => (
        <div>
          <a className="popmed text-[16px]">৳{text.toFixed(2)}</a>
        </div>
      ),
    },
    {
      title: 'Payment',
      dataIndex: 'payment',
      key: 'payment',
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
          className={`px-2 py-1 popmed rounded text-[16px] font-medium ${
            status === 'Paid' || status === 'Delivered'
              ? 'bg-green-100 text-green-600'
              : 'bg-yellow-100 text-yellow-600'
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <IoEyeOutline 
            onClick={() => {
              setTarget(record.originalData);
              setIsModalOpen(true);
            }} 
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

  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p>Error loading orders</p>;

  return (
    <div className="bg-white p-4 rounded relative">
      {/* Bulk Action Dropdown */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Select
            placeholder="Bulk Actions"
            size="small"
            className="min-w-[140px]"
            onChange={handleBulkAction}
            suffixIcon={<RiArrowDropDownLine />}
          >
            <Option value="All">All</Option>
            <Option value="none">None</Option>
            <Option value="Paid">Paid</Option>
            <Option value="Unpaid">Unpaid</Option>
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
        className="relative"
        pagination={{
          pageSize,
          total: data?.count || 0,
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          showSizeChanger: false,
          itemRender: (current, type, originalElement) => originalElement,
          position: ['bottomRight'],
        }}
        footer={() => (
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-2 text-sm">
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
      <VOrderModal 
        isModalOpen={isModalOpen} 
        target={target} 
        setIsModalOpen={setIsModalOpen} 
      />
    </div>
  );
};

export default VOrdersTable;