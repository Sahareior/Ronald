import React, { useState } from 'react';
import { Table, Select, Checkbox, Button, message, Popover } from 'antd';
import { FaEdit, FaStar } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

import VendorModal from './VendorModal/VendorModal';

const { Option } = Select;

const VendorTable = () => {
  const [pageSize, setPageSize] = useState(10);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
     const [isModalOpen, setIsModalOpen] = useState(false);
         const [open, setOpen] = useState(false);
         const [openPopoverKey, setOpenPopoverKey] = useState(null);

     
   const [dataSource, setDataSource] = useState(
    Array.from({ length: 247 }, (_, i) => ({
      key: i + 1,
      id: `Wrioko24${i + 1}`,
      vendor: ['Fatiha Jahan', 'John Doe', 'Jane Smith'][i % 3],
      status: ['Paid', 'Processing', 'Pending'][i % 3],
      products: `${3 + (i % 5)} items`,
      orders: 10 + (i % 20),
      rating: (Math.floor(Math.random() * 5) + 1), // Random rating between 1-5
    }))
  );

          const hide = () => {
         setOpen(false);
       };
       
       const handleOpenChange = newOpen => {
         setOpen(newOpen);
       };


const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a className=" text-[16px] popmed">{text}</a>,
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
            status === 'Paid'
              ? 'bg-green-100 text-green-600'
              : 'bg-yellow-100 text-yellow-600'
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
       render: text => (
        <div>
          <a className="popmed text-[16px]">{text}</a>
        </div>
      ),
    },
    {
      title: 'Orders',
      dataIndex: 'orders',
      key: 'orders',
       render: text => (
        <div>
          <a className="popmed text-[16px]">{text}</a>
        </div>
      ),
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: rating => (
        <div className="flex items-center"><span className='px-2 text-[16px] popmed'>4</span>
          {Array.from({ length: 1 }, (_, i) => (
            <FaStar
              key={i}
              className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
              size={14}
            />
          ))}
        </div>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <IoEyeOutline onClick={() => setIsModalOpen(true)} className="text-gray-400 cursor-pointer" size={20} />
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
      message.info('Bulk edit not implemented in this example.');
    }
  };

  const handleDelete = (keys) => {
    const newData = dataSource.filter(item => !keys.includes(item.key));
    setDataSource(newData);
    setSelectedRowKeys([]);
    message.success(`${keys.length} row(s) deleted.`);
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
            <Option value="delete">All</Option>
            <Option value="delete">None</Option>
            <Option value="delete">Paid</Option>
            <Option value="delete">Unpaid</Option>

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
      <VendorModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
};

export default VendorTable;
