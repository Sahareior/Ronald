import React, { useState } from 'react';
import { Button, Modal, Rate, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const DetailsModal = ({ isModalOpen, setIsModalOpen }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [fileName, setFileName] = useState('');

  const handleOk = () => {
    if (!review.trim()) {
      message.error('Please write a review before submitting.');
      return;
    }

    console.log('Submitted Review:', {
      review,
      rating,
      fileName,
    });

    setIsModalOpen(false);
    setReview('');
    setRating(0);
    setFileName('');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <>
    

      <Modal
        title={<p className="text-xl font-semibold px-6 py-4 bg-[#FAF8F2]">Write a Review</p>}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width={600}
      >
        <div className="p-6 space-y-6">
          {/* Review Textarea */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Review</label>
            <textarea
              className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows={4}
              placeholder="Write your thoughts about the product..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload Product Image (Optional)</label>
            <div className="flex items-center gap-2">
              <label htmlFor="uploadFile">
                <Button icon={<UploadOutlined />} className="bg-[#676767] text-white">
                  Choose File
                </Button>
              </label>
              <input
                id="uploadFile"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <input
                disabled
                value={fileName || 'No file selected'}
                className="flex-1 border px-3 py-1 rounded-md text-sm text-gray-600 bg-white"
              />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Rating</label>
            <Rate
              onChange={setRating}
              value={rating}
              className="text-[#CBA135] text-xl"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <Button
              onClick={handleOk}
              className="bg-[#CBA135] text-white px-10"
              disabled={!review.trim()}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DetailsModal;
