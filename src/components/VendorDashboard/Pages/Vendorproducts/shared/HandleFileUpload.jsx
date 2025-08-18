import React, { useRef, useState, useEffect } from 'react';
import { FaTimes, FaFileUpload } from 'react-icons/fa';
import { Button, Upload, message } from 'antd';

const HandleFileUpload = ({
  images = [],
  onImageUpload,
  onImageRemove,
  maxFiles = 5,
  uploadText = "Drag and drop product images here",
  browseText = "or click to browse",
  buttonText = "Browse Files"
}) => {
  const [fileList, setFileList] = useState([]);
  const batchRef = useRef([]);
  const timeoutRef = useRef();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleChange = (info) => {
    if (info.file) {
      batchRef.current.push(info.file.originFileObj);
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const newFiles = batchRef.current;
      batchRef.current = [];

      if (newFiles.length > 0) {
        if (images.length + newFiles.length > maxFiles) {
          message.error(`You can upload maximum ${maxFiles} images`);
        } else {
          onImageUpload(newFiles);
        }
        setFileList([]);
      }
    }, 300);
  };

  const removeImage = (index) => {
    onImageRemove(index);
  };

  return (
    <div className="space-y-4">
      {images.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img.preview || img.url}
                alt={`Preview ${index}`}
                className="h-24 w-24 object-cover rounded-md border border-gray-200"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
              >
                <FaTimes size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
      
      <Upload.Dragger
        accept="image/*"
        multiple
        fileList={fileList}
        beforeUpload={() => false}
        onChange={handleChange}
        showUploadList={false}
        className="bg-[#EAE7E1] p-6 flex flex-col items-center gap-2 rounded-md border border-dashed border-[#CBA135] cursor-pointer"
      >
        <FaFileUpload size={32} className="text-[#CBA135]" />
        <p className="text-gray-700 text-sm">{uploadText}</p>
        <p className="text-gray-500 text-sm">{browseText} (Max {maxFiles} images)</p>
        <Button type="button" className="bg-[#CBA135] text-white mt-2">
          {buttonText}
        </Button>
      </Upload.Dragger>
    </div>
  );
};

export default HandleFileUpload;