import React, { useState } from 'react';
import { Table, Select, Checkbox, Button, message, Popover } from 'antd';
import { FaEdit } from 'react-icons/fa';
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
      orderId: `Wrioko24${i + 1}`,
      customer: ['Fatiha Jahan', 'John Doe', 'Jane Smith'][i % 3],
      date: 'July 15, 2025',
      total: 3290 + (i % 10) * 100,
      payment: ['Mobile banking', 'Cash', 'Card'][i % 3],
      status: ['Paid', 'Processing', 'Pending'][i % 3],
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
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
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
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex items-center gap-3">
        
          <IoEyeOutline onClick={()=> setIsModalOpen(true)} className="text-gray-400 cursor-pointer" size={20} />

<Popover
  content={
    <div className="space-y-2 py-3 px-4 flex flex-col gap-4 items-center text-center">
      <p className="text-gray-700">Do you want to delete this order?</p>
      <Button
        className="bg-[#CBA135] text-white hover:bg-yellow-600"
        onClick={() => {
          handleDelete([record.key]);
          setOpenPopoverKey(null); // Close after deletion
        }}
      >
        Delete
      </Button>
    </div>
  }
  title={<h3 className="text-red-500 text-center font-semibold">Are you sure!!</h3>}
  trigger="click"
  open={openPopoverKey === record.key}
  onOpenChange={(newOpen) => {
    setOpenPopoverKey(newOpen ? record.key : null);
  }}
>
  <MdDelete
    className="text-red-400 cursor-pointer"
    size={20}
  />
</Popover>


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
            <Option value="delete">Delete Selected</Option>

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
