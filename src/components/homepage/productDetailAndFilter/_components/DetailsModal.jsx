import React, { useState } from 'react';
import { Button, Modal, Rate, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './exta.css'

const DetailsModal = ({ isModalOpen, setIsModalOpen }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [fileName, setFileName] = useState('');

  const handleOk = () => {
    // Here you can handle submit
    if (!review.trim()) {
      message.error('Please write a review before submitting.');
      return;
    }

    console.log('Submitting:', { review, rating, fileName });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Write a Review
      </Button>

      <Modal
        title={<p className="text-xl p-6 bg-[#FAF8F2] font-semibold">Write a Review</p>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="p-9 space-y-5">
          {/* Review Textarea */}
          <div>
            <label className="block mb-2 text-sm font-medium">Your Review</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Write your thoughts about the product..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>

          {/* Product Image Upload */}
          <div>
            <label className="block mb-2 text-sm font-medium">Upload Product Image (Optional)</label>
            <div className="flex items-center gap-1">
              <input
                id="uploadFile"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="uploadFile">
                <Button className='bg-[#676767] text-white' icon={<UploadOutlined />}>Choose File</Button>
              </label>
              <input
                disabled
                className="border px-3 py-1 rounded-md text-sm text-gray-600 bg-white w-full"
                value={fileName || 'No file selected'}
              />
            </div>
          </div>

          {/* Rating Input */}
<div>
  <label className="block mb-2 text-xl  font-medium text-black">Your Rating</label>
  <Rate
    onChange={(value) => setRating(value)}
    value={rating}
    className="text-[#CBA135]  " // Optional, may not override directly
  />
</div>

          <div className='flex justify-center'>
            <Button className='bg-[#CBA135] text-white px-11'>Submit</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DetailsModal;
