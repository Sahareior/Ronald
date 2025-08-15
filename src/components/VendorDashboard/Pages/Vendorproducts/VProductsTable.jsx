import React, { useState } from 'react';
import { Table, Select, message } from 'antd';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import ProductsModal from './VProductsModal/VProductsModal';
import Swal from 'sweetalert2';
import { useGetAllProductsQuery } from '../../../../redux/slices/Apis/vendorsApi';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const { Option } = Select;

const VProductsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading, error } = useGetAllProductsQuery();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Transform API data to match table structure
  const dataSource = data?.results?.map(product => ({
    key: product.id,
    productName: product.name,
    productId: product.prod_id,
    category: product.categories?.join(', ') || 'N/A',
    price: parseFloat(product.active_price || product.price1 || 0),
    stock: product.is_stock ? 
      (product.stock_quantity > 10 ? 'In Stock' : 'Low Stock') : 
      'Out of Stock',
    status: product.status === 'active' ? 'Active' : 
           product.status === 'draft' ? 'Draft' : 
           product.status === 'approved' ? 'Active' : 'Pending',
    originalData: product // Keep original data for reference
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
      title: 'ID',
      dataIndex: 'productId',
      key: 'productId',
      render: text => (
        <div>
          <a className="popmed text-[16px]">{text}</a>
        </div>
      ),
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
      render: (text) => (
        <span className="popmed flex items-center gap-3 text-[16px]">
          <img 
            className='w-7 rounded-full h-7' 
            src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
      render: text => (
        <div>
          <a className="popmed text-[16px]">{text}</a>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `৳${price.toFixed(2)}`,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
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
      render: (status, record) => {
        const statusColor = {
          Active: 'bg-green-100 text-green-600',
          Pending: 'bg-yellow-100 text-yellow-600',
          Draft: 'bg-red-100 text-red-600',
        };

        return (
          <div className={`rounded px-2 py-1 text-xs font-medium w-[110px] ${statusColor[status]}`}>
            <Select
              value={status}
              size="small"
              onChange={(value) => {
                // In a real app, you would call an API to update the status
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
        <div className="flex items-center gap-3">
          <IoEyeOutline 
            onClick={() => setIsModalOpen(true)} 
            className="text-gray-400 cursor-pointer" 
            size={23} 
          />
          <Link className='block' to='/vendor-dashboard/editproducts' state={{originalData:record}}>
          <FaEdit className="text-gray-400 cursor-pointer" size={20}/>
          </Link>
          <MdDelete
            className="text-red-400 cursor-pointer"
            size={20}
            onClick={() => handleDelete([record.key])}
          />
        </div>
      ),
    },
  ];

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="bg-white p-4 rounded relative shadow-md">
      {/* Bulk Action Controls */}
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
          <span className="text-sm text-gray-500">
            {selectedRowKeys.length} selected
          </span>
        </div>
      </div>

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
      <ProductsModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
};

export default VProductsTable;