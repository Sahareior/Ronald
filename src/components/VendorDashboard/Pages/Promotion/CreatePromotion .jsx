import React, { useState } from 'react';
import { Table, Select, message } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
// import ProductsModal from './VProductsModal/VProductsModal';
import Swal from 'sweetalert2';
import { useGetAllProductsQuery } from '../../../../redux/slices/Apis/vendorsApi';

const { Option } = Select;

const VProductsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetAllProductsQuery();
  const [pageSize, setPageSize] = useState(10);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Map API results to table data
  const dataSource = data?.results.map((item) => ({
    key: item.id,
    productName: item.name,
    productId: item.prod_id,
    category: item.categories.length ? `Category ID: ${item.categories[0]}` : 'No Category',
    price: parseFloat(item.active_price) || 0,
    stock: item.is_stock
      ? item.available_stock || 'In Stock'
      : 'Out of Stock',
    status: item.status.charAt(0).toUpperCase() + item.status.slice(1), // capitalize
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
        const newData = dataSource.filter(item => !keys.includes(item.key));
        setSelectedRowKeys([]);
        message.success(`${keys.length} product(s) deleted.`);
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
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
      title: 'IDaa',
      dataIndex: 'productId',
      key: 'productId',
      render: text => <div><a className="popmed text-[16px]">{text}</a></div>,
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
      render: (text) => (
        <span className="popmed flex items-center gap-3 text-[16px]">
          <img
            className='w-7 h-7 rounded-full'
            src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=1170&auto=format&fit=crop"
            alt=""
          />
          {text}
        </span>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: text => <div><a className="popmed text-[16px]">{text}</a></div>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
      render: text => <div><a className="popmed text-[16px]">{text}</a></div>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => {
        const statusColor = {
          Active: 'bg-green-100 text-green-600',
          Pending: 'bg-yellow-100 text-yellow-600',
          Draft: 'bg-red-100 text-red-600',
          Approved: 'bg-green-100 text-green-600',
        };
        return (
          <div className={`rounded px-2 py-1 text-xs font-medium w-[110px] ${statusColor[status] || 'bg-gray-100 text-gray-600'}`}>
            <Select
              value={status}
              size="small"
              onChange={(value) => {
                record.status = value;
                message.success(`Status changed to ${value}`);
              }}
              bordered={false}
              dropdownMatchSelectWidth={false}
              className="w-full"
              suffixIcon={<RiArrowDropDownLine className="text-[16px] popmed text-gray-600" />}
            >
              <Option value="Active">Active</Option>
              <Option value="Pending">Pending</Option>
              <Option value="Draft">Draft</Option>
            </Select>
          </div>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex items-center gap-6">
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

  return (
    <div className="bg-white p-4 rounded relative shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Select
            placeholder="Bulk Actions"
            size="small"
            className="min-w-[110px]"
            onChange={handleBulkAction}
            suffixIcon={<RiArrowDropDownLine />}
          >
            <Option value="delete">All</Option>
            <Option value="delete">None</Option>
            <Option value="delete">Stock</Option>
            <Option value="delete">Out of Stock</Option>
            <Option value="delete">Low Stock</Option>
            <Option value="delete">Approved</Option>
            <Option value="delete">Reject</Option>
            <Option value="delete">Pending</Option>
          </Select>
          <span className="text-sm text-gray-500">{selectedRowKeys.length} selected</span>
        </div>
      </div>

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
          showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
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
                  <Option key={size} value={size}>{size}</Option>
                ))}
              </Select>
              <span>entries</span>
            </div>
          </div>
        )}
      />
      {/* <ProductsModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} /> */}
    </div>
  );
};

export default VProductsTable;
