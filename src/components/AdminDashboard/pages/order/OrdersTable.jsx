import React, { useState, useEffect } from 'react';
import { Table, Select, message } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import OrderModal from './OrderModal/OrderModal';
import Swal from 'sweetalert2';
import { useGetAllCustomersQuery, useGetAllOrdersQuery, useGetAllVendorsQuery } from '../../../../redux/slices/Apis/dashboardApis';

const { Option } = Select;

const OrdersTable = () => {
  const { data: orders } = useGetAllOrdersQuery();
  const [pageSize, setPageSize] = useState(10);
  const {data:vendors} =useGetAllVendorsQuery()
  const {data:customers} =useGetAllCustomersQuery()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [target, setTarget] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  // console.log(customers.results)

  // Map API data to table format
  useEffect(() => {
    if (orders?.results) {
      const mappedData = orders.results.map((order) => ({
        key: order.id,
        orderId: order.order_id,
        customer: order.customer, // You can replace with customer name if you have it
        seller: order.vendor, // Replace with vendor name if available
        date: new Date(order.order_date).toLocaleDateString(),
        total: parseFloat(order.total_amount).toFixed(2),
        payment: order.payment_status_display || order.payment_status,
        status: order.order_status_display || order.order_status,
      }));
      setDataSource(mappedData);
    }
  }, [orders]);

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
      render: text => <div><a className="popmed text-[16px]">{text}</a></div>,
    },
    {
      title: 'Seller',
      dataIndex: 'seller',
      key: 'seller',
      render: text => <div><a className="popmed text-[16px]">{text}</a></div>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => <div><a className="popmed text-[16px]">{text}</a></div>,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: text => <div><a className="popmed text-[16px]">{text}</a></div>,
    },
    {
      title: 'Payment',
      dataIndex: 'payment',
      key: 'payment',
      render: text => <div><a className="popmed text-[16px]">{text}</a></div>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <span
          className={`px-2 py-1 popmed rounded text-[16px] font-medium ${
            status.toLowerCase() === 'paid' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
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
          <FaEdit size={20} onClick={() => { setIsModalOpen(true); setTarget(true); }} />
          <IoEyeOutline size={20} className="text-gray-400 cursor-pointer" onClick={() => { setIsModalOpen(true); setTarget(false); }} />
          <MdDelete size={20} className="text-red-400 cursor-pointer" onClick={() => handleDelete([record.key])} />
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
    } else {
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
        Swal.fire("Deleted!", "Your order(s) has been deleted.", "success");
      }
    });
  };

  return (
    <div className="bg-white p-4 rounded relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Select placeholder="Bulk Actions" size="small" className="min-w-[140px]" onChange={handleBulkAction} suffixIcon={<RiArrowDropDownLine />}>
            <Option value="All">All</Option>
            <Option value="none">None</Option>
            <Option value="Paid">Paid</Option>
            <Option value="Unpaid">Unpaid</Option>
          </Select>
          <span className="text-sm text-gray-500">{selectedRowKeys.length} selected</span>
        </div>
      </div>

      <Table
        rowSelection={{ selectedRowKeys, onChange: setSelectedRowKeys }}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize,
          total: dataSource.length,
          showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          showSizeChanger: false,
          position: ['bottomRight'],
        }}
      />
      <OrderModal isModalOpen={isModalOpen} target={target} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default OrdersTable;
