import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Breadcrumb from '../../others/Breadcrumb';

const ReturnExchangeForm = () => {
  return (
<div className='bg-[#FAF8F2] min-h-screen '>
     <div className='px-6'>
       <Breadcrumb />
     </div>
      <div className=" flex items-center justify-center max-w-3xl mx-auto pb-11  px-4">
<div className='bg-[#EAE7E1] w-full py-12 p-6'>
        <h2 className="text-center popbold  text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Return / Exchange Request
        </h2>
          <div className=" w-full rounded-md p-5">

        {/* Product Input */}
        <div className="mb-4 bg-white p-5 rounded-md">
          <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
            <span className="bg-[#CBA135] text-white w-5 h-5 flex items-center justify-center rounded-full text-sm">1</span>
            Select Product from Your Orders
          </label>
          <input
            type="text"
            placeholder="Enter an order..."
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none "
          />
        </div>

        {/* Reason Input */}
        <div className="mb-4  bg-white p-5 rounded-md">
          <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
            <span className="bg-[#CBA135] text-white w-5 h-5 flex items-center justify-center rounded-full text-sm">2</span>
            Reason for Return
          </label>
          <input
            type="text"
            placeholder="Enter a reason..."
            className="w-full px-4 py-2 border rounded-md border-[#E5E7EB]"
          />
        </div>

        {/* Additional Details */}
        <div className="mb-4  bg-white p-5 rounded-md">
          <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
            <span className="bg-[#CBA135] text-white w-5 h-5 flex items-center justify-center rounded-full text-sm">3</span>
            Additional Details (Optional)
          </label>
          <textarea
            rows={5}
            placeholder="Please describe the issue or provide additional details..."
            className="w-full px-4 py-2 border rounded-md resize-none border-[#E5E7EB]"
          />
        </div>

        {/* Upload Photos */}
        <div className="mb-6  bg-white p-5 rounded-md">
          <label className="flex items-center gap-2 text-gray-800 font-medium mb-1">
            <span className="bg-[#CBA135] text-white w-5 h-5 flex items-center justify-center rounded-full text-sm">4</span>
            Upload Photos (Optional)
          </label>
          <div className="border-2 border-dashed flex flex-col justify-center border-gray-300 rounded-md p-4 text-center py-10 text-sm text-gray-500 bg-white cursor-pointer hover:border-yellow-400 transition">
            <FaCloudUploadAlt size={35} className='text-[] mx-auto' />
            <p>Drag and drop images here, or click to browse</p>
            <p className="text-xs mt-1 text-gray-400">PNG, JPG up to 7MB</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className='flex justify-center'>
                    <button className="w-96 bg-[#CBA135] mx-auto text-white font-semibold py-2 rounded hover:bg-yellow-500 transition">
          Submit Return Request
        </button>
        </div>
      </div>
</div>
    </div>
</div>
  );
};

export default ReturnExchangeForm;
