import React, { useState } from "react";

const CreatePromotion = () => {
  const [discountType, setDiscountType] = useState("percentage");

  return (
    <div className="w-full  mx-auto bg-white rounded-xl shadow-md border p-6"
    >
      <div className="bg-yellow-600 text-white text-2xl popbold rounded-t-md px-4 py-5" 
        style={{
        background: 'linear-gradient(90deg, #CBA135 0%, #B8941F 100%)'

    }}
      >
        Create New Promotion
        <p className="text-[16px] popreg">Fill in the details below to list your furniture product</p>
      </div>

      <div className="mt-8 space-y-6">
        <div>
          <label className="block popmed text-[14px] mb-1">Promotion Name *</label>
          <input type="text" placeholder="Enter promotion name" className="w-full border rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="block popmed text-[14px] mb-1">Discount Type *</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="discountType"
                value="percentage"
                checked={discountType === "percentage"}
                onChange={() => setDiscountType("percentage")}
              />
              Percentage (%)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="discountType"
                value="flat"
                checked={discountType === "flat"}
                onChange={() => setDiscountType("flat")}
              />
              Flat Amount (৳)
            </label>
          </div>
        </div>

        <div>
          <label className="block popmed text-[14px] mb-1">Discount Value *</label>
          <input type="number" min="0" className="w-full border rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="block popmed text-[14px] mb-1">Select Products *</label>
          <select className="w-full border rounded-md px-3 py-2">
            <option>Select products...</option>
            {/* Add actual product options dynamically */}
          </select>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block popmed text-[14px] mb-1">Start Date & Time *</label>
            <input type="datetime-local" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="flex-1">
            <label className="block popmed text-[14px] mb-1">End Date & Time *</label>
            <input type="datetime-local" className="w-full border rounded-md px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block popmed text-[14px] mb-1">Description / Notes (Optional)</label>
          <textarea rows="3" placeholder="Add any additional notes about this promotion..." className="w-full border rounded-md px-3 py-2" />
        </div>

        {/* Additional Options */}
        <div className="bg-white border rounded-md p-4 mt-4">
          <h3 className="popmed text-[18px] text-yellow-600 mb-2">✨ Additional Options</h3>
          <div className="flex flex-col popmed text-[14px] gap-2">
            <label className="flex flex-col gap-2">
           
              Limit per customer <span className="text-xs text-gray-500">Set maximum uses per customer</span>
            </label>
            <label className="flex flex-col gap-2">
              
              Highlight as featured <span className="text-xs text-gray-500">Show this promotion prominently</span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium">Cancel</button>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md font-medium">Create Promotion</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePromotion;
