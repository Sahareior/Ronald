import React, { useState } from 'react';
import { Table, Select, message } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

import Swal from 'sweetalert2';
import VOrderModal from './VOrderModal/VOrderModal';

const { Option } = Select;

const VOrdersTable = () => {
  const [pageSize, setPageSize] = useState(10);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [target,setTarget] = useState("")
  const [dataSource, setDataSource] = useState(
    Array.from({ length: 247 }, (_, i) => ({
      key: i + 1,
      orderId: `Wrioko24${i + 1}`,
      customer: ['Fatiha Jahan', 'John Doe', 'Jane Smith'][i % 3],
      date: 'July 15, 2025',
      total: 3290 + (i % 10) * 100,
      payment: ['Mobile banking', 'Cash', 'Card'][i % 3],
      status: ['Paid', 'Processing', 'Pending'][i % 3],
    }))
  );

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
      render: (_, record) => (
        <div className="flex items-center gap-6">
        
          <IoEyeOutline
  onClick={() => {
    setIsModalOpen(true);
    setTarget('eye');
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
      const newData = dataSource.filter(item => !keys.includes(item.key));
      setDataSource(newData);
      setSelectedRowKeys([]);
      message.success(`${keys.length} order(s) deleted.`);

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
};


  return (
    <div className="bg-white p-4 rounded relative ">
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
            {/* <Option value="edit">Edit Selected</Option> */}
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
          total: dataSource.length,
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          showSizeChanger: false,
          itemRender: (current, type, originalElement) => originalElement,
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
      <VOrderModal isModalOpen={isModalOpen} target={target} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default VOrdersTable;
