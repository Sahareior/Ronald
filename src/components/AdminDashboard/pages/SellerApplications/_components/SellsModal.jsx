import React, { useState } from 'react';
import { Button, Modal, Tag, Image, message } from 'antd';
import { LiaStarSolid } from "react-icons/lia";
import { FaFilePdf, FaFileImage } from 'react-icons/fa';
import { useAcceptSellerMutation, useGetAllSellerApplicationQuery } from '../../../../../redux/slices/Apis/dashboardApis';

const SellsModal = ({ isModalOpen, setIsModalOpen, sellerInfo }) => {
    const { data: applicants, isLoading,refetch } = useGetAllSellerApplicationQuery();
  const [acceptSeller] = useAcceptSellerMutation()


const handleAccept = () => {
  if (!sellerInfo) return;

  const payload = {
    job_title: sellerInfo.jobTitle || "",
    phone_number: sellerInfo.phone || "",
    legal_business_name: sellerInfo.name || "",
    business_address: sellerInfo.businessAddress || "",
    country: sellerInfo.country || "",
    city_town: sellerInfo.city || "",
    state_province: sellerInfo.stateProvince || "",
    postal_code: sellerInfo.postalCode || "",
    established_date: sellerInfo.establishedDate || new Date().toISOString().split('T')[0],
    business_type: sellerInfo.businessType || "",
    taxpayer_number: sellerInfo.documents?.taxpayerDoc || "",
    trade_register_number: sellerInfo.documents?.tradeRegisterDoc || "",
    home_localization_plan: sellerInfo.documents?.homeLocalizationPlan || "",
    business_localization_plan: sellerInfo.documents?.businessLocalizationPlan || ""
  };

  // Assuming your API accepts the ID in the endpoint dynamically
  acceptSeller({ id: sellerInfo.id, payload })
    .unwrap()
    .then(() => {
      message.success("Seller approved successfully!");
      refetch()
      setIsModalOpen(false);
    })
    .catch((err) => {
      message.error("Failed to approve seller.");
      console.error(err);
    });
};


  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  // Function to render status tag with appropriate color
  const renderStatusTag = (status) => {
    let color = '';
    let text = '';
    
    switch(status.toLowerCase()) {
      case 'approved':
        color = 'green';
        text = 'Approved';
        break;
      case 'pending':
        color = 'orange';
        text = 'Pending';
        break;
      case 'rejected':
        color = 'red';
        text = 'Rejected';
        break;
      default:
        color = 'gray';
        text = 'Unknown';
    }
    
    return <Tag color={color}>{text}</Tag>;
  };

  // Function to render document links
  const renderDocumentLink = (url, label) => {
    if (!url) return null;
    
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
    const isPDF = /\.(pdf)$/i.test(url);
    
    return (
      <div className="flex items-center mb-2">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:underline"
        >
          {isImage && <FaFileImage className="mr-1 text-green-500" />}
          {isPDF && <FaFilePdf className="mr-1 text-red-500" />}
          {label}
        </a>
      </div>
    );
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={900}
    >
      <div className="bg-[#f9f8f6] rounded-md w-full p-4 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-[#E5E7EB] px-4 pb-2">
          <h2 className="text-2xl popbold text-gray-900">Seller Application Details</h2>
        </div>

<div className='flex justify-end pt-5'>
          {
  sellerInfo?.status === "approved" ? (
    <Button className="bg-[#F87171] text-white">Reject</Button>
  ) : (
    <Button onClick={()=> handleAccept()} className="bg-[#CBA135] text-white">Approve</Button>
  )
}
</div>

        {/* Seller Information */}
        <div className="p-6 bg-white shadow-sm rounded mt-4">
          <h3 className="text-lg popbold text-gray-700 mb-4">Business Information</h3>

          <div className="grid grid-cols-3 gap-y-4 text-sm text-gray-700 mb-6">
            <div>
              <p className="popmed text-sm text-gray-500">Business Name</p>
              <p className="text-sm popreg font-medium">{sellerInfo?.name || 'N/A'}</p>
            </div>
            <div>
              <p className="popmed text-sm text-gray-500">Job Title</p>
              <p className="text-sm popreg">{sellerInfo?.jobTitle || 'N/A'}</p>
            </div>
            <div>
              <p className="popmed text-sm text-gray-500">Phone</p>
              <p className="text-sm popreg">{sellerInfo?.phone || 'N/A'}</p>
            </div>

            <div>
              <p className="popmed text-sm text-gray-500">City</p>
              <p className="text-sm popreg">{sellerInfo?.city || 'N/A'}</p>
            </div>
            <div>
              <p className="popmed text-sm text-gray-500">Country</p>
              <p className="text-sm popreg">{sellerInfo?.country || 'N/A'}</p>
            </div>
            <div>
              <p className="popmed text-sm text-gray-500">Established Date</p>
              <p className="text-sm popreg">
                {sellerInfo?.establishedDate 
                  ? new Date(sellerInfo.establishedDate).toLocaleDateString() 
                  : 'N/A'}
              </p>
            </div>

            <div>
              <p className="popmed text-sm text-gray-500">Business Type</p>
              <p className="text-sm popreg">{sellerInfo?.businessType || 'N/A'}</p>
            </div>
            <div>
              <p className="popmed text-sm text-gray-500">Status</p>
              <div className="text-sm popreg">
                {sellerInfo?.status ? renderStatusTag(sellerInfo.status) : 'N/A'}
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <h3 className="text-lg popbold text-gray-700 mb-4">Documents</h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="popmed text-sm text-gray-500 mb-2">National ID</p>
              <div className="flex flex-wrap gap-4 mb-4">
                {sellerInfo?.documents?.nidFront && (
                  <div className="flex flex-col items-center">
                    <p className="popmed text-xs text-gray-500 mb-1">Front</p>
                    <img src={sellerInfo.documents.nidFront} alt="" />
                    <Image
                      width={100}
                      src={sellerInfo.documents.nidFront}
                      alt="NID Front"
                      className="border rounded"
                    />
                  </div>
                )}
                {sellerInfo?.documents?.nidBack && (
                  <div className="flex flex-col items-center">
                    <p className="popmed text-xs text-gray-500 mb-1">Back</p>
                    <Image
                      width={100}
                      src={sellerInfo.documents.nidBack}
                      alt="NID Back"
                      className="border rounded"
                    />
                  </div>
                )}
              </div>
              
              <p className="popmed text-sm text-gray-500 mb-2">Taxpayer Document</p>
              {sellerInfo?.documents?.taxpayerDoc && (
                <Image
                  width={200}
                  src={sellerInfo.documents.taxpayerDoc}
                  alt="Taxpayer Document"
                  className="border rounded mb-4"
                />
              )}
            </div>
            
            <div>
              <p className="popmed text-sm text-gray-500 mb-2">Trade Register</p>
              {sellerInfo?.documents?.tradeRegisterDoc && (
                <Image
                  width={200}
                  src={sellerInfo.documents.tradeRegisterDoc}
                  alt="Trade Register Document"
                  className="border rounded mb-4"
                />
              )}
              
              <div className="mt-4">
                <p className="popmed text-sm text-gray-500 mb-2">Document Links</p>
                {renderDocumentLink(sellerInfo?.documents?.nidFront, "National ID Front")}
                {renderDocumentLink(sellerInfo?.documents?.nidBack, "National ID Back")}
                {renderDocumentLink(sellerInfo?.documents?.taxpayerDoc, "Taxpayer Document")}
                {renderDocumentLink(sellerInfo?.documents?.tradeRegisterDoc, "Trade Register Document")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SellsModal;