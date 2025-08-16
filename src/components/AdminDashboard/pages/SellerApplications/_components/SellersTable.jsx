import React, { useState, useEffect } from 'react';
import { Table, Select, message, Tag } from 'antd';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { FaEdit } from 'react-icons/fa';
import SellsModal from './SellsModal';
import { useGetAllSellerApplicationQuery } from '../../../../../redux/slices/Apis/dashboardApis';

const { Option } = Select;

const SellersTable = () => {
    const { data: applicants, isLoading } = useGetAllSellerApplicationQuery();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pageSize, setPageSize] = useState(10);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [dataSource, setDataSource] = useState([]);
    const [selectedData, setSelectedData] = useState()

    // Map API applicants to table format
    useEffect(() => {
        if (applicants?.results) {
            const mappedData = applicants.results.map((applicant) => ({
                key: applicant.id,
                id: applicant.id,
                name: applicant.legal_business_name,
                jobTitle: applicant.job_title,
                phone: applicant.phone_number,
                city: applicant.city_town,
                country: applicant.country,
                establishedDate: applicant.established_date,
                businessType: applicant.business_type,
                status: applicant.status,
                documents: {
                    nidFront: applicant.nid_front,
                    nidBack: applicant.nid_back,
                    taxpayerDoc: applicant.taxpayer_doc,
                    tradeRegisterDoc: applicant.trade_register_doc
                }
            }));
            setDataSource(mappedData);
        }
    }, [applicants]);

    const handleDelete = (keys) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                const newData = dataSource.filter((item) => !keys.includes(item.key));
                setDataSource(newData);
                setSelectedRowKeys([]);
                message.success(`${keys.length} application(s) deleted.`);
                Swal.fire('Deleted!', 'Application(s) have been deleted.', 'success');
            }
        });
    };

    const handleView=(data)=>{
        console.log(data,"ddddddddddd")
        setSelectedData(data)
    }

    const handleBulkAction = (action) => {
        if (selectedRowKeys.length === 0) {
            message.warning('Please select at least one row.');
            return;
        }

        if (action === 'delete') {
            handleDelete(selectedRowKeys);
        } else {
            message.info('Bulk action not implemented.');
        }
    };

    const statusTag = (status) => {
        const statusMap = {
            approved: { color: 'green', text: 'Approved' },
            pending: { color: 'orange', text: 'Pending' },
            rejected: { color: 'red', text: 'Rejected' }
        };

        const currentStatus = statusMap[status.toLowerCase()] || statusMap.pending;
        
        return (
            <Tag color={currentStatus.color}>
                {currentStatus.text}
            </Tag>
        );
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 80,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Business Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <span className="font-medium">{text}</span>,
        },
        {
            title: 'Job Title',
            dataIndex: 'jobTitle',
            key: 'jobTitle',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Established Date',
            dataIndex: 'establishedDate',
            key: 'establishedDate',
            sorter: (a, b) => new Date(a.establishedDate) - new Date(b.establishedDate),
            render: (date) => new Date(date).toLocaleDateString(),
        },
        {
            title: 'Business Type',
            dataIndex: 'businessType',
            key: 'businessType',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => statusTag(status),
            filters: [
                { text: 'Approved', value: 'approved' },
                { text: 'Pending', value: 'pending' },
                { text: 'Rejected', value: 'rejected' },
            ],
            onFilter: (value, record) => record.status.toLowerCase() === value,
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width: 120,
            render: (_, record) => (
                <div className="flex items-center gap-4">
                    <IoEyeOutline
                        onClick={() => {
                            setIsModalOpen(true),
                            handleView(record)
                        }}
                        className="text-blue-500 cursor-pointer hover:text-blue-700"
                        size={18}
                    />
                    <FaEdit 
                        className="text-green-500 cursor-pointer hover:text-green-700" 
                        size={16} 
                    />
                    <MdDelete
                        className="text-red-500 cursor-pointer hover:text-red-700"
                        size={18}
                        onClick={() => handleDelete([record.key])}
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            {/* Bulk Action Controls */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <Select
                        placeholder="Bulk Actions"
                        size="middle"
                        className="min-w-[140px]"
                        onChange={handleBulkAction}
                        suffixIcon={<RiArrowDropDownLine />}
                    >
                        <Option value="delete">Delete Selected</Option>
                        <Option value="approve">Approve Selected</Option>
                        <Option value="reject">Reject Selected</Option>
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
                loading={isLoading}
                scroll={{ x: 1500 }}
                pagination={{
                    pageSize,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '20', '50', '100'],
                    showTotal: (total) => `Total ${total} applications`,
                    position: ['bottomRight'],
                }}
            />

            <SellsModal
                setIsModalOpen={setIsModalOpen}
                sellerInfo={selectedData}
                isModalOpen={isModalOpen}
            />
        </div>
    );
};

export default SellersTable;